import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Östermalm 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Östermalm. Jämför Telia, Fibio, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband östermalm, fiber östermalm, internet östermalm, tv paket östermalm, telia fibio tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Östermalm',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Östermalm","population":7505,"region":"Gävleborg","fiberCoverage":85,"topProviders":["Telia","Fibio","Tre"],"avgPrice":324}',
    'ai-local-keywords': 'bredband-ostermalm,fiber-ostermalm,internet-ostermalm',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '324-sek',
    'ai-top-providers': 'Telia,Fibio,Tre'
  }
};

export default function ÖstermalmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Östermalm<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Östermalm – jämför priser och hastigheter gratis",
    cta: "Se Östermalm-alternativ nu",
    cityName: "Östermalm",
    region: "Gävleborg",
    fiberCoverage: 85,
    avgPrice: 324,
    topProviders: ["Telia","Fibio","Tre"],
    population: 7505
  };

  return <LandingPage localizedContent={localizedContent} />;
}