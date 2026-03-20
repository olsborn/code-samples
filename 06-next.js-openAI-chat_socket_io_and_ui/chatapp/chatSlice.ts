import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id?: string;
  role: string;
  content: string;
  timestamp: number;
  loading?: boolean;
}

export interface Chat {
  id: string;
  messages: Message[];
}

export interface ChatState {
  currentChatId: string | null;
  chats: Chat[];
  loading: boolean;
}

const initialState: ChatState = {
  currentChatId: null,
  chats: [],
  loading: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateMessage(state, action: PayloadAction<{ chatId: string; message: Partial<Message> }>) {
      const { chatId, message } = action.payload;
      if (!message.id) return;
      const chat = state.chats.find((c) => c.id === chatId);
      if (!chat) return;
      const msgIdx = chat.messages.findIndex((m) => m.id === message.id);
      if (msgIdx === -1) return;
      // Nadpisz tylko podane pola, reszta zostaje bez zmian
      chat.messages[msgIdx] = {
        ...chat.messages[msgIdx],
        ...message,
        content: message.content
          ? chat.messages[msgIdx].content + message.content
          : chat.messages[msgIdx].content,
      };
    },
    setCurrentChat(state, action: PayloadAction<string | null>) {
      state.currentChatId = action.payload;
    },
    addMessage(state, action: PayloadAction<{ chatId: string; message: Message }>) {
      //console.log({ chatId: action.payload.chatId, message: action.payload.message });
      const chat = state.chats.find((c) => c.id === action.payload.chatId);
      if (chat) {
        chat.messages.push(action.payload.message);
      }
    },
    deleteChat(state, action: PayloadAction<string>) {
      state.chats = state.chats.filter((c) => c.id !== action.payload);
      if (state.currentChatId === action.payload) {
        state.currentChatId = null;
      }
    },
    resetChat(state) {
      state.currentChatId = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    createNewChat(state, action: PayloadAction<Chat>) {
      const exists = state.chats.some((chat) => chat.id === action.payload.id);
      if (!exists) {
        state.chats.push(action.payload);
      }
      state.currentChatId = action.payload.id;
    },
    hydrate(state, action: PayloadAction<ChatState>) {
      return action.payload;
    },
  },
});

export const {
  setCurrentChat,
  addMessage,
  deleteChat,
  resetChat,
  createNewChat,
  setLoading,
  hydrate,
  updateMessage,
} = chatSlice.actions;
export default chatSlice.reducer;
