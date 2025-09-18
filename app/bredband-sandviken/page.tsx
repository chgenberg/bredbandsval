import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sandviken 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sandviken. Jämför Tre, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband sandviken, fiber sandviken, internet sandviken, tv paket sandviken, tre telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sandviken',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sandviken","population":19956,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Tre","Telenor"],"avgPrice":328}',
    'ai-local-keywords': 'bredband-sandviken,fiber-sandviken,internet-sandviken',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '328-sek',
    'ai-top-providers': 'Tre,Telenor'
  }
};

export default function SandvikenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sandviken<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sandviken – jämför priser och hastigheter gratis",
    cta: "Se Sandviken-alternativ nu",
    cityName: "Sandviken",
    region: "Västra Götaland",
    fiberCoverage: 89,
    avgPrice: 328,
    topProviders: ["Tre","Telenor"],
    population: 19956
  };

  return <LandingPage localizedContent={localizedContent} />;
}