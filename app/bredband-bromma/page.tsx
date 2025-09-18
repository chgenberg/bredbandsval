import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bromma Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bromma, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bromma, fiber bromma, internet bromma, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bromma',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bromma","type":"stadsdel","population":61000,"region":"Stockholm","fiberCoverage":91,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":2400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-bromma,fiber-bromma,internet-bromma',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '2400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BrommaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Bromma<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Bromma – jämför priser, hastigheter och leverantörer",
    cta: "Se Bromma-alternativ",
    cityName: "Bromma",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 91,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 61000,
    areaType: "stadsdel",
    searchVolume: 2400,
    competition: "medium",
    localContent: {"localInfo":"Bromma är ett stadsdel i Stockholm med cirka 61,000 invånare.","fiberInfo":"Fiber-täckningen i Bromma ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bromma är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Bromma ligger på cirka 450 SEK per månad.","seoKeywords":"bredband bromma, fiber bromma, internet bromma, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}