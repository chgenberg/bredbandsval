import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kroksbäck Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kroksbäck, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kroksbäck, fiber kroksbäck, internet kroksbäck, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kroksbäck',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kroksbäck","type":"stadsdel","population":7000,"region":"Skåne","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-kroksback,fiber-kroksback,internet-kroksback',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function KroksbckBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kroksbäck<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kroksbäck, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Kroksbäck-leverantörer",
    cityName: "Kroksbäck",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 85,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 7000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Kroksbäck är ett stadsdel i Malmö med cirka 7,000 invånare.","fiberInfo":"Fiber-täckningen i Kroksbäck ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kroksbäck är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Kroksbäck ligger på cirka 400 SEK per månad.","seoKeywords":"bredband kroksbäck, fiber kroksbäck, internet kroksbäck, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}