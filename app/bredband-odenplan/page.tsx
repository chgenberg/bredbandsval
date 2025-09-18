import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Odenplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Odenplan, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband odenplan, fiber odenplan, internet odenplan, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Odenplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Odenplan","type":"område","population":3000,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":470,"searchVolume":1400,"competition":"high"}',
    'ai-local-keywords': 'bredband-odenplan,fiber-odenplan,internet-odenplan',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '470-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1400',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function OdenplanBredbandsPage() {
  const localizedContent = {
    headline: "Odenplans smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Odenplan – personlig AI-rekommendation",
    cta: "Jämför Odenplan-leverantörer",
    cityName: "Odenplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 470,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 3000,
    areaType: "område",
    searchVolume: 1400,
    competition: "high",
    localContent: {"localInfo":"Odenplan är ett område i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Odenplan ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Odenplan är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Odenplan ligger på cirka 470 SEK per månad.","seoKeywords":"bredband odenplan, fiber odenplan, internet odenplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}