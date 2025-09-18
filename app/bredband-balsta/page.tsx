import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bålsta Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bålsta, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bålsta, fiber bålsta, internet bålsta, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bålsta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bålsta","type":"tätort","population":14000,"region":"Stockholm","fiberCoverage":84,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-balsta,fiber-balsta,internet-balsta',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BlstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bålsta<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Bålsta, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Bålsta-leverantörer",
    cityName: "Bålsta",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 84,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 14000,
    areaType: "tätort",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Bålsta är ett tätort i Stockholm med cirka 14,000 invånare.","fiberInfo":"Fiber-täckningen i Bålsta ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bålsta är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Bålsta ligger på cirka 415 SEK per månad.","seoKeywords":"bredband bålsta, fiber bålsta, internet bålsta, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}