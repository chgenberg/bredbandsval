import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Roslagstull Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Roslagstull, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband roslagstull, fiber roslagstull, internet roslagstull, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Roslagstull',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Roslagstull","type":"område","population":2500,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":465,"searchVolume":900,"competition":"medium"}',
    'ai-local-keywords': 'bredband-roslagstull,fiber-roslagstull,internet-roslagstull',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '900',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function RoslagstullBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Roslagstull<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Roslagstull-boende. 95% fiber-täckning",
    cta: "Få din Roslagstull-rekommendation",
    cityName: "Roslagstull",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2500,
    areaType: "område",
    searchVolume: 900,
    competition: "medium",
    localContent: {"localInfo":"Roslagstull är ett område i Stockholm med cirka 2,500 invånare.","fiberInfo":"Fiber-täckningen i Roslagstull ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Roslagstull är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Roslagstull ligger på cirka 465 SEK per månad.","seoKeywords":"bredband roslagstull, fiber roslagstull, internet roslagstull, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}