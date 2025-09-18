import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Norrköping 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Norrköping. Jämför Telia, Bahnhof, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 86% fiber-täckning. Helt gratis.",
  keywords: "bredband norrköping, fiber norrköping, internet norrköping, tv paket norrköping, telia bahnhof fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Norrköping',
    'geo.position': 'Östergötland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Norrköping","population":95618,"region":"Östergötland","fiberCoverage":86,"topProviders":["Telia","Bahnhof","Fibio"],"avgPrice":355}',
    'ai-local-keywords': 'bredband-norrkoping,fiber-norrkoping,internet-norrkoping',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '355-sek',
    'ai-top-providers': 'Telia,Bahnhof,Fibio'
  }
};

export default function NorrköpingBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Norrköping<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Norrköping – jämför priser och hastigheter gratis",
    cta: "Se Norrköping-alternativ nu",
    cityName: "Norrköping",
    region: "Östergötland",
    fiberCoverage: 86,
    avgPrice: 355,
    topProviders: ["Telia","Bahnhof","Fibio"],
    population: 95618
  };

  return <LandingPage localizedContent={localizedContent} />;
}