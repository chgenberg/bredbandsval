import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Björkhagen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Björkhagen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband björkhagen, fiber björkhagen, internet björkhagen, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Björkhagen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Björkhagen","type":"stadsdel","population":9000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-bjorkhagen,fiber-bjorkhagen,internet-bjorkhagen',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BjrkhagenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Björkhagen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Björkhagen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Björkhagen-leverantörer",
    cityName: "Björkhagen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 9000,
    areaType: "stadsdel",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Björkhagen är ett stadsdel i Stockholm med cirka 9,000 invånare.","fiberInfo":"Fiber-täckningen i Björkhagen ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Björkhagen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Björkhagen ligger på cirka 430 SEK per månad.","seoKeywords":"bredband björkhagen, fiber björkhagen, internet björkhagen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}