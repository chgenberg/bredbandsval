import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bollnäs 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bollnäs. Jämför Tele2, Bahnhof, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband bollnäs, fiber bollnäs, internet bollnäs, tv paket bollnäs, tele2 bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bollnäs',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bollnäs","population":23119,"region":"Skåne","fiberCoverage":90,"topProviders":["Tele2","Bahnhof","Bredband2"],"avgPrice":416}',
    'ai-local-keywords': 'bredband-bollnas,fiber-bollnas,internet-bollnas',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '416-sek',
    'ai-top-providers': 'Tele2,Bahnhof,Bredband2'
  }
};

export default function BollnäsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bollnäs<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bollnäs – jämför priser och hastigheter gratis",
    cta: "Se Bollnäs-alternativ nu",
    cityName: "Bollnäs",
    region: "Skåne",
    fiberCoverage: 90,
    avgPrice: 416,
    topProviders: ["Tele2","Bahnhof","Bredband2"],
    population: 23119
  };

  return <LandingPage localizedContent={localizedContent} />;
}