import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Persborg Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Persborg, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband persborg, fiber persborg, internet persborg, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Persborg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Persborg","type":"stadsdel","population":12000,"region":"Skåne","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-persborg,fiber-persborg,internet-persborg',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function PersborgBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Persborg<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Persborg, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Persborg-leverantörer",
    cityName: "Persborg",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 86,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Persborg är ett stadsdel i Malmö med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Persborg ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Persborg är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Persborg ligger på cirka 410 SEK per månad.","seoKeywords":"bredband persborg, fiber persborg, internet persborg, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}