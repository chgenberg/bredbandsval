import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Råsunda Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Råsunda, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband råsunda, fiber råsunda, internet råsunda, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Råsunda',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Råsunda","type":"stadsdel","population":17000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":1000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-rasunda,fiber-rasunda,internet-rasunda',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1000',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function RsundaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Råsunda<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Råsunda-boende. 92% fiber-täckning",
    cta: "Få din Råsunda-rekommendation",
    cityName: "Råsunda",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 17000,
    areaType: "stadsdel",
    searchVolume: 1000,
    competition: "medium",
    localContent: {"localInfo":"Råsunda är ett stadsdel i Stockholm med cirka 17,000 invånare.","fiberInfo":"Fiber-täckningen i Råsunda ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Råsunda är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Råsunda ligger på cirka 450 SEK per månad.","seoKeywords":"bredband råsunda, fiber råsunda, internet råsunda, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}