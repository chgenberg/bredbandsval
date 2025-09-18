import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mora 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Mora. Jämför Tre, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 74% fiber-täckning. Helt gratis.",
  keywords: "bredband mora, fiber mora, internet mora, tv paket mora, tre fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mora',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Mora","population":21233,"region":"Västra Götaland","fiberCoverage":74,"topProviders":["Tre","Fibio"],"avgPrice":406}',
    'ai-local-keywords': 'bredband-mora,fiber-mora,internet-mora',
    'ai-fiber-coverage': '74%',
    'ai-avg-price': '406-sek',
    'ai-top-providers': 'Tre,Fibio'
  }
};

export default function MoraBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Mora<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Mora – jämför priser och hastigheter gratis",
    cta: "Se Mora-alternativ nu",
    cityName: "Mora",
    region: "Västra Götaland",
    fiberCoverage: 74,
    avgPrice: 406,
    topProviders: ["Tre","Fibio"],
    population: 21233
  };

  return <LandingPage localizedContent={localizedContent} />;
}