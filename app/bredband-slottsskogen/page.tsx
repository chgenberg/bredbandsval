import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Slottsskogen Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Slottsskogen, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband slottsskogen, fiber slottsskogen, internet slottsskogen, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Slottsskogen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Slottsskogen","type":"område","population":2000,"region":"Västra Götaland","fiberCoverage":92,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":435,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-slottsskogen,fiber-slottsskogen,internet-slottsskogen',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function SlottsskogenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Slottsskogen<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Slottsskogen-boende. 92% fiber-täckning",
    cta: "Få din Slottsskogen-rekommendation",
    cityName: "Slottsskogen",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 92,
    avgPrice: 435,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 2000,
    areaType: "område",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Slottsskogen är ett område i Göteborg med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Slottsskogen ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Slottsskogen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Slottsskogen ligger på cirka 435 SEK per månad.","seoKeywords":"bredband slottsskogen, fiber slottsskogen, internet slottsskogen, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}