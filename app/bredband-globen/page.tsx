import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Globen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Globen, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband globen, fiber globen, internet globen, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Globen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Globen","type":"område","population":2000,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":450,"searchVolume":1800,"competition":"high"}',
    'ai-local-keywords': 'bredband-globen,fiber-globen,internet-globen',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1800',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function GlobenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Globen<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Globen, Stockholm. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Globen",
    cityName: "Globen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 2000,
    areaType: "område",
    searchVolume: 1800,
    competition: "high",
    localContent: {"localInfo":"Globen är ett område i Stockholm med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Globen ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Globen är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Globen ligger på cirka 450 SEK per månad.","seoKeywords":"bredband globen, fiber globen, internet globen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}