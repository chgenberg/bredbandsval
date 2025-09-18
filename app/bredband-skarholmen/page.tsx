import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skärholmen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Skärholmen, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband skärholmen, fiber skärholmen, internet skärholmen, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skärholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Skärholmen","type":"stadsdel","population":24000,"region":"Stockholm","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":1200,"competition":"low"}',
    'ai-local-keywords': 'bredband-skarholmen,fiber-skarholmen,internet-skarholmen',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1200',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SkrholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skärholmen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Skärholmen, Stockholm. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Skärholmen-leverantörer",
    cityName: "Skärholmen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 85,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 24000,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "low",
    localContent: {"localInfo":"Skärholmen är ett stadsdel i Stockholm med cirka 24,000 invånare.","fiberInfo":"Fiber-täckningen i Skärholmen ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Skärholmen är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Skärholmen ligger på cirka 410 SEK per månad.","seoKeywords":"bredband skärholmen, fiber skärholmen, internet skärholmen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}