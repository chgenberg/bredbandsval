import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lerum Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lerum, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lerum, fiber lerum, internet lerum, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lerum',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lerum","type":"kommun","population":41000,"region":"Västra Götaland","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-lerum,fiber-lerum,internet-lerum',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Göteborg'
  }
};

export default function LerumBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Lerum<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Lerum – jämför priser, hastigheter och leverantörer",
    cta: "Se Lerum-alternativ",
    cityName: "Lerum",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 86,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 41000,
    areaType: "kommun",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Lerum är ett kommun i Göteborg med cirka 41,000 invånare.","fiberInfo":"Fiber-täckningen i Lerum ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lerum är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Lerum ligger på cirka 410 SEK per månad.","seoKeywords":"bredband lerum, fiber lerum, internet lerum, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}