import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sigtuna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sigtuna. Jämför Bahnhof, Telenor, Bredband2, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband sigtuna, fiber sigtuna, internet sigtuna, tv paket sigtuna, bahnhof telenor bredband2 fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sigtuna',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sigtuna","population":10622,"region":"Västra Götaland","fiberCoverage":75,"topProviders":["Bahnhof","Telenor","Bredband2","Fibio"],"avgPrice":388}',
    'ai-local-keywords': 'bredband-sigtuna,fiber-sigtuna,internet-sigtuna',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '388-sek',
    'ai-top-providers': 'Bahnhof,Telenor,Bredband2,Fibio'
  }
};

export default function SigtunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sigtuna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sigtuna – jämför priser och hastigheter gratis",
    cta: "Se Sigtuna-alternativ nu",
    cityName: "Sigtuna",
    region: "Västra Götaland",
    fiberCoverage: 75,
    avgPrice: 388,
    topProviders: ["Bahnhof","Telenor","Bredband2","Fibio"],
    population: 10622
  };

  return <LandingPage localizedContent={localizedContent} />;
}