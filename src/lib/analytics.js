// Google Analytics event tracking utility

// Enable debug mode - set to false in production if you want
const DEBUG_MODE = false;

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
      if (DEBUG_MODE) {
        console.log('✅ GA4 Event Sent:', {
          event: eventName,
          params: eventParams,
          timestamp: new Date().toISOString()
        });
      }
    } else {
      // Silently no-op when GA is not available to avoid console noise in dev/build/tests
      // console.debug('GA not loaded, skipping event:', eventName, eventParams)
    }
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

// Resume tracking
export const trackResumeEvent = {
  viewed: (source) => {
    trackEvent('resume_viewed', {
      event_category: 'document',
      event_label: 'Resume Opened',
      source: source || 'unknown'
    });
  },

  downloaded: (source) => {
    trackEvent('resume_downloaded', {
      event_category: 'document',
      event_label: 'Resume Downloaded',
      source: source || 'unknown'
    });
  }
};

// Terminal tracking
export const trackTerminalEvent = {
  opened: () => {
    trackEvent('terminal_opened', {
      event_category: 'engagement',
      event_label: 'Interactive Terminal Opened'
    });
  },

  closed: () => {
    trackEvent('terminal_closed', {
      event_category: 'engagement',
      event_label: 'Interactive Terminal Closed'
    });
  },

  commandExecuted: (command) => {
    trackEvent('terminal_command', {
      event_category: 'engagement',
      event_label: 'Terminal Command Executed',
      command: command
    });
  }
};

// Navigation tracking
export const trackNavigationEvent = {
  linkClicked: (linkText, destination) => {
    trackEvent('nav_link_clicked', {
      event_category: 'navigation',
      event_label: linkText,
      destination: destination
    });
  },

  externalLinkClicked: (linkText, destination) => {
    trackEvent('external_link_clicked', {
      event_category: 'navigation',
      event_label: linkText,
      destination: destination
    });
  }
};

// Project tracking
export const trackProjectEvent = {
  viewed: (projectName, projectType) => {
    trackEvent('project_viewed', {
      event_category: 'content',
      event_label: projectName,
      project_type: projectType
    });
  },

  linkClicked: (projectName, linkType) => {
    trackEvent('project_link_clicked', {
      event_category: 'engagement',
      event_label: projectName,
      link_type: linkType // 'github', 'demo', 'article', etc.
    });
  }
};

// Social media tracking
export const trackSocialEvent = {
  clicked: (platform, location) => {
    trackEvent('social_link_clicked', {
      event_category: 'social',
      event_label: platform,
      location: location // 'header', 'footer', 'about', etc.
    });
  }
};

// Newsletter/Form tracking
export const trackFormEvent = {
  submitted: (formName) => {
    trackEvent('form_submitted', {
      event_category: 'engagement',
      event_label: formName
    });
  },

  newsletterSubscribed: (email) => {
    trackEvent('newsletter_subscribed', {
      event_category: 'conversion',
      event_label: 'Newsletter Subscription',
      user_email: email
    });
  }
};

// Article/Blog tracking
export const trackArticleEvent = {
  viewed: (articleTitle) => {
    trackEvent('article_viewed', {
      event_category: 'content',
      event_label: articleTitle
    });
  },

  readTime: (articleTitle, timeInSeconds) => {
    trackEvent('article_read_time', {
      event_category: 'engagement',
      event_label: articleTitle,
      value: timeInSeconds
    });
  }
};

// Page engagement tracking
export const trackEngagementEvent = {
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      event_label: `Scrolled ${percentage}%`,
      value: percentage
    });
  },

  timeOnPage: (pageName, timeInSeconds) => {
    trackEvent('time_on_page', {
      event_category: 'engagement',
      event_label: pageName,
      value: timeInSeconds
    });
  }
};
