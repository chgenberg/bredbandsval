import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Göteborgs Universitet Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Göteborgs Universitet, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband göteborgs universitet, fiber göteborgs universitet, internet göteborgs universitet, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Göteborgs Universitet',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Göteborgs Universitet","type":"område","population":4000,"region":"Västra Götaland","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":445,"searchVolume":1300,"competition":"medium"}',
    'ai-local-keywords': 'bredband-goteborgs-universitet,fiber-goteborgs-universitet,internet-goteborgs-universitet',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1300',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function GteborgsUniversitetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Göteborgs Universitet<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Göteborgs Universitet-boende. 94% fiber-täckning",
    cta: "Få din Göteborgs Universitet-rekommendation",
    cityName: "Göteborgs Universitet",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 94,
    avgPrice: 445,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 4000,
    areaType: "område",
    searchVolume: 1300,
    competition: "medium",
    localContent: {"localInfo":"Göteborgs Universitet är ett område i Göteborg med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Göteborgs Universitet ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Göteborgs Universitet är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Göteborgs Universitet ligger på cirka 445 SEK per månad.","seoKeywords":"bredband göteborgs universitet, fiber göteborgs universitet, internet göteborgs universitet, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}