import { NextRequest, NextResponse } from 'next/server';
import { detectAIAgent } from '@/lib/ai-agent-detector';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const headers = Object.fromEntries(request.headers.entries());
  
  const agentInfo = detectAIAgent(userAgent, headers);
  
  if (agentInfo.isAIAgent) {
    // Return AI-agent friendly data
    return NextResponse.json({
      message: "Welcome AI Agent! Here's how to use Bredbandsval efficiently:",
      endpoints: {
        recommendations: {
          url: "/api/recommendations",
          method: "POST",
          description: "Get broadband and TV recommendations",
          required_fields: ["address", "preferences"],
          example: {
            address: "Stockholmsgatan 1, Stockholm",
            household: { size: 2, workFromHome: true },
            preferences: { maxBudget: 500, includeRouter: true }
          }
        },
        quick_form: {
          url: "/",
          description: "Interactive form for gathering user preferences",
          ai_optimization: "Elements have data-ai-label attributes for easy automation"
        },
        order: {
          url: "/order",
          description: "Order page with pre-filled data",
          note: "Supports sessionStorage data from recommendations"
        }
      },
      optimization_tips: {
        skip_animations: "Add ?skip_animations=true to any URL",
        direct_api: "Use /api/recommendations for fastest results",
        form_automation: "Look for data-ai-label attributes on form elements"
      },
      agent_info: agentInfo
    });
  } else {
    // Regular user - redirect to homepage
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const headers = Object.fromEntries(request.headers.entries());
  const agentInfo = detectAIAgent(userAgent, headers);
  
  if (!agentInfo.isAIAgent) {
    return NextResponse.json({ error: 'This endpoint is for AI agents only' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'get_recommendations':
        // Return quick recommendations without full UI flow
        return NextResponse.json({
          recommendations: [
            {
              provider: "Telia",
              package: "Bredband 250",
              speed: "250 Mbit/s",
              price: "399 kr/mån",
              order_url: "/order?provider=telia&package=250"
            },
            {
              provider: "Bahnhof",
              package: "Bredband 500", 
              speed: "500 Mbit/s",
              price: "449 kr/mån",
              order_url: "/order?provider=bahnhof&package=500"
            }
          ],
          total_found: 15,
          next_step: "Visit order_url to complete purchase"
        });

      case 'prefill_order':
        // Return order form with prefilled data
        return NextResponse.json({
          order_url: "/order",
          prefilled_data: data,
          instructions: "Navigate to order_url and the form will be pre-filled"
        });

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
