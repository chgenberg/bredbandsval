import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rissne Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Rissne, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband rissne, fiber rissne, internet rissne, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rissne',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Rissne","type":"stadsdel","population":8000,"region":"Stockholm","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-rissne,fiber-rissne,internet-rissne',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function RissneBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rissne<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Rissne, Stockholm. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Rissne-leverantörer",
    cityName: "Rissne",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 84,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Rissne är ett stadsdel i Stockholm med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Rissne ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Rissne är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Rissne ligger på cirka 405 SEK per månad.","seoKeywords":"bredband rissne, fiber rissne, internet rissne, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}