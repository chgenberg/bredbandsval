import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Midsommarkransen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Midsommarkransen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband midsommarkransen, fiber midsommarkransen, internet midsommarkransen, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Midsommarkransen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Midsommarkransen","type":"stadsdel","population":8000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":900,"competition":"low"}',
    'ai-local-keywords': 'bredband-midsommarkransen,fiber-midsommarkransen,internet-midsommarkransen',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '900',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function MidsommarkransenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Midsommarkransen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Midsommarkransen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Midsommarkransen-leverantörer",
    cityName: "Midsommarkransen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "low",
    localContent: {"localInfo":"Midsommarkransen är ett stadsdel i Stockholm med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Midsommarkransen ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Midsommarkransen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Midsommarkransen ligger på cirka 430 SEK per månad.","seoKeywords":"bredband midsommarkransen, fiber midsommarkransen, internet midsommarkransen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}