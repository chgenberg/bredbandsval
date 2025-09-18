import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bunkeflo Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bunkeflo, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bunkeflo, fiber bunkeflo, internet bunkeflo, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bunkeflo',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bunkeflo","type":"stadsdel","population":15000,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":1000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-bunkeflo,fiber-bunkeflo,internet-bunkeflo',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1000',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function BunkefloBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Bunkeflo<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Bunkeflo – jämför priser, hastigheter och leverantörer",
    cta: "Se Bunkeflo-alternativ",
    cityName: "Bunkeflo",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 1000,
    competition: "medium",
    localContent: {"localInfo":"Bunkeflo är ett stadsdel i Malmö med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Bunkeflo ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bunkeflo är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Bunkeflo ligger på cirka 420 SEK per månad.","seoKeywords":"bredband bunkeflo, fiber bunkeflo, internet bunkeflo, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}