import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tomteboda Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Tomteboda, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband tomteboda, fiber tomteboda, internet tomteboda, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tomteboda',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Tomteboda","type":"område","population":1000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":400,"competition":"low"}',
    'ai-local-keywords': 'bredband-tomteboda,fiber-tomteboda,internet-tomteboda',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '400',
    'ai-competition': 'low',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function TomtebodaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tomteboda<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Tomteboda, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Tomteboda-leverantörer",
    cityName: "Tomteboda",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 1000,
    areaType: "område",
    searchVolume: 400,
    competition: "low",
    localContent: {"localInfo":"Tomteboda är ett område i Stockholm med cirka 1,000 invånare.","fiberInfo":"Fiber-täckningen i Tomteboda ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Tomteboda är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Tomteboda ligger på cirka 450 SEK per månad.","seoKeywords":"bredband tomteboda, fiber tomteboda, internet tomteboda, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}