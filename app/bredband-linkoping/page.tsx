import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Linköping 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Linköping. Jämför Telia, Bahnhof, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband linköping, fiber linköping, internet linköping, tv paket linköping, telia bahnhof fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Linköping',
    'geo.position': 'Östergötland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Linköping","population":114291,"region":"Östergötland","fiberCoverage":87,"topProviders":["Telia","Bahnhof","Fibio"],"avgPrice":375}',
    'ai-local-keywords': 'bredband-linkoping,fiber-linkoping,internet-linkoping',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '375-sek',
    'ai-top-providers': 'Telia,Bahnhof,Fibio'
  }
};

export default function LinköpingBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Linköping 2025<br/>– AI-driven jämförelse",
    subtext: "Hitta bästa bredband för ditt Linköping-hem på 30 sekunder",
    cta: "Få din Linköping-rekommendation",
    cityName: "Linköping",
    region: "Östergötland",
    fiberCoverage: 87,
    avgPrice: 375,
    topProviders: ["Telia","Bahnhof","Fibio"],
    population: 114291
  };

  return <LandingPage localizedContent={localizedContent} />;
}