// Realistic dummy data for AI agent dashboards
export const dummyAIAgentVisits = [
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 min ago
    agentType: 'chatgpt',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
    ip: '157.240.12.35',
    path: '/',
    actions: [
      'visited_homepage',
      'clicked_select_both_services', 
      'filled_address_form',
      'completed_questionnaire',
      'viewed_recommendations',
      'clicked_order_button',
      'reached_order_page'
    ],
    sessionDuration: 45000, // 45 seconds
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
  total_sessions: 127,
  avg_completion_time: 12.3, // seconds
  most_common_agent: 'chatgpt',
  peak_hours: [
    ['14', 23], // 14:00 - 23 visits
    ['10', 19], // 10:00 - 19 visits  
    ['16', 17]  // 16:00 - 17 visits
  ]
};

export const dummyAgentStats = {
  total_visits: 89,
  today_visits: 12,
  chatgpt_visits: 54,
  completed_orders: 23,
  conversion_rate: 25.8
};
