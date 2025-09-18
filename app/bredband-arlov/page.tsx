import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Arlöv Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Arlöv, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband arlöv, fiber arlöv, internet arlöv, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Arlöv',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Arlöv","type":"tätort","population":12000,"region":"Skåne","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-arlov,fiber-arlov,internet-arlov',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Malmö'
  }
};

export default function ArlvBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Arlöv<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Arlöv-boende. 84% fiber-täckning",
    cta: "Få din Arlöv-rekommendation",
    cityName: "Arlöv",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 84,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "tätort",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Arlöv är ett tätort i Malmö med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Arlöv ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Arlöv är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Arlöv ligger på cirka 395 SEK per månad.","seoKeywords":"bredband arlöv, fiber arlöv, internet arlöv, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}