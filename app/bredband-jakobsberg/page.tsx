import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Jakobsberg Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Jakobsberg, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband jakobsberg, fiber jakobsberg, internet jakobsberg, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Jakobsberg',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Jakobsberg","type":"stadsdel","population":35000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":430,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-jakobsberg,fiber-jakobsberg,internet-jakobsberg',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function JakobsbergBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Jakobsberg<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Jakobsberg – jämför priser, hastigheter och leverantörer",
    cta: "Se Jakobsberg-alternativ",
    cityName: "Jakobsberg",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 35000,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Jakobsberg är ett stadsdel i Stockholm med cirka 35,000 invånare.","fiberInfo":"Fiber-täckningen i Jakobsberg ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Jakobsberg är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Jakobsberg ligger på cirka 430 SEK per månad.","seoKeywords":"bredband jakobsberg, fiber jakobsberg, internet jakobsberg, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}