import { create } from 'zustand';
import type { Message } from '../types';

interface WidgetState {
  isOpen: boolean;
  messages: Message[];
  leadData: Record<string, any>;
  isTyping: boolean;

  toggleOpen: () => void;
  addMessage: (content: string, type: 'user' | 'bot') => void;
  updateLeadData: (key: string, value: any) => void;

  setTyping: (isTyping: boolean) => void;
}

export const useWidgetStore = create<WidgetState>((set) => ({
  isOpen: false,
  
  messages: [
    {
      id: 'welcome-1',
      type: 'bot',
      content: 'Hello! 👋 How can we help you today?',
      timestamp: new Date(),
    },
  ],
  leadData: {},

  isTyping: false,

  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  addMessage: (content, type) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          type,
          content,
          timestamp: new Date(),
        },
      ],
    })),

  updateLeadData: (key, value) => set((state) => ({
    leadData: { 
      ...state.leadData,
      [key]: value
    }
  })),

  setTyping: (isTyping) => set({ isTyping }),
}));