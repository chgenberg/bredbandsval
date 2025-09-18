import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kronprinsen Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kronprinsen, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kronprinsen, fiber kronprinsen, internet kronprinsen, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kronprinsen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kronprinsen","type":"stadsdel","population":6000,"region":"Skåne","fiberCoverage":87,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-kronprinsen,fiber-kronprinsen,internet-kronprinsen',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function KronprinsenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kronprinsen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kronprinsen, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Kronprinsen-leverantörer",
    cityName: "Kronprinsen",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 87,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Kronprinsen är ett stadsdel i Malmö med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Kronprinsen ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kronprinsen är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Kronprinsen ligger på cirka 410 SEK per månad.","seoKeywords":"bredband kronprinsen, fiber kronprinsen, internet kronprinsen, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}