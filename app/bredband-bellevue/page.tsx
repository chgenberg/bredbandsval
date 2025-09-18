import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bellevue Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bellevue, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bellevue, fiber bellevue, internet bellevue, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bellevue',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bellevue","type":"stadsdel","population":4000,"region":"Skåne","fiberCoverage":83,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":390,"searchVolume":400,"competition":"low"}',
    'ai-local-keywords': 'bredband-bellevue,fiber-bellevue,internet-bellevue',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '400',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function BellevueBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bellevue<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Bellevue, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Bellevue-leverantörer",
    cityName: "Bellevue",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 83,
    avgPrice: 390,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 400,
    competition: "low",
    localContent: {"localInfo":"Bellevue är ett stadsdel i Malmö med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Bellevue ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bellevue är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Bellevue ligger på cirka 390 SEK per månad.","seoKeywords":"bredband bellevue, fiber bellevue, internet bellevue, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}