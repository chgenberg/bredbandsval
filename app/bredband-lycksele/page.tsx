import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lycksele 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Lycksele. Jämför Tele2, Bahnhof, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband lycksele, fiber lycksele, internet lycksele, tv paket lycksele, tele2 bahnhof tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lycksele',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Lycksele","population":32014,"region":"Jämtland","fiberCoverage":80,"topProviders":["Tele2","Bahnhof","Tre"],"avgPrice":325}',
    'ai-local-keywords': 'bredband-lycksele,fiber-lycksele,internet-lycksele',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '325-sek',
    'ai-top-providers': 'Tele2,Bahnhof,Tre'
  }
};

export default function LyckseleBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lycksele<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Lycksele – jämför priser och hastigheter gratis",
    cta: "Se Lycksele-alternativ nu",
    cityName: "Lycksele",
    region: "Jämtland",
    fiberCoverage: 80,
    avgPrice: 325,
    topProviders: ["Tele2","Bahnhof","Tre"],
    population: 32014
  };

  return <LandingPage localizedContent={localizedContent} />;
}