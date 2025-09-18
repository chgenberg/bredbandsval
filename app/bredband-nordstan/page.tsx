import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Nordstan Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Nordstan, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband nordstan, fiber nordstan, internet nordstan, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Nordstan',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Nordstan","type":"område","population":1000,"region":"Västra Götaland","fiberCoverage":96,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":460,"searchVolume":1800,"competition":"high"}',
    'ai-local-keywords': 'bredband-nordstan,fiber-nordstan,internet-nordstan',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1800',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function NordstanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Nordstan<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Nordstan, Göteborg. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Nordstan",
    cityName: "Nordstan",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 96,
    avgPrice: 460,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 1000,
    areaType: "område",
    searchVolume: 1800,
    competition: "high",
    localContent: {"localInfo":"Nordstan är ett område i Göteborg med cirka 1,000 invånare.","fiberInfo":"Fiber-täckningen i Nordstan ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Nordstan är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Nordstan ligger på cirka 460 SEK per månad.","seoKeywords":"bredband nordstan, fiber nordstan, internet nordstan, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}