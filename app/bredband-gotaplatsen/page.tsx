import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Götaplatsen Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Götaplatsen, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband götaplatsen, fiber götaplatsen, internet götaplatsen, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Götaplatsen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Götaplatsen","type":"område","population":1500,"region":"Västra Götaland","fiberCoverage":95,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":450,"searchVolume":1800,"competition":"high"}',
    'ai-local-keywords': 'bredband-gotaplatsen,fiber-gotaplatsen,internet-gotaplatsen',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1800',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function GtaplatsenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Götaplatsen<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Götaplatsen, Göteborg. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Götaplatsen",
    cityName: "Götaplatsen",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 95,
    avgPrice: 450,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 1500,
    areaType: "område",
    searchVolume: 1800,
    competition: "high",
    localContent: {"localInfo":"Götaplatsen är ett område i Göteborg med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Götaplatsen ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Götaplatsen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Götaplatsen ligger på cirka 450 SEK per månad.","seoKeywords":"bredband götaplatsen, fiber götaplatsen, internet götaplatsen, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}