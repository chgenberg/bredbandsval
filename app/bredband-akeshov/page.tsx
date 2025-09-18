import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Åkeshov Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Åkeshov, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband åkeshov, fiber åkeshov, internet åkeshov, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Åkeshov',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Åkeshov","type":"stadsdel","population":2500,"region":"Stockholm","fiberCoverage":88,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":430,"searchVolume":450,"competition":"low"}',
    'ai-local-keywords': 'bredband-akeshov,fiber-akeshov,internet-akeshov',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '450',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function keshovBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Åkeshov<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Åkeshov, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Åkeshov-leverantörer",
    cityName: "Åkeshov",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 430,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2500,
    areaType: "stadsdel",
    searchVolume: 450,
    competition: "low",
    localContent: {"localInfo":"Åkeshov är ett stadsdel i Stockholm med cirka 2,500 invånare.","fiberInfo":"Fiber-täckningen i Åkeshov ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Åkeshov är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Åkeshov ligger på cirka 430 SEK per månad.","seoKeywords":"bredband åkeshov, fiber åkeshov, internet åkeshov, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}