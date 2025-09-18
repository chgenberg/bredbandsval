import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Farsta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Farsta. Jämför Fibio, Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband farsta, fiber farsta, internet farsta, tv paket farsta, fibio telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Farsta',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Farsta","population":13651,"region":"Dalarna","fiberCoverage":71,"topProviders":["Fibio","Telia","Telenor"],"avgPrice":339}',
    'ai-local-keywords': 'bredband-farsta,fiber-farsta,internet-farsta',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '339-sek',
    'ai-top-providers': 'Fibio,Telia,Telenor'
  }
};

export default function FarstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Farsta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Farsta – jämför priser och hastigheter gratis",
    cta: "Se Farsta-alternativ nu",
    cityName: "Farsta",
    region: "Dalarna",
    fiberCoverage: 71,
    avgPrice: 339,
    topProviders: ["Fibio","Telia","Telenor"],
    population: 13651
  };

  return <LandingPage localizedContent={localizedContent} />;
}