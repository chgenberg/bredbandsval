// Invisible AI Agent Optimizations - Zero impact on human users
export class InvisibleAIOptimizations {
  private static isInitialized = false;
  private static isAIAgent = false;

  static initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isAIAgent = this.detectAIAgent();
    
    if (this.isAIAgent) {
      console.log('🤖 AI Agent detected - Activating invisible optimizations');
      this.activateInvisibleBoosts();
    }
    
    this.isInitialized = true;
  }

  private static detectAIAgent(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    const aiSignals = [
      'chatgpt', 'claude', 'openai', 'anthropic', 
      'gemini', 'perplexity', 'ai-agent', 'bot'
    ];
    return aiSignals.some(signal => ua.includes(signal));
  }

  private static activateInvisibleBoosts() {
    // 1. PRELOAD CRITICAL RESOURCES
    this.preloadCriticalResources();
    
    // 2. DISABLE NON-ESSENTIAL FEATURES
    this.disableNonEssentials();
    
    // 3. ACCELERATE FORM PROCESSING
    this.accelerateFormProcessing();
    
    // 4. ADD AI-SPECIFIC HELPERS
    this.addAIHelpers();
    
    // 5. OPTIMIZE NETWORK REQUESTS
    this.optimizeNetworkRequests();
  }

  // 1. Preload everything AI agents might need
  private static preloadCriticalResources() {
    const criticalResources = [
      '/api/recommendations',
      '/api/scrape-packages', 
      '/order',
      '/api/ai-agent',
      // Common Swedish cities for autocomplete
      '/api/address-lookup?city=stockholm',
      '/api/address-lookup?city=goteborg',
      '/api/address-lookup?city=malmo'
    ];

    criticalResources.forEach(url => {
      // DNS prefetch
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = url;
      document.head.appendChild(dnsLink);

      // Resource prefetch
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = url;
      document.head.appendChild(prefetchLink);
    });

    // Preload common form data
    sessionStorage.setItem('ai_optimization_active', 'true');
  }

  // 2. Disable features that slow down AI agents
  private static disableNonEssentials() {
    // Disable analytics that might slow things down
    if (window.gtag) window.gtag = () => {};
    if (window.fbq) window.fbq = () => {};
    
    // Disable chat widgets that might interfere
    (window as any).Intercom = () => {};
    (window as any).Crisp = () => {};
    
    // Disable unnecessary animations
    const style = document.createElement('style');
    style.setAttribute('data-ai-optimization', 'true');
    style.textContent = `
      [data-ai-optimized] * {
        animation-duration: 0.01s !important;
        transition-duration: 0.01s !important;
      }
    `;
    document.head.appendChild(style);
    document.body.setAttribute('data-ai-optimized', 'true');
  }

  // 3. Make forms process instantly for AI
  private static accelerateFormProcessing() {
    // Override setTimeout for form validations
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback: Function, delay: number, ...args: any[]) {
      // Remove artificial delays for AI agents
      if (delay > 50) delay = 0;
      return originalSetTimeout(callback, delay, ...args);
    };

    // Auto-submit forms when all required fields are filled
    this.setupAutoSubmit();
  }

  private static setupAutoSubmit() {
    let formCheckInterval: NodeJS.Timeout;
    
    const checkFormsReady = () => {
      document.querySelectorAll('form').forEach(form => {
        const requiredFields = form.querySelectorAll('[required]') as NodeListOf<HTMLInputElement>;
        const allFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
        
        if (allFilled && !form.hasAttribute('data-ai-submitted')) {
          form.setAttribute('data-ai-submitted', 'true');
          // Small delay to ensure all handlers are ready
          setTimeout(() => {
            const submitBtn = form.querySelector('[type="submit"], button[type="submit"]') as HTMLButtonElement;
            if (submitBtn && !submitBtn.disabled) {
              submitBtn.click();
            }
          }, 100);
        }
      });
    };

    // Check forms every 500ms
    formCheckInterval = setInterval(checkFormsReady, 500);
    
    // Clean up after 5 minutes
    setTimeout(() => clearInterval(formCheckInterval), 300000);
  }

  // 4. Add AI-specific helper functions
  private static addAIHelpers() {
    (window as any).bredbandsvalAI = {
      // Quick form completion
      quickFillRecommendationForm: (data: {
        address: string;
        serviceType: 'broadband' | 'tv' | 'both';
        householdSize?: number;
        budget?: string;
      }) => {
        // Auto-fill entire form in one go
        this.autoFillForm(data);
      },

      // Skip to results
      getDirectRecommendations: async (preferences: any) => {
        try {
          const response = await fetch('/api/recommendations', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'X-AI-Agent': 'true'
            },
            body: JSON.stringify(preferences)
          });
          return await response.json();
        } catch (error) {
          console.error('AI Direct API failed:', error);
          return null;
        }
      },

      // One-click order
      placeOrder: async (packageData: any, customerData: any) => {
        // Store data and navigate to order page
        sessionStorage.setItem('ai_package_data', JSON.stringify(packageData));
        sessionStorage.setItem('ai_customer_data', JSON.stringify(customerData));
        window.location.href = '/order?ai_agent=true&skip_steps=true';
      },

      // Get current page context
      getPageContext: () => ({
        currentStep: this.getCurrentStep(),
        availableActions: this.getAvailableActions(),
        nextRecommendedAction: this.getNextAction()
      })
    };
  }

  // 5. Optimize network requests for AI speed
  private static optimizeNetworkRequests() {
    // Add AI-agent header to all requests
    const originalFetch = window.fetch;
    window.fetch = function(...args: any[]) {
      const [url, options = {}] = args;
      
      // Add AI-agent identification header
      options.headers = {
        ...options.headers,
        'X-AI-Agent': 'true',
        'X-AI-Agent-Type': navigator.userAgent.includes('ChatGPT') ? 'chatgpt' : 
                          navigator.userAgent.includes('Claude') ? 'claude' : 'other'
      };
      
      return originalFetch(url, options);
    };
  }

  // Helper functions
  private static autoFillForm(data: any) {
    // Service type selection
    if (data.serviceType) {
      const serviceBtn = document.querySelector(`[data-ai-action="select_${data.serviceType}"]`) as HTMLButtonElement;
      if (serviceBtn) serviceBtn.click();
    }

    // Address field
    if (data.address) {
      const addressField = document.querySelector('[data-ai-field="address"]') as HTMLInputElement;
      if (addressField) {
        addressField.value = data.address;
        addressField.dispatchEvent(new Event('input', { bubbles: true }));
        addressField.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // Household size
    if (data.householdSize) {
      const householdBtn = document.querySelector(`[data-value="${data.householdSize}"]`) as HTMLButtonElement;
      if (householdBtn) householdBtn.click();
    }
  }

  private static getCurrentStep(): string {
    const url = window.location.pathname;
    if (url === '/') return 'homepage';
    if (url === '/order') return 'order';
    if (url.includes('admin')) return 'admin';
    return 'unknown';
  }

  private static getAvailableActions(): string[] {
    const actions = [];
    
    // Check for clickable elements with AI labels
    document.querySelectorAll('[data-ai-action]').forEach(el => {
      const action = el.getAttribute('data-ai-action');
      if (action) actions.push(action);
    });

    return actions;
  }

  private static getNextAction(): string {
    const currentStep = this.getCurrentStep();
    
    switch (currentStep) {
      case 'homepage':
        return 'select_service_type';
      case 'order':
        return 'fill_personal_details';
      default:
        return 'continue_flow';
    }
  }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      InvisibleAIOptimizations.initialize();
    });
  } else {
    InvisibleAIOptimizations.initialize();
  }
}
