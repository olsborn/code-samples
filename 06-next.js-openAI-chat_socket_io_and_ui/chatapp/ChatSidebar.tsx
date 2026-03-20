import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat, deleteChat, resetChat } from './chatSlice';
import { MessageSquare, Trash2, Plus } from 'lucide-react';
import { RootState } from './store';
import classes from './chat.module.css';

export default function ChatSidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chat.chats);

  return (
    <aside className={`${classes.sidebar} ${sidebarOpen ? classes.sidebarOpen : ''}`}>
      <div className={classes.sidebarHeader}>
        <h3 className={classes.sidebarTitle}>Chat History</h3>
        <button
          className={classes.newChatButton}
          onClick={() => {
            dispatch(resetChat());
            setSidebarOpen(false);
          }}
        >
          <Plus size={20} />
          New Chat
        </button>
      </div>

      <div className={classes.chatList}>
        {chats.map((chat) => {
          const firstMsg = chat.messages[0]?.content || '';
          const preview = firstMsg.split(' ').slice(0, 5).join(' ');
          const messageCount = chat.messages.filter((m) => !m.loading).length;

          return (
            <div key={chat.id} className={classes.chatItem}>
              <div
                className={classes.chatItemContent}
                onClick={() => {
                  dispatch(setCurrentChat(chat.id));
                  setSidebarOpen(false);
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <MessageSquare size={14} />
                  <div className={classes.chatItemPreview}>{preview || 'No messages yet'}</div>
                </div>
                <div className={classes.chatItemMeta}>{messageCount} messages</div>
              </div>
              <button
                className={classes.deleteButton}
                title="Delete chat"
                onClick={() => dispatch(deleteChat(chat.id))}
              >
                <Trash2 size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
