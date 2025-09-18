import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Solna Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Solna, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband solna, fiber solna, internet solna, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Solna',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Solna","type":"kommun","population":80000,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":465,"searchVolume":2600,"competition":"high"}',
    'ai-local-keywords': 'bredband-solna,fiber-solna,internet-solna',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2600',
    'ai-competition': 'high',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SolnaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Solna<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Solna-hem baserat på dina unika behov",
    cta: "Starta din Solna-analys",
    cityName: "Solna",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 80000,
    areaType: "kommun",
    searchVolume: 2600,
    competition: "high",
    localContent: {"localInfo":"Solna är ett kommun i Stockholm med cirka 80,000 invånare.","fiberInfo":"Fiber-täckningen i Solna ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Solna är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Solna ligger på cirka 465 SEK per månad.","seoKeywords":"bredband solna, fiber solna, internet solna, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}