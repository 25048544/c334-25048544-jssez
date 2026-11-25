import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/5f6a9dfa-80fb-4968-8287-46f97828f3d5/chat',
  mode: 'window',
  loadPreviousSession: false,
  defaultLanguage: 'en',
  initialMessages: [
    'Hello! I can help you explore the JS-SEZ.',
    'Ask about zones, setup, incentives or staff passes.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Ask about the Johor–Singapore Special Economic Zone.',
      inputPlaceholder: 'Type your question…'
    }
  }
});
