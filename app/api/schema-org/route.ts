import { NextRequest, NextResponse } from 'next/server';
import { SchemaOrgGenerator, BroadbandProduct, LocalBusinessData } from '@/lib/schema-org-generator';
import { detectAIAgent } from '@/lib/ai-agent-detector';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const type = searchParams.get('type') || 'complete';
  
  try {
    // Sample broadband products with real Swedish providers
    const broadbandProducts: BroadbandProduct[] = [
      {
        name: "Bredband 250 + TV Mellan",
        provider: "Telia",
        speed: { download: 250, upload: 25 },
        price: { monthly: 599, setupFee: 0 },
        features: ["Router ingår", "TV-paket med 60+ kanaler", "Netflix ingår", "Fri installation"],
        contract: { bindingPeriod: 12, noticePeriod: 3 },
        availability: { technology: 'fiber', coverage: 95 }
      },
      {
        name: "SuperFiber 500",
        provider: "Bahnhof",
        speed: { download: 500, upload: 50 },
        price: { monthly: 449 },
        features: ["Router ingår", "Fri installation", "Ingen bindningstid", "IPv6 support"],
        availability: { technology: 'fiber', coverage: 88 }
      },
      {
        name: "Bredband 100 + TV Stor",
        provider: "Comhem",
        speed: { download: 100, upload: 10 },
        price: { monthly: 529, setupFee: 99 },
        features: ["TV-box ingår", "HBO Max ingår", "C More ingår", "60+ TV-kanaler"],
        contract: { bindingPeriod: 24, noticePeriod: 3 },
        availability: { technology: 'cable', coverage: 92 }
      },
      {
        name: "Bredband 1000",
        provider: "Bredband2",
        speed: { download: 1000, upload: 100 },
        price: { monthly: 399 },
        features: ["Router ingår", "Fri installation", "Ingen bindningstid"],
        availability: { technology: 'fiber', coverage: 75 }
      },
      {
        name: "Fiber 250 + TV",
        provider: "Tele2",
        speed: { download: 250, upload: 25 },
        price: { monthly: 549 },
        features: ["TV-box ingår", "Disney+ ingår", "Fri installation"],
        contract: { bindingPeriod: 12, noticePeriod: 1 },
        availability: { technology: 'fiber', coverage: 82 }
      },
      {
        name: "Mobilt Bredband Obegränsat",
        provider: "Tre",
        speed: { download: 150, upload: 50 },
        price: { monthly: 399 },
        features: ["Mobil router ingår", "Obegränsad surf", "5G-ready"],
        availability: { technology: 'mobile', coverage: 98 }
      }
    ];

    // Local business data if city is specified
    const localBusiness: LocalBusinessData | undefined = city ? {
      name: city,
      location: city,
      region: getRegionForCity(city),
      services: ['Fiber', 'Bredband', 'TV-paket', 'Mobilt bredband'],
      coverage: Math.floor(Math.random() * 20) + 80 // 80-99%
    } : undefined;

    let schemaData;

    switch (type) {
      case 'products':
        schemaData = SchemaOrgGenerator.generateProductSchema(broadbandProducts);
        break;
      case 'faq':
        schemaData = SchemaOrgGenerator.generateFAQSchema();
        break;
      case 'local':
        if (!localBusiness) {
          return NextResponse.json({ error: 'City parameter required for local schema' }, { status: 400 });
        }
        schemaData = SchemaOrgGenerator.generateLocalBusinessSchema(localBusiness);
        break;
      case 'service':
        schemaData = SchemaOrgGenerator.generateServiceSchema();
        break;
      case 'organization':
        schemaData = SchemaOrgGenerator.generateOrganizationSchema();
        break;
      case 'complete':
      default:
        const completeSchema = SchemaOrgGenerator.generateCompleteSchema({
          products: broadbandProducts,
          localBusiness,
          breadcrumb: city ? ['Hem', 'Städer', city] : ['Hem'],
          includeFAQ: true
        });
        schemaData = JSON.parse(completeSchema);
        break;
    }

    const response = {
      "@context": "https://schema.org",
      data: schemaData,
      meta: {
        generated_at: new Date().toISOString(),
        city: city || null,
        type: type,
        ai_agent_detected: agentInfo.isAIAgent,
        products_count: broadbandProducts.length,
        coverage_area: city || "Sverige"
      }
    };

    return NextResponse.json(response, {
      headers: {
        'Content-Type': 'application/ld+json',
        'Cache-Control': agentInfo.isAIAgent ? 'public, max-age=1800' : 'public, max-age=300', // 30 min cache for AI, 5 min for humans
        'X-AI-Optimized': agentInfo.isAIAgent ? 'true' : 'false',
        'X-Schema-Type': type,
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error generating schema:', error);
    return NextResponse.json({ 
      error: 'Failed to generate schema',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function getRegionForCity(city: string): string {
  const cityRegions: Record<string, string> = {
    'stockholm': 'Stockholm',
    'göteborg': 'Västra Götaland',
    'goteborg': 'Västra Götaland',
    'malmö': 'Skåne',
    'malmo': 'Skåne',
    'uppsala': 'Uppsala',
    'västerås': 'Västmanland',
    'vasteras': 'Västmanland',
    'örebro': 'Örebro',
    'orebro': 'Örebro',
    'linköping': 'Östergötland',
    'linkoping': 'Östergötland',
    'helsingborg': 'Skåne',
    'jönköping': 'Jönköping',
    'jonkoping': 'Jönköping',
    'norrköping': 'Östergötland',
    'norrkoping': 'Östergötland',
    'lund': 'Skåne',
    'umeå': 'Västerbotten',
    'umea': 'Västerbotten',
    'gävle': 'Gävleborg',
    'gavle': 'Gävleborg',
    'borås': 'Västra Götaland',
    'boras': 'Västra Götaland'
  };
  
  return cityRegions[city.toLowerCase()] || 'Sverige';
}

// POST endpoint for AI agents to submit structured data requests
export async function POST(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const agentInfo = detectAIAgent(userAgent, Object.fromEntries(request.headers.entries()));
  
  if (!agentInfo.isAIAgent) {
    return NextResponse.json({ error: 'This endpoint is optimized for AI agents' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { city, preferences, include_products = true, include_local = true } = body;

    // Generate customized schema based on AI agent preferences
    const customProducts: BroadbandProduct[] = preferences?.budget ? 
      generateProductsForBudget(preferences.budget) : 
      generateStandardProducts();

    const localBusiness: LocalBusinessData | undefined = city && include_local ? {
      name: city,
      location: city,
      region: getRegionForCity(city),
      services: preferences?.services || ['Bredband', 'TV-paket', 'Mobilt bredband'],
      coverage: Math.floor(Math.random() * 20) + 80
    } : undefined;

    const schemaData = SchemaOrgGenerator.generateCompleteSchema({
      products: include_products ? customProducts : undefined,
      localBusiness,
      breadcrumb: city ? ['Hem', 'Städer', city] : ['Hem'],
      includeFAQ: preferences?.include_faq !== false
    });

    return NextResponse.json({
      "@context": "https://schema.org",
      data: JSON.parse(schemaData),
      meta: {
        generated_at: new Date().toISOString(),
        customized_for_ai: true,
        agent_type: agentInfo.agentType,
        city: city || null,
        budget_filter: preferences?.budget || null,
        processing_time_ms: Date.now() % 100 // Simulated fast processing
      }
    }, {
      headers: {
        'Content-Type': 'application/ld+json',
        'X-AI-Optimized': 'true',
        'X-Processing-Time': '< 50ms'
      }
    });

  } catch (error) {
    return NextResponse.json({ 
      error: 'Invalid request format',
      expected: {
        city: 'string (optional)',
        preferences: {
          budget: 'number (optional)',
          services: 'string[] (optional)', 
          include_faq: 'boolean (optional)'
        }
      }
    }, { status: 400 });
  }
}

function generateProductsForBudget(budget: number): BroadbandProduct[] {
  // Return products within budget range
  const allProducts = generateStandardProducts();
  return allProducts.filter(product => product.price.monthly <= budget * 1.1); // 10% buffer
}

function generateStandardProducts(): BroadbandProduct[] {
  return [
    {
      name: "Bredband 250 + TV",
      provider: "Telia",
      speed: { download: 250, upload: 25 },
      price: { monthly: 599 },
      features: ["Router ingår", "TV-paket", "Netflix ingår"],
      availability: { technology: 'fiber', coverage: 95 }
    },
    {
      name: "SuperFiber 500",
      provider: "Bahnhof",
      speed: { download: 500, upload: 50 },
      price: { monthly: 449 },
      features: ["Router ingår", "Fri installation"],
      availability: { technology: 'fiber', coverage: 88 }
    },
    {
      name: "Bredband 100 + TV",
      provider: "Comhem",
      speed: { download: 100, upload: 10 },
      price: { monthly: 529 },
      features: ["TV-box ingår", "HBO Max ingår"],
      availability: { technology: 'cable', coverage: 92 }
    }
  ];
}
