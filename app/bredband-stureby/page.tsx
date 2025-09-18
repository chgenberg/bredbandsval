import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stureby Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Stureby, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband stureby, fiber stureby, internet stureby, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stureby',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Stureby","type":"stadsdel","population":11000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":850,"competition":"low"}',
    'ai-local-keywords': 'bredband-stureby,fiber-stureby,internet-stureby',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '850',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SturebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Stureby<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Stureby, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Stureby-leverantörer",
    cityName: "Stureby",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 11000,
    areaType: "stadsdel",
    searchVolume: 850,
    competition: "low",
    localContent: {"localInfo":"Stureby är ett stadsdel i Stockholm med cirka 11,000 invånare.","fiberInfo":"Fiber-täckningen i Stureby ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Stureby är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Stureby ligger på cirka 430 SEK per månad.","seoKeywords":"bredband stureby, fiber stureby, internet stureby, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}