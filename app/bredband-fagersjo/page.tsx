import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Fagersjö 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Fagersjö. Jämför Fibio, Bredband2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 72% fiber-täckning. Helt gratis.",
  keywords: "bredband fagersjö, fiber fagersjö, internet fagersjö, tv paket fagersjö, fibio bredband2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Fagersjö',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Fagersjö","population":30552,"region":"Skåne","fiberCoverage":72,"topProviders":["Fibio","Bredband2","Telenor"],"avgPrice":339}',
    'ai-local-keywords': 'bredband-fagersjo,fiber-fagersjo,internet-fagersjo',
    'ai-fiber-coverage': '72%',
    'ai-avg-price': '339-sek',
    'ai-top-providers': 'Fibio,Bredband2,Telenor'
  }
};

export default function FagersjöBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Fagersjö<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Fagersjö – jämför priser och hastigheter gratis",
    cta: "Se Fagersjö-alternativ nu",
    cityName: "Fagersjö",
    region: "Skåne",
    fiberCoverage: 72,
    avgPrice: 339,
    topProviders: ["Fibio","Bredband2","Telenor"],
    population: 30552
  };

  return <LandingPage localizedContent={localizedContent} />;
}