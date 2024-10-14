// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [
      { id: 1, sender: 'user', text: 'Hello!' },
      { id: 2, sender: 'bot', text: 'Hi! How can I help you today?' },
    ],
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = chatSlice.actions;

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export default store;
