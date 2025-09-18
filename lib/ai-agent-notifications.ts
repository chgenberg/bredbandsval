// AI Agent Notification System
export interface AIAgentVisit {
  timestamp: Date;
  agentType: string;
  userAgent: string;
  ip: string;
  path: string;
  actions: string[];
  sessionDuration?: number;
  completedOrder?: boolean;
}

export class AIAgentNotifications {
  private static visits: AIAgentVisit[] = [];
  
  // Log AI agent visit
  static async logAgentVisit(agentInfo: {
    agentType: string;
    userAgent: string;
    ip: string;
    path: string;
  }) {
    const visit: AIAgentVisit = {
      timestamp: new Date(),
      agentType: agentInfo.agentType,
      userAgent: agentInfo.userAgent,
      ip: agentInfo.ip,
      path: agentInfo.path,
      actions: []
    };
    
    this.visits.push(visit);
    
    // Send immediate notification
    await this.sendNotification(visit);
    
    // Store in localStorage for admin dashboard
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('ai_agent_visits') || '[]');
      stored.push(visit);
      localStorage.setItem('ai_agent_visits', JSON.stringify(stored.slice(-100))); // Keep last 100
    }
    
    return visit;
  }
  
  // Track agent actions
  static trackAction(action: string) {
    const currentVisit = this.visits[this.visits.length - 1];
    if (currentVisit) {
      currentVisit.actions.push(action);
      
      // Send update notification for important actions
      if (['completed_form', 'reached_order', 'completed_order'].includes(action)) {
        this.sendActionNotification(currentVisit, action);
      }
    }
  }
  
  // Send notification via multiple channels
  private static async sendNotification(visit: AIAgentVisit) {
    const message = this.formatNotificationMessage(visit);
    
    // Try multiple notification methods
    await Promise.allSettled([
      this.sendWebhook(visit),
      this.sendEmail(message),
      this.sendSlack(message),
      this.logToConsole(visit)
    ]);
  }
  
  private static async sendWebhook(visit: AIAgentVisit) {
    try {
      // Webhook till er backend eller notification service
      await fetch('/api/webhooks/ai-agent-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'ai_agent_visit',
          data: visit,
          alert_level: visit.agentType === 'chatgpt' ? 'high' : 'medium'
        })
      });
    } catch (error) {
      console.error('Webhook notification failed:', error);
    }
  }
  
  private static async sendEmail(message: string) {
    try {
      // Email via er backend
      await fetch('/api/notifications/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'admin@bredbandsval.se',
          subject: '🤖 AI Agent Visit Alert',
          body: message,
          priority: 'high'
        })
      });
    } catch (error) {
      console.error('Email notification failed:', error);
    }
  }
  
  private static async sendSlack(message: string) {
    try {
      // Slack webhook (om ni använder Slack)
      const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
      if (slackWebhookUrl) {
        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🤖 AI Agent Alert`,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: message
                }
              }
            ]
          })
        });
      }
    } catch (error) {
      console.error('Slack notification failed:', error);
    }
  }
  
  private static logToConsole(visit: AIAgentVisit) {
    console.log('🚨 AI AGENT VISIT DETECTED:', {
      agent: visit.agentType,
      time: visit.timestamp.toISOString(),
      path: visit.path,
      userAgent: visit.userAgent.substring(0, 100)
    });
  }
  
  private static formatNotificationMessage(visit: AIAgentVisit): string {
    return `
🤖 **AI Agent Visit Detected!**

**Agent Type:** ${visit.agentType}
**Time:** ${visit.timestamp.toLocaleString('sv-SE')}
**Path:** ${visit.path}
**IP:** ${visit.ip}
**User Agent:** ${visit.userAgent}

**Potential Impact:**
- AI agent is browsing your broadband comparison site
- May be gathering data for a user's broadband search
- Could lead to a real customer conversion

**Recommended Actions:**
- Monitor for completion of recommendation flow
- Track if they reach the order page
- Analyze their browsing pattern for optimization

**Dashboard:** Check /admin/ai-agents for full details
    `.trim();
  }
  
  private static async sendActionNotification(visit: AIAgentVisit, action: string) {
    const actionMessages = {
      completed_form: '✅ AI Agent completed the recommendation form!',
      reached_order: '🛒 AI Agent reached the order page!',
      completed_order: '🎉 AI Agent completed an order! (Check for real payment)'
    };
    
    const message = `
🚨 **AI Agent Action Update**

${actionMessages[action as keyof typeof actionMessages]}

**Agent:** ${visit.agentType}
**Actions so far:** ${visit.actions.join(' → ')}
**Session duration:** ${this.getSessionDuration(visit)} minutes
    `.trim();
    
    // Send urgent notification
    await this.sendSlack(message);
    await this.sendEmail(message);
  }
  
  private static getSessionDuration(visit: AIAgentVisit): number {
    return Math.round((Date.now() - visit.timestamp.getTime()) / 60000);
  }
  
  // Get all visits for admin dashboard
  static getRecentVisits(): AIAgentVisit[] {
    return this.visits.slice(-50); // Last 50 visits
  }
  
  // Get statistics
  static getStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayVisits = this.visits.filter(v => v.timestamp >= today);
    const chatgptVisits = this.visits.filter(v => v.agentType === 'chatgpt');
    const completedOrders = this.visits.filter(v => v.completedOrder);
    
    return {
      total_visits: this.visits.length,
      today_visits: todayVisits.length,
      chatgpt_visits: chatgptVisits.length,
      completed_orders: completedOrders.length,
      conversion_rate: this.visits.length > 0 ? (completedOrders.length / this.visits.length) * 100 : 0
    };
  }
}

// Auto-initialize tracking
if (typeof window !== 'undefined') {
  // Track page views
  const originalPushState = history.pushState;
  history.pushState = function(...args) {
    originalPushState.apply(history, args);
    AIAgentNotifications.trackAction(`navigated_to_${window.location.pathname}`);
  };
  
  // Track form interactions
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const aiLabel = target.getAttribute('data-ai-label');
    if (aiLabel) {
      AIAgentNotifications.trackAction(`clicked_${aiLabel}`);
    }
  });
}
