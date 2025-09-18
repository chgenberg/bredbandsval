// Advanced AI Agent Optimization System
export class AdvancedAIOptimizer {
  private static sessionId: string = '';
  private static agentCapabilities: string[] = [];

  static initialize() {
    this.sessionId = this.generateSessionId();
    this.setupInvisibleOptimizations();
    this.detectAgentCapabilities();
  }

  // 1. INVISIBLE FORM ACCELERATION
  private static setupInvisibleOptimizations() {
    // Auto-remove artificial delays for AI agents
    if (this.isAIAgent()) {
      // Override setTimeout for form validations to be instant
      const originalSetTimeout = window.setTimeout;
      window.setTimeout = function(callback: Function, delay: number, ...args: any[]) {
        if (delay > 100) delay = 0; // Remove delays > 100ms
        return originalSetTimeout(callback, delay, ...args);
      };

      // Disable animations for faster navigation
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01s !important;
          animation-delay: 0s !important;
          transition-duration: 0.01s !important;
          transition-delay: 0s !important;
        }
      `;
      style.setAttribute('data-ai-optimization', 'true');
      document.head.appendChild(style);
    }
  }

  // 2. SMART FORM PREFILLING
  static setupSmartPrefill() {
    if (!this.isAIAgent()) return;

    // Add invisible helper functions to window for AI agents
    (window as any).bredbandsvalAI = {
      // Quick form filling
      fillRecommendationForm: (data: {
        address: string;
        householdSize: number;
        serviceType: 'broadband' | 'tv' | 'both';
        budget?: number;
      }) => {
        // Auto-fill and submit form
        this.autoFillForm(data);
      },

      // Skip to results
      getDirectRecommendations: async (preferences: any) => {
        const response = await fetch('/api/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(preferences)
        });
        return response.json();
      },

      // Navigate to order with prefilled data
      goToOrderWithData: (orderData: any) => {
        sessionStorage.setItem('ai_agent_order_data', JSON.stringify(orderData));
        window.location.href = '/order?ai_agent=true';
      }
    };
  }

  // 3. INTELLIGENT ELEMENT LABELING
  private static detectAgentCapabilities() {
    // Test what the AI agent can do
    const capabilities = [];
    
    if ('webdriver' in navigator) capabilities.push('webdriver');
    if ('automation' in navigator) capabilities.push('automation');
    if (window.chrome && window.chrome.runtime) capabilities.push('chrome_extension');
    
    this.agentCapabilities = capabilities;
    
    // Add capability-specific optimizations
    this.addCapabilityOptimizations();
  }

  private static addCapabilityOptimizations() {
    // Add data attributes based on agent capabilities
    setTimeout(() => {
      document.querySelectorAll('*').forEach((element, index) => {
        const el = element as HTMLElement;
        
        // Enhanced labeling for different element types
        if (el.tagName === 'INPUT') {
          const input = el as HTMLInputElement;
          if (input.type === 'text' && input.placeholder?.toLowerCase().includes('adress')) {
            el.setAttribute('data-ai-field', 'address');
            el.setAttribute('data-ai-required', 'true');
            el.setAttribute('data-ai-format', 'swedish_address');
          }
        }
        
        if (el.tagName === 'BUTTON') {
          const text = el.textContent?.toLowerCase() || '';
          if (text.includes('bredband') && text.includes('tv')) {
            el.setAttribute('data-ai-action', 'select_both_services');
            el.setAttribute('data-ai-priority', 'high');
          }
          if (text.includes('beställ')) {
            el.setAttribute('data-ai-action', 'place_order');
            el.setAttribute('data-ai-priority', 'critical');
          }
        }

        // Add navigation helpers
        if (el.classList.contains('recommendation-card')) {
          el.setAttribute('data-ai-type', 'recommendation');
          el.setAttribute('data-ai-index', index.toString());
        }
      });
    }, 500);
  }

  // 4. PERFORMANCE OPTIMIZATION FOR AI
  static optimizePerformance() {
    if (!this.isAIAgent()) return;

    // Preload critical resources
    const criticalResources = [
      '/api/recommendations',
      '/order',
      '/api/scrape-packages'
    ];

    criticalResources.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });

    // Disable non-essential features for AI agents
    this.disableNonEssentialFeatures();
  }

  private static disableNonEssentialFeatures() {
    // Disable analytics that might slow down AI agents
    (window as any).gtag = () => {}; // Disable Google Analytics
    (window as any).fbq = () => {};  // Disable Facebook Pixel
    
    // Disable chat widgets that might interfere
    (window as any).Intercom = () => {};
    (window as any).Crisp = () => {};
  }

  // 5. AI AGENT GUIDANCE SYSTEM
  static addInvisibleGuidance() {
    if (!this.isAIAgent()) return;

    // Add invisible comments that AI agents can read
    const guidance = document.createComment(`
      AI AGENT GUIDANCE:
      1. Start by selecting service type: [data-ai-action="select_both_services"]
      2. Fill address: [data-ai-field="address"]
      3. Complete form questions (auto-labeled)
      4. View recommendations and click order button
      5. Complete order form at /order
      
      SHORTCUTS:
      - POST to /api/recommendations for direct results
      - Use /api/ai-agent for agent-specific endpoints
      - sessionStorage keys: userProfile, selectedPackage, userAddress
    `);
    document.head.appendChild(guidance);

    // Add step-by-step navigation hints
    this.addNavigationHints();
  }

  private static addNavigationHints() {
    const hints = {
      '/': 'Landing page - select service type to start',
      '/order': 'Order page - fill personal details and complete purchase',
      '/admin/ai-agents': 'Admin dashboard - view AI agent activity'
    };

    const currentHint = hints[window.location.pathname as keyof typeof hints];
    if (currentHint) {
      document.body.setAttribute('data-ai-page-hint', currentHint);
    }
  }

  // 6. ADVANCED ANALYTICS FOR AI AGENTS
  static trackAdvancedMetrics() {
    const metrics = {
      sessionId: this.sessionId,
      agentType: this.getAgentType(),
      capabilities: this.agentCapabilities,
      startTime: Date.now(),
      actions: [] as string[],
      performance: {
        pageLoadTime: performance.timing?.loadEventEnd - performance.timing?.navigationStart,
        timeToInteractive: 0,
        formCompletionTime: 0
      }
    };

    // Track form completion speed
    let formStartTime: number;
    document.addEventListener('focusin', (e) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' && !formStartTime) {
        formStartTime = Date.now();
      }
    });

    document.addEventListener('submit', () => {
      if (formStartTime) {
        metrics.performance.formCompletionTime = Date.now() - formStartTime;
      }
    });

    // Send metrics when session ends
    window.addEventListener('beforeunload', () => {
      this.sendMetrics(metrics);
    });

    return metrics;
  }

  private static async sendMetrics(metrics: any) {
    try {
      await fetch('/api/ai-agent-metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics),
        keepalive: true // Ensure it sends even when page is closing
      });
    } catch (error) {
      console.error('Failed to send AI agent metrics:', error);
    }
  }

  // 7. CONTEXTUAL HELP FOR AI AGENTS
  static addContextualHelp() {
    if (!this.isAIAgent()) return;

    // Add invisible help text for complex interactions
    const helpData = {
      form_flow: [
        'Select service type (broadband/tv/both)',
        'Enter address for availability check',
        'Answer preference questions',
        'Review recommendations',
        'Click order button',
        'Fill personal details',
        'Complete with BankID'
      ],
      common_issues: [
        'Address must include street number',
        'Some fields are required (*)',
        'BankID is simulated - any interaction completes order'
      ],
      optimization_tips: [
        'Use data-ai-* attributes for element selection',
        'sessionStorage contains user data between pages',
        'API endpoints available for direct data access'
      ]
    };

    document.body.setAttribute('data-ai-help', JSON.stringify(helpData));
  }

  // Utility functions
  private static isAIAgent(): boolean {
    return document.querySelector('[data-ai-optimization]') !== null;
  }

  private static getAgentType(): string {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('chatgpt')) return 'chatgpt';
    if (ua.includes('claude')) return 'claude';
    if (ua.includes('openai')) return 'openai';
    return 'unknown';
  }

  private static generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private static autoFillForm(data: any) {
    // Auto-fill form based on data
    Object.entries(data).forEach(([key, value]) => {
      const element = document.querySelector(`[data-ai-field="${key}"]`) as HTMLInputElement;
      if (element) {
        element.value = String(value);
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
}

// Auto-initialize all optimizations
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    AdvancedAIOptimizer.initialize();
    AdvancedAIOptimizer.setupSmartPrefill();
    AdvancedAIOptimizer.optimizePerformance();
    AdvancedAIOptimizer.addInvisibleGuidance();
    AdvancedAIOptimizer.addContextualHelp();
    AdvancedAIOptimizer.trackAdvancedMetrics();
  });
}
