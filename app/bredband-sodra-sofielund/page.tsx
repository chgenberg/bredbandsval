import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Södra Sofielund Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Södra Sofielund, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband södra sofielund, fiber södra sofielund, internet södra sofielund, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Södra Sofielund',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Södra Sofielund","type":"stadsdel","population":8000,"region":"Skåne","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-sodra-sofielund,fiber-sodra-sofielund,internet-sodra-sofielund',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function SdraSofielundBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Södra Sofielund<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Södra Sofielund, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Södra Sofielund-leverantörer",
    cityName: "Södra Sofielund",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 86,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Södra Sofielund är ett stadsdel i Malmö med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Södra Sofielund ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Södra Sofielund är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Södra Sofielund ligger på cirka 405 SEK per månad.","seoKeywords":"bredband södra sofielund, fiber södra sofielund, internet södra sofielund, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}