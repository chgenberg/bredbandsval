import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kristineberg Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kristineberg, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kristineberg, fiber kristineberg, internet kristineberg, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kristineberg',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kristineberg","type":"stadsdel","population":4000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":700,"competition":"medium"}',
    'ai-local-keywords': 'bredband-kristineberg,fiber-kristineberg,internet-kristineberg',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '700',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function KristinebergBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Kristineberg<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Kristineberg – jämför priser, hastigheter och leverantörer",
    cta: "Se Kristineberg-alternativ",
    cityName: "Kristineberg",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "medium",
    localContent: {"localInfo":"Kristineberg är ett stadsdel i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Kristineberg ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kristineberg är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Kristineberg ligger på cirka 450 SEK per månad.","seoKeywords":"bredband kristineberg, fiber kristineberg, internet kristineberg, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}