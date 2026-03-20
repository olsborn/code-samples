'use client';
import { Provider } from 'react-redux';
import store from '@/chatapp/store';
import ChatApp from './ChatApp';

export default function ChatAppClient() {
  return (
    <Provider store={store}>
      <ChatApp />
    </Provider>
  );
}
