export type MessageType = 'user' | 'bot';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}
