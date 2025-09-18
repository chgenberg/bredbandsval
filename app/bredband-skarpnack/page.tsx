import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skarpnäck 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Skarpnäck. Jämför Tre, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband skarpnäck, fiber skarpnäck, internet skarpnäck, tv paket skarpnäck, tre bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skarpnäck',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Skarpnäck","population":31020,"region":"Skåne","fiberCoverage":79,"topProviders":["Tre","Bahnhof"],"avgPrice":326}',
    'ai-local-keywords': 'bredband-skarpnack,fiber-skarpnack,internet-skarpnack',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '326-sek',
    'ai-top-providers': 'Tre,Bahnhof'
  }
};

export default function SkarpnäckBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skarpnäck<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Skarpnäck – jämför priser och hastigheter gratis",
    cta: "Se Skarpnäck-alternativ nu",
    cityName: "Skarpnäck",
    region: "Skåne",
    fiberCoverage: 79,
    avgPrice: 326,
    topProviders: ["Tre","Bahnhof"],
    population: 31020
  };

  return <LandingPage localizedContent={localizedContent} />;
}