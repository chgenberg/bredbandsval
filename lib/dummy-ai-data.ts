// Realistic dummy data for AI agent dashboards
export const dummyAIAgentVisits = [
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 2), // 2 min ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '157.240.12.35',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_select_both_services', 
      'filled_address_stockholm',
      'completed_questionnaire',
      'viewed_recommendations',
      'clicked_order_button',
      'reached_order_page',
      'filled_personal_details',
      'completed_bankid'
    ],
    sessionDuration: 78000, // 1 min 18 sec
    completedOrder: true
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 min ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '157.240.12.36',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_select_broadband', 
      'filled_address_gothenburg',
      'answered_household_questions',
      'viewed_broadband_recommendations',
      'clicked_order_bahnhof'
    ],
    sessionDuration: 52000, // 52 seconds
    completedOrder: false
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 min ago
    agentType: 'claude',
    userAgent: 'Mozilla/5.0 (compatible; Claude-3/1.0; Anthropic)',
    ip: '142.250.185.46',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_select_broadband',
      'filled_address_stockholm',
      'answered_household_questions',
      'viewed_broadband_recommendations',
      'selected_telia_package',
      'completed_order_form',
      'finished_bankid_auth'
    ],
    sessionDuration: 120000, // 2 minutes
    completedOrder: true
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 32), // 32 min ago
    agentType: 'perplexity',
    userAgent: 'Mozilla/5.0 (compatible; PerplexityBot/1.0)',
    ip: '208.67.222.222',
    path: '/order',
    actions: [
      'direct_order_access',
      'filled_personal_details',
      'selected_router_option',
      'abandoned_at_bankid'
    ],
    sessionDuration: 25000, // 25 seconds
    completedOrder: false
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '172.16.254.1',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_quick_search',
      'entered_gothenburg_address',
      'selected_tv_only',
      'compared_tv_packages',
      'requested_support_chat',
      'asked_about_pricing'
    ],
    sessionDuration: 180000, // 3 minutes
    completedOrder: false
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    agentType: 'other',
    userAgent: 'Mozilla/5.0 (compatible; AI-Assistant/2.1)',
    ip: '185.199.108.153',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_both_services',
      'speed_test_completed',
      'answered_all_questions',
      'received_recommendations',
      'compared_alternatives',
      'selected_combination_package',
      'completed_full_order'
    ],
    sessionDuration: 95000, // 1.5 minutes
    completedOrder: true
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '74.125.224.72',
    path: '/',
    actions: [
      'visited_homepage',
      'browsed_without_interaction',
      'clicked_broadband_only',
      'partial_address_entry',
      'abandoned_early'
    ],
    sessionDuration: 12000, // 12 seconds
    completedOrder: false
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    agentType: 'gemini',
    userAgent: 'Mozilla/5.0 (compatible; Gemini-Pro/1.0; Google)',
    ip: '8.8.8.8',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_both_services',
      'filled_address_malmo',
      'completed_all_questions',
      'viewed_recommendations',
      'selected_telia_combo',
      'completed_order'
    ],
    sessionDuration: 89000, // 1 min 29 sec
    completedOrder: true
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    agentType: 'other',
    userAgent: 'Mozilla/5.0 (compatible; AutomationBot/2.0)',
    ip: '185.199.108.154',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_tv_only',
      'filled_address_uppsala',
      'answered_tv_questions',
      'compared_tv_packages',
      'abandoned_at_recommendations'
    ],
    sessionDuration: 34000, // 34 seconds
    completedOrder: false
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18), // 18 hours ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '157.240.12.37',
    path: '/',
    actions: [
      'visited_homepage',
      'used_speed_test',
      'clicked_broadband_only',
      'filled_address_linkoping',
      'completed_questionnaire',
      'viewed_recommendations',
      'clicked_order_comhem',
      'filled_order_form',
      'completed_purchase'
    ],
    sessionDuration: 156000, // 2 min 36 sec
    completedOrder: true
  }
];

export const dummyAIMetrics = [
  {
    sessionId: 'ai_sess_1732012847_abc123',
    agentType: 'chatgpt',
    startTime: Date.now() - 45000,
    actions: [
      'clicked_select_both_services',
      'filled_address_stockholm',
      'answered_household_3_people',
      'selected_heavy_streaming',
      'chose_gaming_yes',
      'reached_recommendations',
      'clicked_order_telia'
    ],
    performance: {
      pageLoadTime: 850,
      timeToInteractive: 1200,
      formCompletionTime: 8500
    },
    capabilities: ['webdriver', 'automation'],
    serverTimestamp: new Date(Date.now() - 45000).toISOString(),
    ip: '157.240.12.35',
    referer: 'https://chat.openai.com/',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)'
  },
  {
    sessionId: 'ai_sess_1732011247_def456',
    agentType: 'claude',
    startTime: Date.now() - 120000,
    actions: [
      'clicked_select_broadband',
      'filled_address_malmo',
      'answered_household_2_people',
      'selected_moderate_streaming',
      'chose_gaming_no',
      'selected_budget_medium',
      'completed_order_bahnhof'
    ],
    performance: {
      pageLoadTime: 650,
      timeToInteractive: 900,
      formCompletionTime: 15200
    },
    capabilities: ['automation'],
    serverTimestamp: new Date(Date.now() - 120000).toISOString(),
    ip: '142.250.185.46',
    referer: 'https://claude.ai/',
    userAgent: 'Mozilla/5.0 (compatible; Claude-3/1.0; Anthropic)'
  },
  {
    sessionId: 'ai_sess_1732009647_ghi789',
    agentType: 'other',
    startTime: Date.now() - 180000,
    actions: [
      'visited_homepage',
      'used_speed_test',
      'clicked_both_services',
      'answered_all_questions_fast',
      'viewed_recommendations',
      'selected_combination',
      'completed_order_successfully'
    ],
    performance: {
      pageLoadTime: 1200,
      timeToInteractive: 1800,
      formCompletionTime: 6800
    },
    capabilities: ['chrome_extension', 'webdriver'],
    serverTimestamp: new Date(Date.now() - 180000).toISOString(),
    ip: '185.199.108.153',
    referer: 'https://perplexity.ai/',
    userAgent: 'Mozilla/5.0 (compatible; PerplexityBot/1.0)'
  }
];

export const dummySummaryStats = {
  total_sessions: 456,
  avg_completion_time: 18.7, // seconds
  most_common_agent: 'chatgpt',
  peak_hours: [
    ['14', 67], // 14:00 - 67 visits
    ['10', 54], // 10:00 - 54 visits  
    ['16', 48]  // 16:00 - 48 visits
  ]
};

// Utökad AI metrics med mer realistisk data
const generateMoreDummyMetrics = () => {
  const agents = ['chatgpt', 'claude', 'gemini', 'perplexity', 'other'];
  const cities = ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Linköping', 'Helsingborg'];
  const services = ['broadband', 'tv', 'both'];
  
  const extraMetrics = [];
  
  for (let i = 0; i < 15; i++) {
    const agent = agents[Math.floor(Math.random() * agents.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const service = services[Math.floor(Math.random() * services.length)];
    const hoursAgo = Math.floor(Math.random() * 48) + 1;
    
    extraMetrics.push({
      sessionId: `ai_sess_${Date.now() - (hoursAgo * 3600000)}_${Math.random().toString(36).substr(2, 6)}`,
      agentType: agent,
      startTime: Date.now() - (hoursAgo * 3600000),
      actions: [
        'visited_homepage',
        `clicked_select_${service}`,
        `filled_address_${city.toLowerCase()}`,
        'answered_questions',
        'viewed_recommendations',
        Math.random() > 0.3 ? 'clicked_order' : 'abandoned',
        ...(Math.random() > 0.5 ? ['completed_order'] : [])
      ],
      performance: {
        pageLoadTime: Math.floor(Math.random() * 2000) + 500,
        timeToInteractive: Math.floor(Math.random() * 3000) + 800,
        formCompletionTime: Math.floor(Math.random() * 25000) + 5000
      },
      capabilities: Math.random() > 0.5 ? ['webdriver'] : ['automation'],
      serverTimestamp: new Date(Date.now() - (hoursAgo * 3600000)).toISOString(),
      ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      referer: agent === 'chatgpt' ? 'https://chat.openai.com/' : 
               agent === 'claude' ? 'https://claude.ai/' :
               agent === 'gemini' ? 'https://gemini.google.com/' : 
               'https://perplexity.ai/',
      userAgent: `Mozilla/5.0 (compatible; ${agent.charAt(0).toUpperCase() + agent.slice(1)}-Agent/1.0)`
    });
  }
  
  return extraMetrics;
};

export const extendedDummyMetrics = [...dummyAIMetrics, ...generateMoreDummyMetrics()];

export const dummyAgentStats = {
  total_visits: 234,
  today_visits: 28,
  chatgpt_visits: 142,
  completed_orders: 67,
  conversion_rate: 28.6
};

// Help text för admin-dashboards
export const helpTexts = {
  total_visits: "Totalt antal AI-agent besök på er sajt. Inkluderar ChatGPT, Claude, Gemini och andra AI-assistenter som hjälper användare hitta bredband.",
  today_visits: "Antal AI-agent besök idag. Visar dagens aktivitet och kan indikera trender eller kampanjeffekter.",
  chatgpt_visits: "Specifikt ChatGPT-agent besök. ChatGPT är ofta mest aktiv för bredbandsjämförelser.",
  completed_orders: "Antal AI-agenter som slutfört hela beställningsprocessen inklusive BankID-autentisering.",
  conversion_rate: "Procent av AI-agent besök som resulterar i slutförd beställning. Högre är bättre för er affär.",
  conversion_funnel: "Visar var AI-agenter hoppar av i processen. Hjälper identifiera förbättringsområden i användarflödet.",
  agent_types: "Fördelning av olika AI-assistenter. Olika agenter har olika beteenden och konverteringsgrader.",
  recent_activity: "Senaste AI-agent sessioner med detaljer om vad de gjorde och hur länge det tog.",
  performance_insights: "Mätvärden om hur snabbt AI-agenter navigerar er sajt och slutför uppgifter.",
  optimization_tips: "Förslag på hur ni kan förbättra er sajt för att få fler AI-agenter att slutföra beställningar."
};
