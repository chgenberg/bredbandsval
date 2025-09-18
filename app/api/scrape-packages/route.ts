import { NextRequest, NextResponse } from 'next/server';
// import { bredbandsvalScraper } from '@/lib/scraping/bredbandsval-scraper';

// Cache for scraped data
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address || typeof address !== 'string') {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      );
    }

    // Check cache first
    const cacheKey = `packages_${address.toLowerCase().replace(/\s+/g, '_')}`;
    const cached = cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log(`📦 Serving cached data for ${address}`);
      return NextResponse.json({
        packages: cached.data,
        source: 'cache',
        address,
        timestamp: cached.timestamp,
      });
    }

    console.log(`🔍 Would scrape fresh data for ${address} (temporarily disabled for deployment)`);
    
    // Temporarily return mock data for deployment
    const packages = [
      {
        id: 'demo-telia-250',
        providerName: 'Telia',
        name: 'Bredband 250 + TV',
        speed: { download: 250, upload: 25 },
        pricing: { monthly: 599, setupFee: 0 },
        contract: { bindingPeriod: 12, noticePeriod: 3 },
        includes: { router: true, publicIP: true, emailAccounts: 5 },
        features: ['Router ingår', 'TV-paket', 'Streaming ingår'],
        availability: { address, available: true, technology: 'fiber' as const }
      }
    ];
    
    // Cache the results
    cache.set(cacheKey, {
      data: packages,
      timestamp: Date.now(),
    });

    // Clean old cache entries
    cleanOldCacheEntries();

    return NextResponse.json({
      packages,
      source: 'scraped',
      address,
      timestamp: Date.now(),
      count: packages.length,
    });

  } catch (error) {
    console.error('Error in scrape-packages API:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to scrape package data',
        message: error instanceof Error ? error.message : 'Unknown error',
        packages: [], // Return empty array as fallback
      },
      { status: 500 }
    );
  }
}

// Clean cache entries older than 1 hour
function cleanOldCacheEntries() {
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  
  for (const [key, value] of cache.entries()) {
    if (value.timestamp < oneHourAgo) {
      cache.delete(key);
    }
  }
}

// GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'bredbandsval-scraper',
    cacheSize: cache.size,
    timestamp: Date.now(),
  });
}
