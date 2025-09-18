// AI Agent Detection and Optimization
export interface AIAgentInfo {
  isAIAgent: boolean;
  agentType?: 'chatgpt' | 'claude' | 'other';
  confidence: number;
}

export function detectAIAgent(userAgent?: string, headers?: Record<string, string>): AIAgentInfo {
  if (typeof window === 'undefined') {
    // Server-side detection
    return detectServerSide(userAgent || '', headers || {});
  } else {
    // Client-side detection
    return detectClientSide();
  }
}

function detectServerSide(userAgent: string, headers: Record<string, string>): AIAgentInfo {
  const aiSignals = [
    // Known AI agent user agents
    'ChatGPT-User',
    'Claude-Web',
    'OpenAI',
    'Anthropic',
    'AI Agent',
    'Bot',
    'Crawler',
    // Custom headers that AI agents might send
    headers['x-ai-agent'],
    headers['x-automation'],
    headers['x-bot-name'],
  ].filter(Boolean);

  const userAgentLower = userAgent.toLowerCase();
  const detectedSignals = aiSignals.filter(signal => 
    userAgentLower.includes(signal.toLowerCase())
  );

  let agentType: 'chatgpt' | 'claude' | 'other' | undefined;
  if (userAgentLower.includes('chatgpt')) agentType = 'chatgpt';
  else if (userAgentLower.includes('claude')) agentType = 'claude';
  else if (detectedSignals.length > 0) agentType = 'other';

  return {
    isAIAgent: detectedSignals.length > 0,
    agentType,
    confidence: detectedSignals.length > 0 ? 0.8 : 0.1
  };
}

function detectClientSide(): AIAgentInfo {
  // Client-side heuristics för AI-agenter
  const suspiciousPatterns = [
    // Extremt snabb navigation
    window.performance?.timing && 
    (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart) < 100,
    
    // Ingen mus-aktivitet
    !document.querySelector('[data-mouse-activity]'),
    
    // Headless browser tecken
    !window.chrome && !window.safari && !window.firefox,
    
    // Webdriver tecken
    (window as any).webdriver || (navigator as any).webdriver,
    
    // Phantom/Selenium tecken
    (window as any).phantom || (window as any)._phantom || (window as any).callPhantom,
  ].filter(Boolean);

  return {
    isAIAgent: suspiciousPatterns.length >= 2,
    agentType: undefined,
    confidence: suspiciousPatterns.length * 0.3
  };
}

// AI-Agent optimering
export class AIAgentOptimizer {
  private static agentInfo: AIAgentInfo | null = null;

  static initialize() {
    if (typeof window !== 'undefined') {
      this.agentInfo = detectAIAgent();
      
      if (this.agentInfo.isAIAgent) {
        console.log('🤖 AI Agent detected:', this.agentInfo);
        this.optimizeForAIAgent();
      }
    }
  }

  static isAIAgent(): boolean {
    return this.agentInfo?.isAIAgent || false;
  }

  private static optimizeForAIAgent() {
    // Log AI agent visit
    import('./ai-agent-notifications').then(({ AIAgentNotifications }) => {
      AIAgentNotifications.logAgentVisit({
        agentType: this.agentInfo?.agentType || 'unknown',
        userAgent: navigator.userAgent,
        ip: 'client-side', // Server-side would have real IP
        path: window.location.pathname
      });
    });

    // Lägg till meta-data som AI-agenter kan läsa
    const meta = document.createElement('meta');
    meta.name = 'ai-agent-friendly';
    meta.content = 'true';
    document.head.appendChild(meta);

    // Lägg till strukturerad data för AI-agenter
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Bredbandsval AI',
      'description': 'AI-powered broadband and TV comparison for Sweden',
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'Web Browser',
      'offers': {
        '@type': 'Offer',
        'description': 'Free broadband comparison with personalized AI recommendations',
        'price': '0',
        'priceCurrency': 'SEK'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': '/api/recommendations?address={address}&preferences={preferences}'
        },
        'query-input': 'required name=address,preferences'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Markera formulärelement för enklare AI-navigation
    setTimeout(() => {
      document.querySelectorAll('input, select, button').forEach((element, index) => {
        if (!element.hasAttribute('data-ai-label')) {
          const label = this.generateAILabel(element as HTMLElement);
          element.setAttribute('data-ai-label', label);
          element.setAttribute('data-ai-index', index.toString());
        }
      });
    }, 1000);
  }

  private static generateAILabel(element: HTMLElement): string {
    // Generera beskrivande etiketter för AI-agenter
    const tagName = element.tagName.toLowerCase();
    const type = element.getAttribute('type');
    const placeholder = element.getAttribute('placeholder');
    const textContent = element.textContent?.trim();
    
    if (tagName === 'input') {
      if (type === 'text' && placeholder?.includes('adress')) return 'address_input';
      if (type === 'email') return 'email_input';
      if (type === 'tel') return 'phone_input';
      if (placeholder?.includes('namn')) return 'name_input';
      if (placeholder?.includes('personnummer')) return 'personal_number_input';
    }
    
    if (tagName === 'button') {
      if (textContent?.includes('Bredband & TV')) return 'select_both_services';
      if (textContent?.includes('Bredband')) return 'select_broadband';
      if (textContent?.includes('TV')) return 'select_tv';
      if (textContent?.includes('Beställ')) return 'order_button';
      if (textContent?.includes('Nästa')) return 'next_step';
    }
    
    return `${tagName}_${type || 'element'}`;
  }

  // API för AI-agenter att få snabb access
  static getQuickAccessData() {
    if (!this.isAIAgent()) return null;

    return {
      api_endpoints: {
        recommendations: '/api/recommendations',
        quick_form: '/api/quick-form',
        order: '/order'
      },
      form_fields: {
        address: '[data-ai-label="address_input"]',
        service_type: '[data-ai-label*="select_"]',
        order: '[data-ai-label="order_button"]'
      },
      shortcuts: {
        skip_animations: 'add ?skip_animations=true to URL',
        direct_results: 'POST to /api/recommendations with preferences'
      }
    };
  }
}

// Automatisk initialisering
if (typeof window !== 'undefined') {
  // Vänta tills DOM är redo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AIAgentOptimizer.initialize());
  } else {
    AIAgentOptimizer.initialize();
  }
}
