import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Herrgården Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Herrgården, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 81% fiber-täckning. AI-analys gratis.",
  keywords: "bredband herrgården, fiber herrgården, internet herrgården, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Herrgården',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Herrgården","type":"stadsdel","population":8000,"region":"Skåne","fiberCoverage":81,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":380,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-herrgarden,fiber-herrgarden,internet-herrgarden',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function HerrgrdenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Herrgården<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Herrgården, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Herrgården-leverantörer",
    cityName: "Herrgården",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 81,
    avgPrice: 380,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Herrgården är ett stadsdel i Malmö med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Herrgården ligger på 81%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Herrgården är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Herrgården ligger på cirka 380 SEK per månad.","seoKeywords":"bredband herrgården, fiber herrgården, internet herrgården, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}