import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vällingby Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vällingby, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vällingby, fiber vällingby, internet vällingby, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vällingby',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vällingby","type":"stadsdel","population":30000,"region":"Stockholm","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":1300,"competition":"medium"}',
    'ai-local-keywords': 'bredband-vallingby,fiber-vallingby,internet-vallingby',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1300',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VllingbyBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Vällingby<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Vällingby – jämför priser, hastigheter och leverantörer",
    cta: "Se Vällingby-alternativ",
    cityName: "Vällingby",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 84,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 30000,
    areaType: "stadsdel",
    searchVolume: 1300,
    competition: "medium",
    localContent: {"localInfo":"Vällingby är ett stadsdel i Stockholm med cirka 30,000 invånare.","fiberInfo":"Fiber-täckningen i Vällingby ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vällingby är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Vällingby ligger på cirka 405 SEK per månad.","seoKeywords":"bredband vällingby, fiber vällingby, internet vällingby, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}