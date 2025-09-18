import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungsladugård Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kungsladugård, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kungsladugård, fiber kungsladugård, internet kungsladugård, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungsladugård',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kungsladugård","type":"stadsdel","population":8000,"region":"Västra Götaland","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-kungsladugard,fiber-kungsladugard,internet-kungsladugard',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function KungsladugrdBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kungsladugård<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kungsladugård, Göteborg. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Kungsladugård-leverantörer",
    cityName: "Kungsladugård",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 88,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Kungsladugård är ett stadsdel i Göteborg med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Kungsladugård ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kungsladugård är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Kungsladugård ligger på cirka 415 SEK per månad.","seoKeywords":"bredband kungsladugård, fiber kungsladugård, internet kungsladugård, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}