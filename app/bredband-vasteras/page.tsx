import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Västerås 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Västerås. Jämför Telia, Bredband2, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband västerås, fiber västerås, internet västerås, tv paket västerås, telia bredband2 fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Västerås',
    'geo.position': 'Västmanland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Västerås","population":127799,"region":"Västmanland","fiberCoverage":85,"topProviders":["Telia","Bredband2","Fibio"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-vasteras,fiber-vasteras,internet-vasteras',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telia,Bredband2,Fibio'
  }
};

export default function VästeråsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Västerås 2025<br/>– AI-driven jämförelse",
    subtext: "Hitta bästa bredband för ditt Västerås-hem på 30 sekunder",
    cta: "Få din Västerås-rekommendation",
    cityName: "Västerås",
    region: "Västmanland",
    fiberCoverage: 85,
    avgPrice: 360,
    topProviders: ["Telia","Bredband2","Fibio"],
    population: 127799
  };

  return <LandingPage localizedContent={localizedContent} />;
}