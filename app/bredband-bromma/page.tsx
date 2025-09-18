import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bromma 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bromma. Jämför Bahnhof, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband bromma, fiber bromma, internet bromma, tv paket bromma, bahnhof telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bromma',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bromma","population":11226,"region":"Västra Götaland","fiberCoverage":78,"topProviders":["Bahnhof","Telia"],"avgPrice":409}',
    'ai-local-keywords': 'bredband-bromma,fiber-bromma,internet-bromma',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '409-sek',
    'ai-top-providers': 'Bahnhof,Telia'
  }
};

export default function BrommaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bromma<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bromma – jämför priser och hastigheter gratis",
    cta: "Se Bromma-alternativ nu",
    cityName: "Bromma",
    region: "Västra Götaland",
    fiberCoverage: 78,
    avgPrice: 409,
    topProviders: ["Bahnhof","Telia"],
    population: 11226
  };

  return <LandingPage localizedContent={localizedContent} />;
}