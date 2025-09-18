import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hässelby Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hässelby, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hässelby, fiber hässelby, internet hässelby, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hässelby',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hässelby","type":"stadsdel","population":35000,"region":"Stockholm","fiberCoverage":83,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-hasselby,fiber-hasselby,internet-hasselby',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HsselbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Hässelby<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Hässelby-boende. 83% fiber-täckning",
    cta: "Få din Hässelby-rekommendation",
    cityName: "Hässelby",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 83,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 35000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Hässelby är ett stadsdel i Stockholm med cirka 35,000 invånare.","fiberInfo":"Fiber-täckningen i Hässelby ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hässelby är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Hässelby ligger på cirka 400 SEK per månad.","seoKeywords":"bredband hässelby, fiber hässelby, internet hässelby, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}