import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Thorildsplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Thorildsplan. Jämför Bredband2, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 72% fiber-täckning. Helt gratis.",
  keywords: "bredband thorildsplan, fiber thorildsplan, internet thorildsplan, tv paket thorildsplan, bredband2 telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Thorildsplan',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Thorildsplan","population":34003,"region":"Västerbotten","fiberCoverage":72,"topProviders":["Bredband2","Telenor","Fibio"],"avgPrice":352}',
    'ai-local-keywords': 'bredband-thorildsplan,fiber-thorildsplan,internet-thorildsplan',
    'ai-fiber-coverage': '72%',
    'ai-avg-price': '352-sek',
    'ai-top-providers': 'Bredband2,Telenor,Fibio'
  }
};

export default function ThorildsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Thorildsplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Thorildsplan – jämför priser och hastigheter gratis",
    cta: "Se Thorildsplan-alternativ nu",
    cityName: "Thorildsplan",
    region: "Västerbotten",
    fiberCoverage: 72,
    avgPrice: 352,
    topProviders: ["Bredband2","Telenor","Fibio"],
    population: 34003
  };

  return <LandingPage localizedContent={localizedContent} />;
}