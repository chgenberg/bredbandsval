import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hallonbergen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hallonbergen. Jämför Telenor, Tre, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband hallonbergen, fiber hallonbergen, internet hallonbergen, tv paket hallonbergen, telenor tre tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hallonbergen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hallonbergen","population":13025,"region":"Skåne","fiberCoverage":70,"topProviders":["Telenor","Tre","Tele2"],"avgPrice":387}',
    'ai-local-keywords': 'bredband-hallonbergen,fiber-hallonbergen,internet-hallonbergen',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '387-sek',
    'ai-top-providers': 'Telenor,Tre,Tele2'
  }
};

export default function HallonbergenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hallonbergen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hallonbergen – jämför priser och hastigheter gratis",
    cta: "Se Hallonbergen-alternativ nu",
    cityName: "Hallonbergen",
    region: "Skåne",
    fiberCoverage: 70,
    avgPrice: 387,
    topProviders: ["Telenor","Tre","Tele2"],
    population: 13025
  };

  return <LandingPage localizedContent={localizedContent} />;
}