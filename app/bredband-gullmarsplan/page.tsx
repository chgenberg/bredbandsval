import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gullmarsplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gullmarsplan. Jämför Telia, Comhem, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband gullmarsplan, fiber gullmarsplan, internet gullmarsplan, tv paket gullmarsplan, telia comhem fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gullmarsplan',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gullmarsplan","population":27931,"region":"Gävleborg","fiberCoverage":85,"topProviders":["Telia","Comhem","Fibio"],"avgPrice":329}',
    'ai-local-keywords': 'bredband-gullmarsplan,fiber-gullmarsplan,internet-gullmarsplan',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '329-sek',
    'ai-top-providers': 'Telia,Comhem,Fibio'
  }
};

export default function GullmarsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gullmarsplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gullmarsplan – jämför priser och hastigheter gratis",
    cta: "Se Gullmarsplan-alternativ nu",
    cityName: "Gullmarsplan",
    region: "Gävleborg",
    fiberCoverage: 85,
    avgPrice: 329,
    topProviders: ["Telia","Comhem","Fibio"],
    population: 27931
  };

  return <LandingPage localizedContent={localizedContent} />;
}