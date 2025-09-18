import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bålsta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bålsta. Jämför Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband bålsta, fiber bålsta, internet bålsta, tv paket bålsta, telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bålsta',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bålsta","population":32617,"region":"Skåne","fiberCoverage":82,"topProviders":["Telia","Comhem"],"avgPrice":334}',
    'ai-local-keywords': 'bredband-balsta,fiber-balsta,internet-balsta',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '334-sek',
    'ai-top-providers': 'Telia,Comhem'
  }
};

export default function BålstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bålsta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bålsta – jämför priser och hastigheter gratis",
    cta: "Se Bålsta-alternativ nu",
    cityName: "Bålsta",
    region: "Skåne",
    fiberCoverage: 82,
    avgPrice: 334,
    topProviders: ["Telia","Comhem"],
    population: 32617
  };

  return <LandingPage localizedContent={localizedContent} />;
}