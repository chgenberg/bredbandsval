import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hägersten Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hägersten, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hägersten, fiber hägersten, internet hägersten, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hägersten',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hägersten","type":"stadsdel","population":42000,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-hagersten,fiber-hagersten,internet-hagersten',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HgerstenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Hägersten<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Hägersten-boende. 89% fiber-täckning",
    cta: "Få din Hägersten-rekommendation",
    cityName: "Hägersten",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 42000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Hägersten är ett stadsdel i Stockholm med cirka 42,000 invånare.","fiberInfo":"Fiber-täckningen i Hägersten ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hägersten är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Hägersten ligger på cirka 425 SEK per månad.","seoKeywords":"bredband hägersten, fiber hägersten, internet hägersten, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}