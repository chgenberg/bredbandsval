import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Liseberg Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Liseberg, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband liseberg, fiber liseberg, internet liseberg, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Liseberg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Liseberg","type":"område","population":300,"region":"Västra Götaland","fiberCoverage":93,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":440,"searchVolume":2200,"competition":"high"}',
    'ai-local-keywords': 'bredband-liseberg,fiber-liseberg,internet-liseberg',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '2200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function LisebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Liseberg<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Liseberg, Göteborg. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Liseberg",
    cityName: "Liseberg",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 300,
    areaType: "område",
    searchVolume: 2200,
    competition: "high",
    localContent: {"localInfo":"Liseberg är ett område i Göteborg med cirka 300 invånare.","fiberInfo":"Fiber-täckningen i Liseberg ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Liseberg är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Liseberg ligger på cirka 440 SEK per månad.","seoKeywords":"bredband liseberg, fiber liseberg, internet liseberg, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}