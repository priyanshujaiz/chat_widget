export type StepType = 'text' | 'options' | 'input-email' | 'end';

export interface Option {
  label: string;
  nextStepId: string;
  value?:string;
}

export interface ConversationStep {
  id: string;
  message: string;
  type: StepType;
  options?: Option[];
  nextStepId?: string;
}

export type ChatFlow = Record<string, ConversationStep>;
