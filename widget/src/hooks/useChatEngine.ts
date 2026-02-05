import { useState } from 'react';
import { useWidgetStore } from '../store/useWidgetStore';
import { chatConfig } from '../core/chatConfig';
import type { Option } from '../types/conversation';
import { submitLead } from '../services/api';

export const useChatEngine = () => {
  const [currentStepId, setCurrentStepId] = useState<string>('start');

  const addMessage = useWidgetStore((state) => state.addMessage);
  const updateLeadData = useWidgetStore((state) => state.updateLeadData);
  const setTyping = useWidgetStore((state) => state.setTyping);

  const handleUserResponse = (input: string, option?: Option) => {
    const currentStepConfig = chatConfig[currentStepId];

    if (currentStepConfig.type.startsWith('input-')) {
      if (currentStepConfig.type === 'input-email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
          addMessage("That doesn't look like a valid email. Please try again.", 'bot');
          return;
        }
        updateLeadData('email', input);
      }
    }

    if (option?.value) {
      updateLeadData('category', option.value);
    }

    addMessage(input, 'user');

    const nextId = option?.nextStepId ?? currentStepConfig.nextStepId;

    setTyping(true);

    if (!nextId) {
      console.warn("No next step found for", currentStepId);
      setTyping(false);
      return;
    }

    setTimeout(async () => {
      const nextStep = chatConfig[nextId];
      if (!nextStep) {
        setTyping(false);
        return;
      }

      addMessage(nextStep.message, 'bot');
      setCurrentStepId(nextStep.id);

      if (nextStep.type === 'end') {
        const finalLeadData = useWidgetStore.getState().leadData;

        console.log("🚀 Submitting Lead to Backend...", finalLeadData);

        try {
          const response = await submitLead(finalLeadData);
          console.log("✅ Server confirmed receipt:", response);
        } catch (err) {
          console.error("❌ Lead submission failed:", err);
        }
      }

      setTyping(false);

    }, 1000);
  };

  return {
    currentStepId,
    handleUserResponse,
  };
};
