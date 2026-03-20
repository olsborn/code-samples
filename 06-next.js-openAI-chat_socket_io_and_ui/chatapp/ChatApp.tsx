'use client';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { addMessage, updateMessage, createNewChat, setLoading, hydrate } from './chatSlice';
import { Send, UserCircle, Bot, Menu, X } from 'lucide-react';
import classes from './chat.module.css';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { saveState, loadState } from './localstore';
import ErrorCmp from './ErrorCmp';
import ChatSidebar from './ChatSidebar';

type ReplyPayload = { chatId: string; content: string; messageId?: string };

export default function ChatApp() {
  const [error, setError] = useState<Error | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  //console.log(process.env.NEXT_PUBLIC_SOCKET_SERVER_PATH);

  // Socket.IO client singleton
  const socketRef = useRef<Socket | null>(null);
  useEffect(() => {
    if (!socketRef.current && typeof window !== 'undefined') {
      const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_PATH || 'http://localhost:4000');
      socketRef.current = socket;
      socket.on('connect_error', (err) => {
        setError(new Error('Socket.IO connection failed: ' + err.message));
        socket.disconnect();
        socketRef.current = null;
      });
    }
  }, []);

  const chatState = useSelector((state: RootState) => state.chat);
  const currentChat = chatState.chats.find((c) => c.id === chatState.currentChatId);
  const messages = currentChat ? currentChat.messages : [];
  const loading = chatState.loading;

  const [input, setInput] = useState('');
  const [model, setModel] = useState('gpt-4');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      loadState((chatState) => {
        dispatch(hydrate(chatState));
        dispatch(setLoading(false));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      saveState(chatState);
    }
  }, [chatState]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Socket listeners (only once)
  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    const handleReply = (data: ReplyPayload) => {
      const assistantMessage = {
        id: data.messageId,
        role: 'assistant',
        content: data.content,
        timestamp: Date.now(),
        loading: false,
      };
      dispatch(updateMessage({ chatId: data.chatId, message: assistantMessage }));
      dispatch(setLoading(false));
    };
    const handleError = (err: string) => {
      setError(new Error(`Server error: ${err}`));
      dispatch(setLoading(false));
    };
    socket.on('reply', handleReply);
    socket.on('error', handleError);
    return () => {
      socket.off('reply', handleReply);
      socket.off('error', handleError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async () => {
    const userMessage = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    let chatId = chatState.currentChatId;

    if (!chatId) {
      chatId = `chat_${uuidv4()}`;
      dispatch(
        createNewChat({
          id: chatId,
          messages: [],
        })
      );
    }

    dispatch(addMessage({ chatId, message: userMessage }));

    setInput('');
    dispatch(setLoading(true));
    /**** test */
    /*
    const tempMessage = {
      role: 'assistant',
      content: uuidv4(),
      timestamp: Date.now(),
    };

    dispatch(addMessage({ chatId, message: tempMessage }));
    dispatch(setLoading(false));
    return;
    /***** test ends here */

    // Socket.IO logic
    const socket = socketRef.current;
    if (!socket) {
      console.error('Socket.IO client not initialized');
      dispatch(setLoading(false));
      return;
    }

    const messageId = `message_${uuidv4()}`;
    const assistantMessage = {
      id: messageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      loading: true,
    };
    dispatch(addMessage({ chatId, message: assistantMessage }));

    socket.emit('chat', {
      chatId,
      messages: [...messages, userMessage],
      model,
      messageId,
    });
  };

  if (error) {
    return <ErrorCmp error={error} />;
  }

  return (
    <div className={classes.chatApp}>
      {/* Logo */}
      <div className={classes.logo}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
          <circle cx="12" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="28" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.95" />
          <circle cx="12" cy="28" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="28" cy="28" r="2.5" fill="white" fillOpacity="0.9" />
          <line
            x1="12"
            y1="12"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="28"
            y1="12"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="20"
            y1="20"
            x2="12"
            y2="28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="20"
            y1="20"
            x2="28"
            y2="28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M20 8 L21 11 L24 10 L22 13 L25 14 L22 15 L23 18 L20 16 L17 18 L18 15 L15 14 L18 13 L16 10 L19 11 Z"
            fill="white"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile Menu Toggle */}
      <button className={classes.mobileMenuToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <ChatSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Chat Area */}
      <div className={classes.chatMain}>
        <div className={classes.chatHeader}>
          <h3 className={classes.chatTitle}>AI Chat Assistant</h3>
        </div>

        <div className={classes.messagesContainer}>
          {messages.map((m, key) => (
            <div
              key={key}
              className={`${classes.messageWrapper} ${
                m.role === 'user' ? classes.messageWrapperUser : classes.messageWrapperAssistant
              }`}
            >
              {m.role === 'assistant' && (
                <div className={classes.messageIcon}>
                  <Bot size={18} />
                </div>
              )}
              <div
                className={`${classes.messageContent} ${
                  m.role === 'user' ? classes.messageUser : classes.messageAssistant
                }`}
              >
                {!m?.loading ? (
                  m.content
                ) : (
                  <span className={classes.dotsLoader} aria-label="Loading">
                    <span className={classes.dot}></span>
                    <span className={classes.dot}></span>
                    <span className={classes.dot}></span>
                  </span>
                )}
              </div>
              {m.role === 'user' && (
                <div className={classes.messageIcon}>
                  <UserCircle size={18} />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={classes.inputArea}>
          <form
            className={classes.inputForm}
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) sendMessage();
            }}
          >
            <textarea
              className={classes.textarea}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) sendMessage();
                }
              }}
              disabled={loading}
              placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
            />
            <div className={classes.inputControls}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <select
                  className={classes.modelSelect}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={loading}
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-4o">GPT-4o</option>
                  <option value="gpt-4-turbo">GPT-4 Turbo</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                </select>
                <span className={classes.characterCount}>{input.length} characters</span>
              </div>
              <button
                type="submit"
                className={classes.sendButton}
                disabled={loading || !input.trim()}
              >
                {loading ? <span className={classes.spinner}></span> : <Send size={18} />}
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
