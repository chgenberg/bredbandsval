import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Innerstaden Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Innerstaden, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband innerstaden, fiber innerstaden, internet innerstaden, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Innerstaden',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Innerstaden","type":"stadsdel","population":25000,"region":"Skåne","fiberCoverage":90,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":425,"searchVolume":2800,"competition":"high"}',
    'ai-local-keywords': 'bredband-innerstaden,fiber-innerstaden,internet-innerstaden',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '2800',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function InnerstadenBredbandsPage() {
  const localizedContent = {
    headline: "Innerstadens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Innerstaden – personlig AI-rekommendation",
    cta: "Jämför Innerstaden-leverantörer",
    cityName: "Innerstaden",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 90,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 2800,
    competition: "high",
    localContent: {"localInfo":"Innerstaden är ett stadsdel i Malmö med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Innerstaden ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Innerstaden är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Innerstaden ligger på cirka 425 SEK per månad.","seoKeywords":"bredband innerstaden, fiber innerstaden, internet innerstaden, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}