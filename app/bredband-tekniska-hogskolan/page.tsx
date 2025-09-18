import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tekniska Högskolan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Tekniska Högskolan, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 97% fiber-täckning. AI-analys gratis.",
  keywords: "bredband tekniska högskolan, fiber tekniska högskolan, internet tekniska högskolan, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tekniska Högskolan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Tekniska Högskolan","type":"område","population":2000,"region":"Stockholm","fiberCoverage":97,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":485,"searchVolume":1000,"competition":"high"}',
    'ai-local-keywords': 'bredband-tekniska-hogskolan,fiber-tekniska-hogskolan,internet-tekniska-hogskolan',
    'ai-fiber-coverage': '97%',
    'ai-avg-price': '485-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1000',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function TekniskaHgskolanBredbandsPage() {
  const localizedContent = {
    headline: "Tekniska Högskolans smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Tekniska Högskolan – personlig AI-rekommendation",
    cta: "Jämför Tekniska Högskolan-leverantörer",
    cityName: "Tekniska Högskolan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 97,
    avgPrice: 485,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 2000,
    areaType: "område",
    searchVolume: 1000,
    competition: "high",
    localContent: {"localInfo":"Tekniska Högskolan är ett område i Stockholm med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Tekniska Högskolan ligger på 97%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Tekniska Högskolan är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Tekniska Högskolan ligger på cirka 485 SEK per månad.","seoKeywords":"bredband tekniska högskolan, fiber tekniska högskolan, internet tekniska högskolan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}