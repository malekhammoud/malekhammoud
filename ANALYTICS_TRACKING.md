# Google Analytics Event Tracking Guide

## 🎯 Currently Implemented Events

### Chatbot Events ✅
- `chatbot_opened` - When user opens the chatbot
- `chatbot_closed` - When user closes the chatbot
- `chatbot_message_sent` - User sends a message (includes message content & length)
- `chatbot_response_received` - Bot responds (includes response content & time)
- `chatbot_error` - Any chatbot errors

### Terminal Events ✅
- `terminal_opened` - When user opens the interactive terminal
- `terminal_closed` - When user closes the terminal
- `terminal_command` - Every command executed (includes command text)

### Resume Events ✅
- `resume_viewed` - When resume link is clicked from:
  - Header navigation (`source: 'header_nav'`)
  - Button on homepage (`source: 'button'`)

## 📋 Available But Not Yet Used

These tracking functions are ready to use - just import and call them:

### Navigation Tracking
```javascript
import { trackNavigationEvent } from '@/lib/analytics'

trackNavigationEvent.linkClicked('Projects', '/projects')
trackNavigationEvent.externalLinkClicked('GitHub', 'https://github.com/...')
```

### Project Tracking
```javascript
import { trackProjectEvent } from '@/lib/analytics'

trackProjectEvent.viewed('GreenGuardian', 'robotics')
trackProjectEvent.linkClicked('GreenGuardian', 'github')
```

### Social Media Tracking
```javascript
import { trackSocialEvent } from '@/lib/analytics'

trackSocialEvent.clicked('GitHub', 'footer')
trackSocialEvent.clicked('LinkedIn', 'header')
```

### Form/Newsletter Tracking
```javascript
import { trackFormEvent } from '@/lib/analytics'

trackFormEvent.submitted('contact_form')
trackFormEvent.newsletterSubscribed('user@email.com')
```

### Article Tracking
```javascript
import { trackArticleEvent } from '@/lib/analytics'

trackArticleEvent.viewed('My Article Title')
trackArticleEvent.readTime('My Article Title', 120) // 120 seconds
```

### Engagement Tracking
```javascript
import { trackEngagementEvent } from '@/lib/analytics'

trackEngagementEvent.scrollDepth(75) // User scrolled 75%
trackEngagementEvent.timeOnPage('Home', 45) // Spent 45 seconds
```

## 🔧 Debug Mode

Debug mode is currently **ENABLED** in `/src/lib/analytics.js`:
```javascript
const DEBUG_MODE = true; // Set to false in production
```

When enabled, every event logs to browser console with:
- ✅ Event name
- 📊 Event parameters
- ⏰ Timestamp

**Recommended:** Set to `false` before deploying to production.

## 📊 Viewing Events in Google Analytics

### Viewing Event Parameters (Message Content, Commands, etc.)

#### ⚠️ IMPORTANT: One-Time Setup Required

Custom parameters (like `message_content`, `command`, etc.) won't show in reports until you register them:

1. Go to **Configure** → **Custom definitions** in GA4
2. Click **"Create custom dimensions"**
3. Add these custom dimensions:

| Dimension name | Event parameter | Scope |
|----------------|-----------------|-------|
| Message Content | message_content | Event |
| Response Content | response_content | Event |
| Terminal Command | command | Event |
| Source | source | Event |

4. Click **Save** for each one
5. Wait 24-48 hours for data to populate in reports

#### Method 1: Event Details Page
1. Go to **Reports** → **Engagement** → **Events**
2. Click on an event name (e.g., `chatbot_message_sent`)
3. Scroll down to see **event parameters** with actual message content
4. You can export this data as CSV/Excel

#### Method 2: Explore (Best for Analysis)
1. Go to **Explore** (left sidebar)
2. Click **"Blank"** template
3. Add dimensions (click + button):
   - Event name
   - Message Content (custom dimension)
   - Response Content (custom dimension)
   - Terminal Command (custom dimension)
   - Source
4. Add metric: Event count
5. Drag to report builder to create table
6. Now you see ALL events with their full content!

#### Method 3: DebugView (Real-Time Testing)
1. Go to **Configure** → **DebugView**
2. Trigger events on your site
3. Click event to see **all parameters instantly**
4. Perfect for testing and verification

### Real-Time (1-5 minutes)
1. Go to GA4 Dashboard
2. Reports → Realtime
3. View events as they happen

### DebugView (Instant)
1. Go to GA4 Dashboard
2. Configure → DebugView
3. See events with full details immediately

### Historical Data (24-48 hours)
1. Reports → Engagement → Events
2. Click event name for details
3. View custom parameters like message_content, command, source, etc.

## 🎯 Marking Events as Key Events

1. Wait 24 hours for events to appear in GA4
2. Go to Configure → Events
3. Toggle "Mark as key event" for important events
4. Recommended key events:
   - `chatbot_message_sent`
   - `terminal_opened`
   - `resume_viewed`
   - `newsletter_subscribed` (when implemented)

## 💡 Tips

- Events track automatically - no additional setup needed
- Check browser console to verify events are firing
- Custom parameters allow detailed analysis (message content, commands, etc.)
- Use event categories to group related events in reports
