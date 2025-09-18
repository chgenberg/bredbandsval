import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Burlöv Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Burlöv, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband burlöv, fiber burlöv, internet burlöv, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Burlöv',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Burlöv","type":"kommun","population":18000,"region":"Skåne","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-burlov,fiber-burlov,internet-burlov',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Malmö'
  }
};

export default function BurlvBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Burlöv<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Burlöv – jämför priser, hastigheter och leverantörer",
    cta: "Se Burlöv-alternativ",
    cityName: "Burlöv",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 86,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 18000,
    areaType: "kommun",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Burlöv är ett kommun i Malmö med cirka 18,000 invånare.","fiberInfo":"Fiber-täckningen i Burlöv ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Burlöv är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Burlöv ligger på cirka 410 SEK per månad.","seoKeywords":"bredband burlöv, fiber burlöv, internet burlöv, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}