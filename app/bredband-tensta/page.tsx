import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tensta Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Tensta, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 81% fiber-täckning. AI-analys gratis.",
  keywords: "bredband tensta, fiber tensta, internet tensta, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tensta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Tensta","type":"stadsdel","population":18000,"region":"Stockholm","fiberCoverage":81,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":390,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-tensta,fiber-tensta,internet-tensta',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function TenstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tensta<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Tensta, Stockholm. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Tensta-leverantörer",
    cityName: "Tensta",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 81,
    avgPrice: 390,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 18000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Tensta är ett stadsdel i Stockholm med cirka 18,000 invånare.","fiberInfo":"Fiber-täckningen i Tensta ligger på 81%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Tensta är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Tensta ligger på cirka 390 SEK per månad.","seoKeywords":"bredband tensta, fiber tensta, internet tensta, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}