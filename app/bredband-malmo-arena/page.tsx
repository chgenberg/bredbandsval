import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Malmö Arena Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Malmö Arena, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband malmö arena, fiber malmö arena, internet malmö arena, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Malmö Arena',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Malmö Arena","type":"område","population":1000,"region":"Skåne","fiberCoverage":90,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":425,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-malmo-arena,fiber-malmo-arena,internet-malmo-arena',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function MalmArenaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Malmö Arena<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Malmö Arena-boende. 90% fiber-täckning",
    cta: "Få din Malmö Arena-rekommendation",
    cityName: "Malmö Arena",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 90,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 1000,
    areaType: "område",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Malmö Arena är ett område i Malmö med cirka 1,000 invånare.","fiberInfo":"Fiber-täckningen i Malmö Arena ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Malmö Arena är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Malmö Arena ligger på cirka 425 SEK per månad.","seoKeywords":"bredband malmö arena, fiber malmö arena, internet malmö arena, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}