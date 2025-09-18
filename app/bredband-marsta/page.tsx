import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Märsta Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Märsta, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband märsta, fiber märsta, internet märsta, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Märsta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Märsta","type":"tätort","population":25000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":430,"searchVolume":900,"competition":"medium"}',
    'ai-local-keywords': 'bredband-marsta,fiber-marsta,internet-marsta',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '900',
    'ai-competition': 'medium',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Stockholm'
  }
};

export default function MrstaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Märsta<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Märsta – jämför priser, hastigheter och leverantörer",
    cta: "Se Märsta-alternativ",
    cityName: "Märsta",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 25000,
    areaType: "tätort",
    searchVolume: 900,
    competition: "medium",
    localContent: {"localInfo":"Märsta är ett tätort i Stockholm med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Märsta ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Märsta är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Märsta ligger på cirka 430 SEK per månad.","seoKeywords":"bredband märsta, fiber märsta, internet märsta, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}