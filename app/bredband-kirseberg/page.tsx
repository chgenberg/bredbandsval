import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kirseberg Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kirseberg, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kirseberg, fiber kirseberg, internet kirseberg, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kirseberg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kirseberg","type":"stadsdel","population":6000,"region":"Skåne","fiberCoverage":87,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-kirseberg,fiber-kirseberg,internet-kirseberg',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function KirsebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kirseberg<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kirseberg, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Kirseberg-leverantörer",
    cityName: "Kirseberg",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 87,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Kirseberg är ett stadsdel i Malmö med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Kirseberg ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kirseberg är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Kirseberg ligger på cirka 410 SEK per månad.","seoKeywords":"bredband kirseberg, fiber kirseberg, internet kirseberg, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}