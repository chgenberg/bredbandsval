import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Jakobsberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Jakobsberg. Jämför Bahnhof, Tre, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband jakobsberg, fiber jakobsberg, internet jakobsberg, tv paket jakobsberg, bahnhof tre telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Jakobsberg',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Jakobsberg","population":33980,"region":"Västerbotten","fiberCoverage":75,"topProviders":["Bahnhof","Tre","Telenor"],"avgPrice":359}',
    'ai-local-keywords': 'bredband-jakobsberg,fiber-jakobsberg,internet-jakobsberg',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '359-sek',
    'ai-top-providers': 'Bahnhof,Tre,Telenor'
  }
};

export default function JakobsbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Jakobsberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Jakobsberg – jämför priser och hastigheter gratis",
    cta: "Se Jakobsberg-alternativ nu",
    cityName: "Jakobsberg",
    region: "Västerbotten",
    fiberCoverage: 75,
    avgPrice: 359,
    topProviders: ["Bahnhof","Tre","Telenor"],
    population: 33980
  };

  return <LandingPage localizedContent={localizedContent} />;
}