import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Enskede Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Enskede, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband enskede, fiber enskede, internet enskede, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Enskede',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Enskede","type":"stadsdel","population":12000,"region":"Stockholm","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":1000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-enskede,fiber-enskede,internet-enskede',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1000',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function EnskedeBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Enskede<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Enskede – jämför priser, hastigheter och leverantörer",
    cta: "Se Enskede-alternativ",
    cityName: "Enskede",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 90,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 1000,
    competition: "medium",
    localContent: {"localInfo":"Enskede är ett stadsdel i Stockholm med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Enskede ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Enskede är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Enskede ligger på cirka 440 SEK per månad.","seoKeywords":"bredband enskede, fiber enskede, internet enskede, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}