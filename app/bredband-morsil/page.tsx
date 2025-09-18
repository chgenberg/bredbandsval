import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mörsil 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Mörsil. Jämför Bredband2, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband mörsil, fiber mörsil, internet mörsil, tv paket mörsil, bredband2 telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mörsil',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Mörsil","population":29669,"region":"Jämtland","fiberCoverage":70,"topProviders":["Bredband2","Telia"],"avgPrice":415}',
    'ai-local-keywords': 'bredband-morsil,fiber-morsil,internet-morsil',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Bredband2,Telia'
  }
};

export default function MörsilBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Mörsil<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Mörsil – jämför priser och hastigheter gratis",
    cta: "Se Mörsil-alternativ nu",
    cityName: "Mörsil",
    region: "Jämtland",
    fiberCoverage: 70,
    avgPrice: 415,
    topProviders: ["Bredband2","Telia"],
    population: 29669
  };

  return <LandingPage localizedContent={localizedContent} />;
}