import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bagarmossen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bagarmossen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bagarmossen, fiber bagarmossen, internet bagarmossen, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bagarmossen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bagarmossen","type":"stadsdel","population":14000,"region":"Stockholm","fiberCoverage":86,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":800,"competition":"low"}',
    'ai-local-keywords': 'bredband-bagarmossen,fiber-bagarmossen,internet-bagarmossen',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '800',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BagarmossenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bagarmossen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Bagarmossen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Bagarmossen-leverantörer",
    cityName: "Bagarmossen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 86,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 14000,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "low",
    localContent: {"localInfo":"Bagarmossen är ett stadsdel i Stockholm med cirka 14,000 invånare.","fiberInfo":"Fiber-täckningen i Bagarmossen ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bagarmossen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Bagarmossen ligger på cirka 420 SEK per månad.","seoKeywords":"bredband bagarmossen, fiber bagarmossen, internet bagarmossen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}