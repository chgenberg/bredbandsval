import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Farsta Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Farsta, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband farsta, fiber farsta, internet farsta, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Farsta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Farsta","type":"stadsdel","population":45000,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":1800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-farsta,fiber-farsta,internet-farsta',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function FarstaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Farsta<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Farsta – jämför priser, hastigheter och leverantörer",
    cta: "Se Farsta-alternativ",
    cityName: "Farsta",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 45000,
    areaType: "stadsdel",
    searchVolume: 1800,
    competition: "medium",
    localContent: {"localInfo":"Farsta är ett stadsdel i Stockholm med cirka 45,000 invånare.","fiberInfo":"Fiber-täckningen i Farsta ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Farsta är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Farsta ligger på cirka 420 SEK per månad.","seoKeywords":"bredband farsta, fiber farsta, internet farsta, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}