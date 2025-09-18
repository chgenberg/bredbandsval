import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Transtrand 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Transtrand. Jämför Telenor, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 73% fiber-täckning. Helt gratis.",
  keywords: "bredband transtrand, fiber transtrand, internet transtrand, tv paket transtrand, telenor tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Transtrand',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Transtrand","population":19494,"region":"Stockholm","fiberCoverage":73,"topProviders":["Telenor","Tre"],"avgPrice":326}',
    'ai-local-keywords': 'bredband-transtrand,fiber-transtrand,internet-transtrand',
    'ai-fiber-coverage': '73%',
    'ai-avg-price': '326-sek',
    'ai-top-providers': 'Telenor,Tre'
  }
};

export default function TranstrandBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Transtrand<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Transtrand – jämför priser och hastigheter gratis",
    cta: "Se Transtrand-alternativ nu",
    cityName: "Transtrand",
    region: "Stockholm",
    fiberCoverage: 73,
    avgPrice: 326,
    topProviders: ["Telenor","Tre"],
    population: 19494
  };

  return <LandingPage localizedContent={localizedContent} />;
}