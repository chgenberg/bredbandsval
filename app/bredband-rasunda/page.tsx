import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Råsunda 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Råsunda. Jämför Tre, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband råsunda, fiber råsunda, internet råsunda, tv paket råsunda, tre comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Råsunda',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Råsunda","population":23045,"region":"Västra Götaland","fiberCoverage":66,"topProviders":["Tre","Comhem"],"avgPrice":385}',
    'ai-local-keywords': 'bredband-rasunda,fiber-rasunda,internet-rasunda',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Tre,Comhem'
  }
};

export default function RåsundaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Råsunda<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Råsunda – jämför priser och hastigheter gratis",
    cta: "Se Råsunda-alternativ nu",
    cityName: "Råsunda",
    region: "Västra Götaland",
    fiberCoverage: 66,
    avgPrice: 385,
    topProviders: ["Tre","Comhem"],
    population: 23045
  };

  return <LandingPage localizedContent={localizedContent} />;
}