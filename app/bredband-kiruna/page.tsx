import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kiruna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kiruna. Jämför Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 72% fiber-täckning. Helt gratis.",
  keywords: "bredband kiruna, fiber kiruna, internet kiruna, tv paket kiruna, telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kiruna',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kiruna","population":17002,"region":"Norrbotten","fiberCoverage":72,"topProviders":["Telia","Telenor"],"avgPrice":380}',
    'ai-local-keywords': 'bredband-kiruna,fiber-kiruna,internet-kiruna',
    'ai-fiber-coverage': '72%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Telia,Telenor'
  }
};

export default function KirunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kiruna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kiruna – jämför priser och hastigheter gratis",
    cta: "Se Kiruna-alternativ nu",
    cityName: "Kiruna",
    region: "Norrbotten",
    fiberCoverage: 72,
    avgPrice: 380,
    topProviders: ["Telia","Telenor"],
    population: 17002
  };

  return <LandingPage localizedContent={localizedContent} />;
}