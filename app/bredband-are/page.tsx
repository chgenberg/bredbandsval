import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Åre 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Åre. Jämför Telia, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband åre, fiber åre, internet åre, tv paket åre, telia fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Åre',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Åre","population":3200,"region":"Jämtland","fiberCoverage":85,"topProviders":["Telia","Fibio"],"avgPrice":420}',
    'ai-local-keywords': 'bredband-are,fiber-are,internet-are',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Fibio'
  }
};

export default function ÅreBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Åre<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Åre – jämför priser och hastigheter gratis",
    cta: "Se Åre-alternativ nu",
    cityName: "Åre",
    region: "Jämtland",
    fiberCoverage: 85,
    avgPrice: 420,
    topProviders: ["Telia","Fibio"],
    population: 3200
  };

  return <LandingPage localizedContent={localizedContent} />;
}