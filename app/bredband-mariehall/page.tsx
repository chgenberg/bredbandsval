import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mariehäll Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Mariehäll, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband mariehäll, fiber mariehäll, internet mariehäll, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mariehäll',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Mariehäll","type":"stadsdel","population":2000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":400,"competition":"low"}',
    'ai-local-keywords': 'bredband-mariehall,fiber-mariehall,internet-mariehall',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '400',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function MariehllBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Mariehäll<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Mariehäll, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Mariehäll-leverantörer",
    cityName: "Mariehäll",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 2000,
    areaType: "stadsdel",
    searchVolume: 400,
    competition: "low",
    localContent: {"localInfo":"Mariehäll är ett stadsdel i Stockholm med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Mariehäll ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Mariehäll är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Mariehäll ligger på cirka 425 SEK per månad.","seoKeywords":"bredband mariehäll, fiber mariehäll, internet mariehäll, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}