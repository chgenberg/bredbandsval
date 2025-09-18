import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Löddeköpinge Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Löddeköpinge, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband löddeköpinge, fiber löddeköpinge, internet löddeköpinge, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Löddeköpinge',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Löddeköpinge","type":"tätort","population":6000,"region":"Skåne","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":450,"competition":"low"}',
    'ai-local-keywords': 'bredband-loddekopinge,fiber-loddekopinge,internet-loddekopinge',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '450',
    'ai-competition': 'low',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Malmö'
  }
};

export default function LddekpingeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Löddeköpinge<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Löddeköpinge, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Löddeköpinge-leverantörer",
    cityName: "Löddeköpinge",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 84,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 6000,
    areaType: "tätort",
    searchVolume: 450,
    competition: "low",
    localContent: {"localInfo":"Löddeköpinge är ett tätort i Malmö med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Löddeköpinge ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Löddeköpinge är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Löddeköpinge ligger på cirka 400 SEK per månad.","seoKeywords":"bredband löddeköpinge, fiber löddeköpinge, internet löddeköpinge, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}