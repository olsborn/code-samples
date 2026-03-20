import { ChatState } from './chatSlice';
import { z } from 'zod';

const MessageSchema = z.object({
  id: z.string().optional(),
  role: z.string(),
  content: z.string(),
  timestamp: z.number(),
  loading: z.boolean().optional(),
});

const ChatSchema = z.object({
  id: z.string(),
  messages: z.array(MessageSchema),
});

const ChatStateSchema = z.object({
  chats: z.array(ChatSchema),
  currentChatId: z.string().nullable(),
  loading: z.boolean(),
});

export function saveState(state: ChatState) {
  localStorage.setItem('chatState', JSON.stringify(state));
}

export function loadState(callback: (chatState: ChatState) => void): void {
  const saved = localStorage.getItem('chatState');
  if (saved) {
    const parsed = JSON.parse(saved);
    const result = ChatStateSchema.safeParse(parsed);
    if (result.success) {
      // Remove all messages with loading: true
      const filtered = {
        ...result.data,
        chats: result.data.chats.map((chat) => ({
          ...chat,
          messages: chat.messages.filter((m) => !m.loading && m.content.trim() !== ''),
        })),
      };
      callback(filtered);
    } else {
      console.error('Failed to load chat state from localStorage:', result.error);
    }
  }
}
