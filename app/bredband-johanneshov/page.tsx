import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Johanneshov Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Johanneshov, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband johanneshov, fiber johanneshov, internet johanneshov, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Johanneshov',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Johanneshov","type":"stadsdel","population":4800,"region":"Stockholm","fiberCoverage":91,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":445,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-johanneshov,fiber-johanneshov,internet-johanneshov',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function JohanneshovBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Johanneshov<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Johanneshov – jämför priser, hastigheter och leverantörer",
    cta: "Se Johanneshov-alternativ",
    cityName: "Johanneshov",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 91,
    avgPrice: 445,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 4800,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Johanneshov är ett stadsdel i Stockholm med cirka 4,800 invånare.","fiberInfo":"Fiber-täckningen i Johanneshov ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Johanneshov är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Johanneshov ligger på cirka 445 SEK per månad.","seoKeywords":"bredband johanneshov, fiber johanneshov, internet johanneshov, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}