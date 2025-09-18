import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vällingby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vällingby. Jämför Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 94% fiber-täckning. Helt gratis.",
  keywords: "bredband vällingby, fiber vällingby, internet vällingby, tv paket vällingby, telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vällingby',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vällingby","population":15352,"region":"Dalarna","fiberCoverage":94,"topProviders":["Telia","Telenor"],"avgPrice":412}',
    'ai-local-keywords': 'bredband-vallingby,fiber-vallingby,internet-vallingby',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '412-sek',
    'ai-top-providers': 'Telia,Telenor'
  }
};

export default function VällingbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vällingby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vällingby – jämför priser och hastigheter gratis",
    cta: "Se Vällingby-alternativ nu",
    cityName: "Vällingby",
    region: "Dalarna",
    fiberCoverage: 94,
    avgPrice: 412,
    topProviders: ["Telia","Telenor"],
    population: 15352
  };

  return <LandingPage localizedContent={localizedContent} />;
}