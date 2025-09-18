import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Liljeholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Liljeholmen. Jämför Tele2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 65% fiber-täckning. Helt gratis.",
  keywords: "bredband liljeholmen, fiber liljeholmen, internet liljeholmen, tv paket liljeholmen, tele2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Liljeholmen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Liljeholmen","population":9797,"region":"Dalarna","fiberCoverage":65,"topProviders":["Tele2","Telenor"],"avgPrice":395}',
    'ai-local-keywords': 'bredband-liljeholmen,fiber-liljeholmen,internet-liljeholmen',
    'ai-fiber-coverage': '65%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Tele2,Telenor'
  }
};

export default function LiljeholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Liljeholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Liljeholmen – jämför priser och hastigheter gratis",
    cta: "Se Liljeholmen-alternativ nu",
    cityName: "Liljeholmen",
    region: "Dalarna",
    fiberCoverage: 65,
    avgPrice: 395,
    topProviders: ["Tele2","Telenor"],
    population: 9797
  };

  return <LandingPage localizedContent={localizedContent} />;
}