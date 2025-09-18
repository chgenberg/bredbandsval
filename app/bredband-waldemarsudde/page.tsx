import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Waldemarsudde 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Waldemarsudde. Jämför Fibio, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband waldemarsudde, fiber waldemarsudde, internet waldemarsudde, tv paket waldemarsudde, fibio bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Waldemarsudde',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Waldemarsudde","population":9764,"region":"Västra Götaland","fiberCoverage":78,"topProviders":["Fibio","Bredband2"],"avgPrice":393}',
    'ai-local-keywords': 'bredband-waldemarsudde,fiber-waldemarsudde,internet-waldemarsudde',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '393-sek',
    'ai-top-providers': 'Fibio,Bredband2'
  }
};

export default function WaldemarsuddeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Waldemarsudde<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Waldemarsudde – jämför priser och hastigheter gratis",
    cta: "Se Waldemarsudde-alternativ nu",
    cityName: "Waldemarsudde",
    region: "Västra Götaland",
    fiberCoverage: 78,
    avgPrice: 393,
    topProviders: ["Fibio","Bredband2"],
    population: 9764
  };

  return <LandingPage localizedContent={localizedContent} />;
}