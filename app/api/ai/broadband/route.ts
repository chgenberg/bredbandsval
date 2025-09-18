import { NextRequest, NextResponse } from 'next/server';
import { detectAIAgent } from '@/lib/ai-agent-detector';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  // Only serve AI agents
  if (!agentInfo.isAIAgent) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address') || 'Stockholm';
  const budget = searchParams.get('budget') || '500';
  const speed = searchParams.get('speed') || '250';

  // Return AI-optimized broadband recommendations
  return NextResponse.json({
    query: { address, budget, speed },
    recommendations: [
      {
        provider: "Telia",
        package: "Bredband 250",
        speed: "250/250 Mbit/s",
        price: 399,
        currency: "SEK",
        period: "month",
        features: ["Router ingår", "Ingen bindning", "24/7 support"],
        order_url: `/order?provider=telia&package=250&address=${encodeURIComponent(address)}`,
        api_order_url: "/api/ai/order",
        match_score: 95
      },
      {
        provider: "Bahnhof",
        package: "Bredband 500", 
        speed: "500/500 Mbit/s",
        price: 449,
        currency: "SEK",
        period: "month",
        features: ["Egen router", "12 mån bindning", "Svenskt företag"],
        order_url: `/order?provider=bahnhof&package=500&address=${encodeURIComponent(address)}`,
        api_order_url: "/api/ai/order",
        match_score: 88
      },
      {
        provider: "Comhem",
        package: "Bredband 100",
        speed: "100/10 Mbit/s", 
        price: 299,
        currency: "SEK",
        period: "month",
        features: ["Budget-alternativ", "6 mån bindning", "Kabel-teknik"],
        order_url: `/order?provider=comhem&package=100&address=${encodeURIComponent(address)}`,
        api_order_url: "/api/ai/order",
        match_score: 76
      }
    ],
    meta: {
      total_providers: 21,
      search_time_ms: 45,
      ai_optimized: true,
      next_steps: [
        "Select a package and use order_url",
        "Or POST to api_order_url with customer details",
        "BankID authentication will be simulated"
      ]
    }
  });
}

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  if (!agentInfo.isAIAgent) {
    return NextResponse.json({ error: 'AI agents only' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { address, preferences } = body;

    // Fast recommendation engine for AI agents
    const recommendations = await generateFastRecommendations(address, preferences);
    
    return NextResponse.json({
      recommendations,
      processing_time_ms: 12,
      ai_optimized: true
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

async function generateFastRecommendations(address: string, preferences: any) {
  // Simplified recommendation logic for AI speed
  return [
    {
      provider: "Telia",
      package: "Bredband 250",
      price: 399,
      speed: "250 Mbit/s",
      match_reason: "Best overall value for Swedish households"
    },
    {
      provider: "Bahnhof", 
      package: "Bredband 500",
      price: 449,
      speed: "500 Mbit/s", 
      match_reason: "Highest speed option from Swedish provider"
    }
  ];
}
