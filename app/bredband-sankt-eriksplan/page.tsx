import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sankt Eriksplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sankt Eriksplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sankt eriksplan, fiber sankt eriksplan, internet sankt eriksplan, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sankt Eriksplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sankt Eriksplan","type":"område","population":2000,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":465,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-sankt-eriksplan,fiber-sankt-eriksplan,internet-sankt-eriksplan',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SanktEriksplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Sankt Eriksplan<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Sankt Eriksplan-boende. 95% fiber-täckning",
    cta: "Få din Sankt Eriksplan-rekommendation",
    cityName: "Sankt Eriksplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2000,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Sankt Eriksplan är ett område i Stockholm med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Sankt Eriksplan ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sankt Eriksplan är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Sankt Eriksplan ligger på cirka 465 SEK per månad.","seoKeywords":"bredband sankt eriksplan, fiber sankt eriksplan, internet sankt eriksplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}