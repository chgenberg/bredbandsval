import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hisingen Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hisingen, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hisingen, fiber hisingen, internet hisingen, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hisingen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hisingen","type":"stadsdel","population":130000,"region":"Västra Götaland","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":2800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-hisingen,fiber-hisingen,internet-hisingen',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '2800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function HisingenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Hisingen<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Hisingen – jämför priser, hastigheter och leverantörer",
    cta: "Se Hisingen-alternativ",
    cityName: "Hisingen",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 86,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 130000,
    areaType: "stadsdel",
    searchVolume: 2800,
    competition: "medium",
    localContent: {"localInfo":"Hisingen är ett stadsdel i Göteborg med cirka 130,000 invånare.","fiberInfo":"Fiber-täckningen i Hisingen ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hisingen är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Hisingen ligger på cirka 410 SEK per månad.","seoKeywords":"bredband hisingen, fiber hisingen, internet hisingen, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}