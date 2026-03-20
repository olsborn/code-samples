'use client';
import { use, useState } from 'react';
import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

import ChatContainer from './ChatContainer';

import ErrorCmp from './ErrorCmp';
import ErrorCatcher from './ErrorCatcher';

export default function ChatApp() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([{ role: 'system', content: 'Shall we talk?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('gpt-4');
  const [error, setError] = useState<Error | null>(null); // error handling

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages, model }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      setError(new Error(`Server error: ${res.statusText}`));
      setLoading(false);
      return;
    }

    const data = await res.json();

    if (data.error) {
      setError(new Error(data.error));
      setLoading(false);
      return;
    }

    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    setLoading(false);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (error) {
    return <ErrorCmp error={error} />;
  }

  return (
    <ErrorCatcher fallback={(error) => <ErrorCmp error={error} />}>
      <ChatContainer>
        <div className="card-header bg-primary text-white text-center">
          <h3 className="text-white">Chat Gpt</h3>
        </div>
        <div className="card-body p-4" style={{ minHeight: 350 }}>
          <div
            className="mb-3 overflow-auto px-2"
            style={{ maxHeight: 'calc(100vh - 580px)', minHeight: '250px' }}
          >
            {/* <div style={{ height: '1000px' }}></div> */}
            {messages
              .filter((m) => m.role !== 'system')
              .map((m, i) => (
                <div
                  key={i}
                  className={`mb-2 d-flex ${
                    m.role === 'user' ? 'justify-content-end' : 'justify-content-start'
                  }`}
                >
                  <div
                    className={`p-2 rounded ${
                      m.role === 'user' ? 'bg-primary text-white' : 'bg-light border text-dark'
                    }`}
                    style={{ maxWidth: '80%' }}
                  >
                    <strong className="me-2">{m.role === 'user' ? 'You' : 'GPT'}:</strong>{' '}
                    {m.content}
                  </div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="d-flex flex-column gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) sendMessage();
            }}
          >
            <textarea
              className="form-control"
              rows={3}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) sendMessage();
                }
                // Shift+Enter inserts newline by default
              }}
              disabled={loading}
              placeholder="Type your message..."
            />
            <div className="text-end text-muted small mb-1">{input.length} characters</div>
            <div className="d-flex align-items-center gap-2 justify-content-between">
              <select
                className="form-select form-select-sm w-auto"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                disabled={loading}
                style={{ minWidth: 100, maxWidth: 140 }}
              >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-4o">GPT-4o</option>
                <option value="gpt-4-turbo">GPT-4 Turbo</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              </select>
              <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : null}
                <Send size={16} />
                {` `}Send message
              </button>
            </div>
          </form>
        </div>
      </ChatContainer>
    </ErrorCatcher>
  );
}
