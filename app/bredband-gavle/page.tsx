import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gävle 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gävle. Jämför Telia, Bredband2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband gävle, fiber gävle, internet gävle, tv paket gävle, telia bredband2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gävle',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gävle","population":77586,"region":"Gävleborg","fiberCoverage":80,"topProviders":["Telia","Bredband2","Telenor"],"avgPrice":350}',
    'ai-local-keywords': 'bredband-gavle,fiber-gavle,internet-gavle',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '350-sek',
    'ai-top-providers': 'Telia,Bredband2,Telenor'
  }
};

export default function GävleBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gävle<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gävle – jämför priser och hastigheter gratis",
    cta: "Se Gävle-alternativ nu",
    cityName: "Gävle",
    region: "Gävleborg",
    fiberCoverage: 80,
    avgPrice: 350,
    topProviders: ["Telia","Bredband2","Telenor"],
    population: 77586
  };

  return <LandingPage localizedContent={localizedContent} />;
}