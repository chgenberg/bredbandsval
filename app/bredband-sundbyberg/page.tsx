import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sundbyberg Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sundbyberg, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sundbyberg, fiber sundbyberg, internet sundbyberg, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sundbyberg',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sundbyberg","type":"kommun","population":50000,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":455,"searchVolume":1800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-sundbyberg,fiber-sundbyberg,internet-sundbyberg',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1800',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SundbybergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Sundbyberg<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Sundbyberg-boende. 93% fiber-täckning",
    cta: "Få din Sundbyberg-rekommendation",
    cityName: "Sundbyberg",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 455,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 50000,
    areaType: "kommun",
    searchVolume: 1800,
    competition: "medium",
    localContent: {"localInfo":"Sundbyberg är ett kommun i Stockholm med cirka 50,000 invånare.","fiberInfo":"Fiber-täckningen i Sundbyberg ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sundbyberg är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Sundbyberg ligger på cirka 455 SEK per månad.","seoKeywords":"bredband sundbyberg, fiber sundbyberg, internet sundbyberg, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}