import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lilla Torg Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lilla Torg, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lilla torg, fiber lilla torg, internet lilla torg, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lilla Torg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lilla Torg","type":"område","population":300,"region":"Skåne","fiberCoverage":92,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":435,"searchVolume":1000,"competition":"high"}',
    'ai-local-keywords': 'bredband-lilla-torg,fiber-lilla-torg,internet-lilla-torg',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1000',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function LillaTorgBredbandsPage() {
  const localizedContent = {
    headline: "Lilla Torgs smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Lilla Torg – personlig AI-rekommendation",
    cta: "Jämför Lilla Torg-leverantörer",
    cityName: "Lilla Torg",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 92,
    avgPrice: 435,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 300,
    areaType: "område",
    searchVolume: 1000,
    competition: "high",
    localContent: {"localInfo":"Lilla Torg är ett område i Malmö med cirka 300 invånare.","fiberInfo":"Fiber-täckningen i Lilla Torg ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lilla Torg är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Lilla Torg ligger på cirka 435 SEK per månad.","seoKeywords":"bredband lilla torg, fiber lilla torg, internet lilla torg, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}