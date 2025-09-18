import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Västberga Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Västberga, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband västberga, fiber västberga, internet västberga, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Västberga',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Västberga","type":"stadsdel","population":4000,"region":"Stockholm","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-vastberga,fiber-vastberga,internet-vastberga',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VstbergaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Västberga<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Västberga, Stockholm. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Västberga-leverantörer",
    cityName: "Västberga",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 86,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Västberga är ett stadsdel i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Västberga ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Västberga är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Västberga ligger på cirka 420 SEK per månad.","seoKeywords":"bredband västberga, fiber västberga, internet västberga, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}