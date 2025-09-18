import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Chalmers Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Chalmers, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband chalmers, fiber chalmers, internet chalmers, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Chalmers',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Chalmers","type":"område","population":3000,"region":"Västra Götaland","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":1500,"competition":"high"}',
    'ai-local-keywords': 'bredband-chalmers,fiber-chalmers,internet-chalmers',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1500',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function ChalmersBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Chalmers<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Chalmers-hem baserat på dina unika behov",
    cta: "Starta din Chalmers-analys",
    cityName: "Chalmers",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 95,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 3000,
    areaType: "område",
    searchVolume: 1500,
    competition: "high",
    localContent: {"localInfo":"Chalmers är ett område i Göteborg med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Chalmers ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Chalmers är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Chalmers ligger på cirka 450 SEK per månad.","seoKeywords":"bredband chalmers, fiber chalmers, internet chalmers, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}