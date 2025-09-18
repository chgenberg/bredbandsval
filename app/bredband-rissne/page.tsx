import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rissne 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Rissne. Jämför Telenor, Tele2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 94% fiber-täckning. Helt gratis.",
  keywords: "bredband rissne, fiber rissne, internet rissne, tv paket rissne, telenor tele2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rissne',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Rissne","population":15044,"region":"Västerbotten","fiberCoverage":94,"topProviders":["Telenor","Tele2","Tre"],"avgPrice":325}',
    'ai-local-keywords': 'bredband-rissne,fiber-rissne,internet-rissne',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '325-sek',
    'ai-top-providers': 'Telenor,Tele2,Tre'
  }
};

export default function RissneBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rissne<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Rissne – jämför priser och hastigheter gratis",
    cta: "Se Rissne-alternativ nu",
    cityName: "Rissne",
    region: "Västerbotten",
    fiberCoverage: 94,
    avgPrice: 325,
    topProviders: ["Telenor","Tele2","Tre"],
    population: 15044
  };

  return <LandingPage localizedContent={localizedContent} />;
}