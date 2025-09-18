import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stadshagen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Stadshagen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband stadshagen, fiber stadshagen, internet stadshagen, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stadshagen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Stadshagen","type":"stadsdel","population":8000,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":455,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-stadshagen,fiber-stadshagen,internet-stadshagen',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function StadshagenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Stadshagen<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Stadshagen – jämför priser, hastigheter och leverantörer",
    cta: "Se Stadshagen-alternativ",
    cityName: "Stadshagen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 455,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Stadshagen är ett stadsdel i Stockholm med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Stadshagen ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Stadshagen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Stadshagen ligger på cirka 455 SEK per månad.","seoKeywords":"bredband stadshagen, fiber stadshagen, internet stadshagen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}