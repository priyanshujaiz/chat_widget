import { useEffect, useRef } from 'react';
import { useWidgetStore } from '../store/useWidgetStore';
import { MessageBubble } from './MessageBubble';
import { TypingBubble } from './ui/TypingBubble';

export const MessageList = () => {

const messages = useWidgetStore((state) => state.messages);
const isTyping = useWidgetStore((state) => state.isTyping);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      <div className="flex flex-col">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isTyping && <TypingBubble />}
      </div>
      <div ref={bottomRef} />
    </div>
  );
};