import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Märsta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Märsta. Jämför Bahnhof, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband märsta, fiber märsta, internet märsta, tv paket märsta, bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Märsta',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Märsta","population":31048,"region":"Dalarna","fiberCoverage":77,"topProviders":["Bahnhof","Comhem"],"avgPrice":339}',
    'ai-local-keywords': 'bredband-marsta,fiber-marsta,internet-marsta',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '339-sek',
    'ai-top-providers': 'Bahnhof,Comhem'
  }
};

export default function MärstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Märsta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Märsta – jämför priser och hastigheter gratis",
    cta: "Se Märsta-alternativ nu",
    cityName: "Märsta",
    region: "Dalarna",
    fiberCoverage: 77,
    avgPrice: 339,
    topProviders: ["Bahnhof","Comhem"],
    population: 31048
  };

  return <LandingPage localizedContent={localizedContent} />;
}