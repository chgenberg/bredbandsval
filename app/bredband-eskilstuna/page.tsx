import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Eskilstuna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Eskilstuna. Jämför Telia, Bredband2, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband eskilstuna, fiber eskilstuna, internet eskilstuna, tv paket eskilstuna, telia bredband2 fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Eskilstuna',
    'geo.position': 'Södermanland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Eskilstuna","population":69948,"region":"Södermanland","fiberCoverage":82,"topProviders":["Telia","Bredband2","Fibio"],"avgPrice":355}',
    'ai-local-keywords': 'bredband-eskilstuna,fiber-eskilstuna,internet-eskilstuna',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '355-sek',
    'ai-top-providers': 'Telia,Bredband2,Fibio'
  }
};

export default function EskilstunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Eskilstuna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Eskilstuna – jämför priser och hastigheter gratis",
    cta: "Se Eskilstuna-alternativ nu",
    cityName: "Eskilstuna",
    region: "Södermanland",
    fiberCoverage: 82,
    avgPrice: 355,
    topProviders: ["Telia","Bredband2","Fibio"],
    population: 69948
  };

  return <LandingPage localizedContent={localizedContent} />;
}