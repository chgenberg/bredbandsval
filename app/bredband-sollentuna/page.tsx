import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sollentuna Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sollentuna, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sollentuna, fiber sollentuna, internet sollentuna, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sollentuna',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sollentuna","type":"kommun","population":70000,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":2000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-sollentuna,fiber-sollentuna,internet-sollentuna',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '2000',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SollentunaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Sollentuna<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Sollentuna – jämför priser, hastigheter och leverantörer",
    cta: "Se Sollentuna-alternativ",
    cityName: "Sollentuna",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 70000,
    areaType: "kommun",
    searchVolume: 2000,
    competition: "medium",
    localContent: {"localInfo":"Sollentuna är ett kommun i Stockholm med cirka 70,000 invånare.","fiberInfo":"Fiber-täckningen i Sollentuna ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sollentuna är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Sollentuna ligger på cirka 435 SEK per månad.","seoKeywords":"bredband sollentuna, fiber sollentuna, internet sollentuna, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}