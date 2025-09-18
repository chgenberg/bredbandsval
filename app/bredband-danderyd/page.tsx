import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Danderyd Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Danderyd, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband danderyd, fiber danderyd, internet danderyd, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Danderyd',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Danderyd","type":"kommun","population":32000,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":475,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-danderyd,fiber-danderyd,internet-danderyd',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '475-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function DanderydBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Danderyd<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Danderyd – jämför priser, hastigheter och leverantörer",
    cta: "Se Danderyd-alternativ",
    cityName: "Danderyd",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 475,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 32000,
    areaType: "kommun",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Danderyd är ett kommun i Stockholm med cirka 32,000 invånare.","fiberInfo":"Fiber-täckningen i Danderyd ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Danderyd är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Danderyd ligger på cirka 475 SEK per månad.","seoKeywords":"bredband danderyd, fiber danderyd, internet danderyd, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}