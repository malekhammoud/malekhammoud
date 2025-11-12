// Google Analytics event tracking utility

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Predefined tracking functions for common events
export const trackChatbotEvent = {
  opened: () => {
    trackEvent('chatbot_opened', {
      event_category: 'engagement',
      event_label: 'Chatbot Opened'
    });
  },
  
  closed: () => {
    trackEvent('chatbot_closed', {
      event_category: 'engagement',
      event_label: 'Chatbot Closed'
    });
  },
  
  messageSent: (messageLength, messageContent) => {
    trackEvent('chatbot_message_sent', {
      event_category: 'engagement',
      event_label: 'User Message Sent',
      value: messageLength,
      message_content: messageContent
    });
  },
  
  responseReceived: (responseTime, responseContent) => {
    trackEvent('chatbot_response_received', {
      event_category: 'engagement',
      event_label: 'Bot Response Received',
      value: responseTime,
      response_content: responseContent
    });
  },
  
  error: (errorMessage) => {
    trackEvent('chatbot_error', {
      event_category: 'error',
      event_label: errorMessage
    });
  }
};
