import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Borlänge 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Borlänge. Jämför Telenor, Bahnhof, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband borlänge, fiber borlänge, internet borlänge, tv paket borlänge, telenor bahnhof fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Borlänge',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Borlänge","population":10081,"region":"Dalarna","fiberCoverage":81,"topProviders":["Telenor","Bahnhof","Fibio"],"avgPrice":344}',
    'ai-local-keywords': 'bredband-borlange,fiber-borlange,internet-borlange',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '344-sek',
    'ai-top-providers': 'Telenor,Bahnhof,Fibio'
  }
};

export default function BorlängeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Borlänge<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Borlänge – jämför priser och hastigheter gratis",
    cta: "Se Borlänge-alternativ nu",
    cityName: "Borlänge",
    region: "Dalarna",
    fiberCoverage: 81,
    avgPrice: 344,
    topProviders: ["Telenor","Bahnhof","Fibio"],
    population: 10081
  };

  return <LandingPage localizedContent={localizedContent} />;
}