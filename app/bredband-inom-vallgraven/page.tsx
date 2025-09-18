import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Inom Vallgraven Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Inom Vallgraven, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband inom vallgraven, fiber inom vallgraven, internet inom vallgraven, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Inom Vallgraven',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Inom Vallgraven","type":"område","population":12000,"region":"Västra Götaland","fiberCoverage":95,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":450,"searchVolume":2200,"competition":"high"}',
    'ai-local-keywords': 'bredband-inom-vallgraven,fiber-inom-vallgraven,internet-inom-vallgraven',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '2200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function InomVallgravenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Inom Vallgraven<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Inom Vallgraven-hem baserat på dina unika behov",
    cta: "Starta din Inom Vallgraven-analys",
    cityName: "Inom Vallgraven",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 95,
    avgPrice: 450,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 12000,
    areaType: "område",
    searchVolume: 2200,
    competition: "high",
    localContent: {"localInfo":"Inom Vallgraven är ett område i Göteborg med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Inom Vallgraven ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Inom Vallgraven är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Inom Vallgraven ligger på cirka 450 SEK per månad.","seoKeywords":"bredband inom vallgraven, fiber inom vallgraven, internet inom vallgraven, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}