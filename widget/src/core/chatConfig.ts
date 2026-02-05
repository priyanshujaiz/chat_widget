import type { ChatFlow } from '../types/conversation';

export const chatConfig: ChatFlow = {
  start: {
    id: 'start',
    message: 'Hi there! 👋 Welcome to Chatbot. What brings you here today?',
    type: 'options',
    options: [
      { label: 'Technical Support', nextStepId: 'support_product_select', value: 'intent_support' },
      { label: 'Sales & Pricing', nextStepId: 'sales_team_size', value: 'intent_sales' },
      { label: 'Just Browsing', nextStepId: 'browsing_start', value: 'intent_browsing' },
    ],
  },

  support_product_select: {
    id: 'support_product_select',
    message: 'I can help with that. Which product are you using?',
    type: 'options',
    options: [
      { label: 'Dashboard', nextStepId: 'support_issue_type', value: 'product_dashboard' },
      { label: 'Mobile App', nextStepId: 'support_issue_type', value: 'product_mobile' },
      { label: 'API / Integration', nextStepId: 'support_api_issue', value: 'product_api' },
    ],
  },

  support_issue_type: {
    id: 'support_issue_type',
    message: 'Got it. What kind of issue are you facing?',
    type: 'options',
    options: [
      { label: 'Login / Account', nextStepId: 'troubleshoot_login', value: 'issue_login' },
      { label: 'Performance', nextStepId: 'collect_email_support', value: 'issue_performance' },
      { label: 'Something Broken', nextStepId: 'collect_email_support', value: 'issue_bug' },
    ],
  },

  troubleshoot_login: {
    id: 'troubleshoot_login',
    message: 'For login issues, have you tried resetting your password via the link on the login page?',
    type: 'options',
    options: [
      { label: 'Yes, didn’t work', nextStepId: 'collect_email_urgent', value: 'reset_failed' },
      { label: 'No, let me try', nextStepId: 'support_pause', value: 'will_try_reset' },
    ],
  },
  support_pause: {
    id: 'support_pause',
    message: 'No problem! I’ll be here. If it works, great. If not, just reply here.',
    type: 'options',
    options: [
      { label: 'It worked!', nextStepId: 'support_solved' },
      { label: 'Still stuck', nextStepId: 'collect_email_urgent' },
    ],
  },
  support_solved: {
    id: 'support_solved',
    message: 'Awesome! Glad to hear it. Have a great day! 🎉',
    type: 'end',
  },

  support_api_issue: {
    id: 'support_api_issue',
    message: 'API issues usually require a look at the logs. Do you have a specific error code?',
    type: 'options',
    options: [
      { label: '500 Server Error', nextStepId: 'collect_email_dev' },
      { label: '401 Unauthorized', nextStepId: 'api_401_tip' },
      { label: 'Other', nextStepId: 'collect_email_dev' },
    ],
  },
  api_401_tip: {
    id: 'api_401_tip',
    message: 'For 401s, please check that your Bearer Token is not expired. If it persists, let us know.',
    type: 'options',
    options: [
      { label: 'Check Docs', nextStepId: 'support_solved' },
      { label: 'Still broken', nextStepId: 'collect_email_dev' },
    ],
  },

  sales_team_size: {
    id: 'sales_team_size',
    message: 'Exciting! To get you the right info, how big is your team?',
    type: 'options',
    options: [
      { label: 'Just me (1)', nextStepId: 'sales_starter', value: 'size_1' },
      { label: 'Start-up (2-50)', nextStepId: 'sales_growth', value: 'size_startup' },
      { label: 'Enterprise (50+)', nextStepId: 'sales_enterprise', value: 'size_enterprise' },
    ],
  },

  sales_starter: {
    id: 'sales_starter',
    message: 'For solo users, our "Starter" plan is free forever! You can sign up directly on our homepage.',
    type: 'options',
    options: [
      { label: 'Send me a link', nextStepId: 'collect_email_link' },
      { label: 'I have questions', nextStepId: 'collect_email_sales' },
    ],
  },

  sales_enterprise: {
    id: 'sales_enterprise',
    message: 'We offer dedicated instances and SLAs for large teams. Would you like a demo?',
    type: 'options',
    options: [
      { label: 'Book Demo', nextStepId: 'collect_email_demo' },
      { label: 'Just pricing info', nextStepId: 'collect_email_sales' },
    ],
  },

  browsing_start: {
    id: 'browsing_start',
    message: 'No worries! Take your time. We have a great blog if you want to learn more about our tech.',
    type: 'options',
    options: [
      { label: 'Subscribe to newsletter', nextStepId: 'collect_email_newsletter' },
      { label: 'Thanks', nextStepId: 'support_solved' },
    ],
  },

  collect_email_support: {
    id: 'collect_email_support',
    message: 'I see. Please leave your email so our support team can review your case.',
    type: 'input-email',
    nextStepId: 'final_msg_support',
  },
  collect_email_urgent: {
    id: 'collect_email_urgent',
    message: 'That sounds frustrating. Enter your email, and I will flag this as "High Priority" for our team.',
    type: 'input-email',
    nextStepId: 'final_msg_support',
  },
  collect_email_dev: {
    id: 'collect_email_dev',
    message: 'Developer support handles these. What is your work email?',
    type: 'input-email',
    nextStepId: 'final_msg_dev',
  },

  collect_email_sales: {
    id: 'collect_email_sales',
    message: 'Perfect. What is the best email to reach you at?',
    type: 'input-email',
    nextStepId: 'final_msg_sales',
  },
  collect_email_demo: {
    id: 'collect_email_demo',
    message: 'Let’s get that demo scheduled. Please enter your work email.',
    type: 'input-email',
    nextStepId: 'final_msg_sales',
  },

  final_msg_support: {
    id: 'final_msg_support',
    message: 'Thanks. Ticket #4928 created. We will email you shortly!',
    type: 'end',
  },
  final_msg_dev: {
    id: 'final_msg_dev',
    message: 'Log received. Our engineering team is looking into it.',
    type: 'end',
  },
  final_msg_sales: {
    id: 'final_msg_sales',
    message: 'Got it. An account executive will reach out within 24 hours.',
    type: 'end',
  },
};