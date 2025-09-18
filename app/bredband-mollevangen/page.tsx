import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Möllevången Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Möllevången, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband möllevången, fiber möllevången, internet möllevången, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Möllevången',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Möllevången","type":"stadsdel","population":16000,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":1800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-mollevangen,fiber-mollevangen,internet-mollevangen',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function MllevngenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Möllevången<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Möllevången – jämför priser, hastigheter och leverantörer",
    cta: "Se Möllevången-alternativ",
    cityName: "Möllevången",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 16000,
    areaType: "stadsdel",
    searchVolume: 1800,
    competition: "medium",
    localContent: {"localInfo":"Möllevången är ett stadsdel i Malmö med cirka 16,000 invånare.","fiberInfo":"Fiber-täckningen i Möllevången ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Möllevången är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Möllevången ligger på cirka 420 SEK per månad.","seoKeywords":"bredband möllevången, fiber möllevången, internet möllevången, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}