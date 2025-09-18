import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ljusdal 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ljusdal. Jämför Tele2, Bahnhof, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 74% fiber-täckning. Helt gratis.",
  keywords: "bredband ljusdal, fiber ljusdal, internet ljusdal, tv paket ljusdal, tele2 bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ljusdal',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ljusdal","population":30626,"region":"Skåne","fiberCoverage":74,"topProviders":["Tele2","Bahnhof","Comhem"],"avgPrice":322}',
    'ai-local-keywords': 'bredband-ljusdal,fiber-ljusdal,internet-ljusdal',
    'ai-fiber-coverage': '74%',
    'ai-avg-price': '322-sek',
    'ai-top-providers': 'Tele2,Bahnhof,Comhem'
  }
};

export default function LjusdalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ljusdal<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ljusdal – jämför priser och hastigheter gratis",
    cta: "Se Ljusdal-alternativ nu",
    cityName: "Ljusdal",
    region: "Skåne",
    fiberCoverage: 74,
    avgPrice: 322,
    topProviders: ["Tele2","Bahnhof","Comhem"],
    population: 30626
  };

  return <LandingPage localizedContent={localizedContent} />;
}