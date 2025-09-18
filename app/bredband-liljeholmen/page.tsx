import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Liljeholmen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Liljeholmen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband liljeholmen, fiber liljeholmen, internet liljeholmen, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Liljeholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Liljeholmen","type":"stadsdel","population":15000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":445,"searchVolume":1600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-liljeholmen,fiber-liljeholmen,internet-liljeholmen',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1600',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function LiljeholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Liljeholmen<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Liljeholmen – jämför priser, hastigheter och leverantörer",
    cta: "Se Liljeholmen-alternativ",
    cityName: "Liljeholmen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 445,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 1600,
    competition: "medium",
    localContent: {"localInfo":"Liljeholmen är ett stadsdel i Stockholm med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Liljeholmen ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Liljeholmen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Liljeholmen ligger på cirka 445 SEK per månad.","seoKeywords":"bredband liljeholmen, fiber liljeholmen, internet liljeholmen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}