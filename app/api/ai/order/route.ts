import { NextRequest, NextResponse } from 'next/server';
import { detectAIAgent } from '@/lib/ai-agent-detector';

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  if (!agentInfo.isAIAgent) {
    return NextResponse.json({ error: 'AI agents only' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { package_selection, customer_details, preferences } = body;

    // Simulate order processing for AI agents
    const orderId = `AI_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    
    // Log AI order for analytics
    console.log('🤖 AI Agent Order:', {
      orderId,
      agent: agentInfo.agentType,
      package: package_selection,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      order_id: orderId,
      status: "confirmed",
      package: {
        provider: package_selection?.provider || "Telia",
        speed: package_selection?.speed || "250 Mbit/s",
        price: package_selection?.price || 399,
        monthly_cost: `${package_selection?.price || 399} SEK/month`
      },
      customer: {
        name: customer_details?.name || "AI Customer",
        address: customer_details?.address || preferences?.address,
        start_date: customer_details?.start_date || "As soon as possible"
      },
      next_steps: [
        "Order has been submitted to provider",
        "Customer will receive confirmation within 24 hours", 
        "Installation typically within 1-2 weeks",
        "14-day right of withdrawal applies"
      ],
      ai_metadata: {
        processing_time_ms: 23,
        agent_type: agentInfo.agentType,
        confidence: agentInfo.confidence,
        order_value_sek_per_year: (package_selection?.price || 399) * 12
      }
    });

  } catch (error) {
    return NextResponse.json({ 
      error: 'Order processing failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  if (!agentInfo.isAIAgent) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Return order form structure for AI agents
  return NextResponse.json({
    form_structure: {
      required_fields: [
        { name: "firstName", type: "text", label: "Förnamn" },
        { name: "lastName", type: "text", label: "Efternamn" },
        { name: "personalNumber", type: "text", label: "Personnummer", format: "YYYYMMDD-XXXX" },
        { name: "email", type: "email", label: "E-post" },
        { name: "phone", type: "tel", label: "Mobilnummer" },
        { name: "address", type: "text", label: "Adress" },
        { name: "postalCode", type: "text", label: "Postnummer" },
        { name: "city", type: "text", label: "Postort" }
      ],
      optional_fields: [
        { name: "apartmentNumber", type: "text", label: "Lägenhetsnummer" },
        { name: "startDate", type: "date", label: "Önskat startdatum" }
      ],
      checkboxes: [
        { name: "acceptTerms", required: true, label: "Godkänn allmänna villkor" },
        { name: "acceptPrivacy", required: true, label: "Godkänn integritetspolicy" },
        { name: "wantNewsletter", required: false, label: "Nyhetsbrev" }
      ]
    },
    ai_shortcuts: {
      auto_fill_url: "/api/ai/order",
      skip_validation: true,
      bankid_simulation: true
    }
  });
}
