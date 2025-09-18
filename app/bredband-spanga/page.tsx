import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Spånga Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Spånga, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband spånga, fiber spånga, internet spånga, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Spånga',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Spånga","type":"stadsdel","population":37000,"region":"Stockholm","fiberCoverage":85,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":410,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-spanga,fiber-spanga,internet-spanga',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SpngaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Spånga<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Spånga – jämför priser, hastigheter och leverantörer",
    cta: "Se Spånga-alternativ",
    cityName: "Spånga",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 85,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 37000,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Spånga är ett stadsdel i Stockholm med cirka 37,000 invånare.","fiberInfo":"Fiber-täckningen i Spånga ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Spånga är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Spånga ligger på cirka 410 SEK per månad.","seoKeywords":"bredband spånga, fiber spånga, internet spånga, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}