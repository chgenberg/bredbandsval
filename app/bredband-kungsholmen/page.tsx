import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungsholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kungsholmen. Jämför Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband kungsholmen, fiber kungsholmen, internet kungsholmen, tv paket kungsholmen, comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungsholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kungsholmen","population":9702,"region":"Stockholm","fiberCoverage":77,"topProviders":["Comhem","Bahnhof"],"avgPrice":400}',
    'ai-local-keywords': 'bredband-kungsholmen,fiber-kungsholmen,internet-kungsholmen',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Comhem,Bahnhof'
  }
};

export default function KungsholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kungsholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kungsholmen – jämför priser och hastigheter gratis",
    cta: "Se Kungsholmen-alternativ nu",
    cityName: "Kungsholmen",
    region: "Stockholm",
    fiberCoverage: 77,
    avgPrice: 400,
    topProviders: ["Comhem","Bahnhof"],
    population: 9702
  };

  return <LandingPage localizedContent={localizedContent} />;
}