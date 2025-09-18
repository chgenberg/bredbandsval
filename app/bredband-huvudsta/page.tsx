import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Huvudsta Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Huvudsta, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband huvudsta, fiber huvudsta, internet huvudsta, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Huvudsta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Huvudsta","type":"stadsdel","population":10000,"region":"Stockholm","fiberCoverage":91,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":445,"searchVolume":750,"competition":"medium"}',
    'ai-local-keywords': 'bredband-huvudsta,fiber-huvudsta,internet-huvudsta',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '750',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HuvudstaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Huvudsta<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Huvudsta – jämför priser, hastigheter och leverantörer",
    cta: "Se Huvudsta-alternativ",
    cityName: "Huvudsta",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 91,
    avgPrice: 445,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 10000,
    areaType: "stadsdel",
    searchVolume: 750,
    competition: "medium",
    localContent: {"localInfo":"Huvudsta är ett stadsdel i Stockholm med cirka 10,000 invånare.","fiberInfo":"Fiber-täckningen i Huvudsta ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Huvudsta är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Huvudsta ligger på cirka 445 SEK per månad.","seoKeywords":"bredband huvudsta, fiber huvudsta, internet huvudsta, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}