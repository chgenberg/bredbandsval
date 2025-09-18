import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skanstull Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Skanstull, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband skanstull, fiber skanstull, internet skanstull, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skanstull',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Skanstull","type":"område","population":4000,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":455,"searchVolume":1600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-skanstull,fiber-skanstull,internet-skanstull',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1600',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SkanstullBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Skanstull<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Skanstull-boende. 94% fiber-täckning",
    cta: "Få din Skanstull-rekommendation",
    cityName: "Skanstull",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 455,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 4000,
    areaType: "område",
    searchVolume: 1600,
    competition: "medium",
    localContent: {"localInfo":"Skanstull är ett område i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Skanstull ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Skanstull är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Skanstull ligger på cirka 455 SEK per månad.","seoKeywords":"bredband skanstull, fiber skanstull, internet skanstull, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}