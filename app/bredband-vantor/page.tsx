import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vantör Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vantör, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vantör, fiber vantör, internet vantör, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vantör',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vantör","type":"stadsdel","population":5500,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-vantor,fiber-vantor,internet-vantor',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VantrBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vantör<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Vantör, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Vantör-leverantörer",
    cityName: "Vantör",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 5500,
    areaType: "stadsdel",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Vantör är ett stadsdel i Stockholm med cirka 5,500 invånare.","fiberInfo":"Fiber-täckningen i Vantör ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vantör är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Vantör ligger på cirka 425 SEK per månad.","seoKeywords":"bredband vantör, fiber vantör, internet vantör, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}