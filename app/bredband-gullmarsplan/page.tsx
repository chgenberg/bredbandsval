import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gullmarsplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Gullmarsplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband gullmarsplan, fiber gullmarsplan, internet gullmarsplan, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gullmarsplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Gullmarsplan","type":"område","population":3000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":448,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-gullmarsplan,fiber-gullmarsplan,internet-gullmarsplan',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '448-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function GullmarsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Gullmarsplan<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Gullmarsplan – jämför priser, hastigheter och leverantörer",
    cta: "Se Gullmarsplan-alternativ",
    cityName: "Gullmarsplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 448,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 3000,
    areaType: "område",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Gullmarsplan är ett område i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Gullmarsplan ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Gullmarsplan är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Gullmarsplan ligger på cirka 448 SEK per månad.","seoKeywords":"bredband gullmarsplan, fiber gullmarsplan, internet gullmarsplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}