import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vaxholm 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vaxholm. Jämför Fibio, Bredband2, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband vaxholm, fiber vaxholm, internet vaxholm, tv paket vaxholm, fibio bredband2 tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vaxholm',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vaxholm","population":16868,"region":"Skåne","fiberCoverage":69,"topProviders":["Fibio","Bredband2","Tele2"],"avgPrice":408}',
    'ai-local-keywords': 'bredband-vaxholm,fiber-vaxholm,internet-vaxholm',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '408-sek',
    'ai-top-providers': 'Fibio,Bredband2,Tele2'
  }
};

export default function VaxholmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vaxholm<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vaxholm – jämför priser och hastigheter gratis",
    cta: "Se Vaxholm-alternativ nu",
    cityName: "Vaxholm",
    region: "Skåne",
    fiberCoverage: 69,
    avgPrice: 408,
    topProviders: ["Fibio","Bredband2","Tele2"],
    population: 16868
  };

  return <LandingPage localizedContent={localizedContent} />;
}