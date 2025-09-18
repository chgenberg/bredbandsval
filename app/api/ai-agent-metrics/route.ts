import { NextRequest, NextResponse } from 'next/server';

// Store metrics in memory (in production, use database)
const agentMetrics: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const metrics = await request.json();
    
    // Add server-side data
    const enrichedMetrics = {
      ...metrics,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      referer: request.headers.get('referer'),
      userAgent: request.headers.get('user-agent')
    };
    
    agentMetrics.push(enrichedMetrics);
    
    // Keep only last 1000 entries
    if (agentMetrics.length > 1000) {
      agentMetrics.splice(0, agentMetrics.length - 1000);
    }
    
    // Log important metrics
    console.log('📊 AI Agent Metrics:', {
      sessionId: metrics.sessionId,
      agentType: metrics.agentType,
      formCompletionTime: metrics.performance?.formCompletionTime,
      totalActions: metrics.actions?.length
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error storing AI agent metrics:', error);
    return NextResponse.json({ error: 'Failed to store metrics' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Return metrics for admin dashboard
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '50');
  
  return NextResponse.json({
    metrics: agentMetrics.slice(-limit),
    summary: {
      total_sessions: agentMetrics.length,
      avg_completion_time: agentMetrics.reduce((acc, m) => 
        acc + (m.performance?.formCompletionTime || 0), 0) / agentMetrics.length,
      most_common_agent: getMostCommonAgent(),
      peak_hours: getPeakHours()
    }
  });
}

function getMostCommonAgent() {
  const counts: Record<string, number> = {};
  agentMetrics.forEach(m => {
    counts[m.agentType] = (counts[m.agentType] || 0) + 1;
  });
  return Object.entries(counts).sort(([,a], [,b]) => b - a)[0]?.[0] || 'unknown';
}

function getPeakHours() {
  const hours: Record<number, number> = {};
  agentMetrics.forEach(m => {
    const hour = new Date(m.serverTimestamp).getHours();
    hours[hour] = (hours[hour] || 0) + 1;
  });
  return Object.entries(hours).sort(([,a], [,b]) => b - a).slice(0, 3);
}
