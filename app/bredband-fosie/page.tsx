import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Fosie Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Fosie, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband fosie, fiber fosie, internet fosie, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Fosie',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Fosie","type":"stadsdel","population":35000,"region":"Skåne","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-fosie,fiber-fosie,internet-fosie',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function FosieBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Fosie<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Fosie – jämför priser, hastigheter och leverantörer",
    cta: "Se Fosie-alternativ",
    cityName: "Fosie",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 85,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 35000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Fosie är ett stadsdel i Malmö med cirka 35,000 invånare.","fiberInfo":"Fiber-täckningen i Fosie ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Fosie är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Fosie ligger på cirka 400 SEK per månad.","seoKeywords":"bredband fosie, fiber fosie, internet fosie, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}