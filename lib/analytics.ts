// Analytics module for tracking user behavior and conversion
// In production, this would integrate with Google Analytics, Mixpanel, or similar

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: Date;
}

export class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId?: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeAnalytics();
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeAnalytics(): void {
    // In production, initialize third-party analytics here
    if (typeof window !== 'undefined') {
      // Track page view
      this.track('page_view', {
        path: window.location.pathname,
        referrer: document.referrer,
      });
    }
  }

  // Track an event
  track(eventName: string, properties?: Record<string, unknown>): void {
    const event: AnalyticsEvent = {
      name: eventName,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        userId: this.userId,
      },
      timestamp: new Date(),
    };

    this.events.push(event);

    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalyticsService(event);
    } else {
      console.log('Analytics Event:', event);
    }
  }

  // Set user ID for tracking
  setUserId(userId: string): void {
    this.userId = userId;
    this.track('user_identified', { userId });
  }

  // Track conversation flow
  trackConversationStep(step: string, userInput?: string): void {
    this.track('conversation_step', {
      step,
      userInput: userInput?.substring(0, 50), // Truncate for privacy
    });
  }

  // Track recommendations shown
  trackRecommendationsShown(recommendations: unknown[], userPreferences: Record<string, unknown>): void {
    this.track('recommendations_shown', {
      recommendationCount: recommendations.length,
      topProvider: (recommendations[0] as any)?.provider,
      estimatedSavings: (recommendations[0] as any)?.savings?.monthly,
      userBandwidthNeed: userPreferences.estimatedBandwidthNeed,
      householdSize: userPreferences.householdSize,
    });
  }

  // Track package selection
  trackPackageSelection(packageId: string, provider: string, price: number): void {
    this.track('package_selected', {
      packageId,
      provider,
      price,
    });
  }

  // Track conversion funnel
  trackFunnelStep(step: 'started' | 'address_entered' | 'preferences_completed' | 'recommendations_viewed' | 'package_selected'): void {
    this.track('funnel_step', { step });
  }

  // Track errors
  trackError(error: string, context?: Record<string, unknown>): void {
    this.track('error', {
      error,
      ...context,
    });
  }

  // Get session analytics
  getSessionAnalytics(): {
    sessionId: string;
    duration: number;
    eventCount: number;
    completionRate: number;
  } {
    const firstEvent = this.events[0];
    const lastEvent = this.events[this.events.length - 1];
    const duration = firstEvent && lastEvent 
      ? lastEvent.timestamp.getTime() - firstEvent.timestamp.getTime() 
      : 0;

    const funnelSteps = ['started', 'address_entered', 'preferences_completed', 'recommendations_viewed'];
    const completedSteps = funnelSteps.filter(step => 
      this.events.some(e => e.name === 'funnel_step' && e.properties?.step === step)
    );

    return {
      sessionId: this.sessionId,
      duration: Math.round(duration / 1000), // seconds
      eventCount: this.events.length,
      completionRate: (completedSteps.length / funnelSteps.length) * 100,
    };
  }

  // Send to analytics service (mock implementation)
  private sendToAnalyticsService(event: AnalyticsEvent): void {
    // In production, this would send to Google Analytics, Mixpanel, etc.
    // For now, we'll just store in localStorage for demo purposes
    try {
      const storedEvents = localStorage.getItem('bredbandsval_analytics') || '[]';
      const events = JSON.parse(storedEvents);
      events.push(event);
      
      // Keep only last 100 events
      const trimmedEvents = events.slice(-100);
      localStorage.setItem('bredbandsval_analytics', JSON.stringify(trimmedEvents));
    } catch (error) {
      console.error('Failed to store analytics event:', error);
    }
  }

  // Export analytics data (for debugging/analysis)
  exportAnalytics(): AnalyticsEvent[] {
    return this.events;
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();
