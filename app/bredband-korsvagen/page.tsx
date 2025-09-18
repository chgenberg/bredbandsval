import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Korsvägen Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Korsvägen, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband korsvägen, fiber korsvägen, internet korsvägen, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Korsvägen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Korsvägen","type":"område","population":2000,"region":"Västra Götaland","fiberCoverage":94,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":445,"searchVolume":1600,"competition":"high"}',
    'ai-local-keywords': 'bredband-korsvagen,fiber-korsvagen,internet-korsvagen',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1600',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function KorsvgenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Korsvägen<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Korsvägen, Göteborg. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Korsvägen",
    cityName: "Korsvägen",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 94,
    avgPrice: 445,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 2000,
    areaType: "område",
    searchVolume: 1600,
    competition: "high",
    localContent: {"localInfo":"Korsvägen är ett område i Göteborg med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Korsvägen ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Korsvägen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Korsvägen ligger på cirka 445 SEK per månad.","seoKeywords":"bredband korsvägen, fiber korsvägen, internet korsvägen, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}