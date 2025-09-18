import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Järntorget Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Järntorget, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband järntorget, fiber järntorget, internet järntorget, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Järntorget',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Järntorget","type":"område","population":1000,"region":"Västra Götaland","fiberCoverage":93,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":440,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-jarntorget,fiber-jarntorget,internet-jarntorget',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function JrntorgetBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Järntorget<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Järntorget – jämför priser, hastigheter och leverantörer",
    cta: "Se Järntorget-alternativ",
    cityName: "Järntorget",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 1000,
    areaType: "område",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Järntorget är ett område i Göteborg med cirka 1,000 invånare.","fiberInfo":"Fiber-täckningen i Järntorget ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Järntorget är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Järntorget ligger på cirka 440 SEK per månad.","seoKeywords":"bredband järntorget, fiber järntorget, internet järntorget, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}