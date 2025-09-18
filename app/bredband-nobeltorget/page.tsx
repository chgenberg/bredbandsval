import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Nobeltorget Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Nobeltorget, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband nobeltorget, fiber nobeltorget, internet nobeltorget, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Nobeltorget',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Nobeltorget","type":"område","population":3000,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-nobeltorget,fiber-nobeltorget,internet-nobeltorget',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function NobeltorgetBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Nobeltorget<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Nobeltorget – jämför priser, hastigheter och leverantörer",
    cta: "Se Nobeltorget-alternativ",
    cityName: "Nobeltorget",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 3000,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Nobeltorget är ett område i Malmö med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Nobeltorget ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Nobeltorget är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Nobeltorget ligger på cirka 420 SEK per månad.","seoKeywords":"bredband nobeltorget, fiber nobeltorget, internet nobeltorget, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}