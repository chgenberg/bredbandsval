import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Söderhamn 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Söderhamn. Jämför Tre, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband söderhamn, fiber söderhamn, internet söderhamn, tv paket söderhamn, tre fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Söderhamn',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Söderhamn","population":26902,"region":"Jämtland","fiberCoverage":90,"topProviders":["Tre","Fibio"],"avgPrice":380}',
    'ai-local-keywords': 'bredband-soderhamn,fiber-soderhamn,internet-soderhamn',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Tre,Fibio'
  }
};

export default function SöderhamnBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Söderhamn<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Söderhamn – jämför priser och hastigheter gratis",
    cta: "Se Söderhamn-alternativ nu",
    cityName: "Söderhamn",
    region: "Jämtland",
    fiberCoverage: 90,
    avgPrice: 380,
    topProviders: ["Tre","Fibio"],
    population: 26902
  };

  return <LandingPage localizedContent={localizedContent} />;
}