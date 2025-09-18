import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Linsell 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Linsell. Jämför Bredband2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband linsell, fiber linsell, internet linsell, tv paket linsell, bredband2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Linsell',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Linsell","population":21716,"region":"Skåne","fiberCoverage":92,"topProviders":["Bredband2","Bahnhof"],"avgPrice":386}',
    'ai-local-keywords': 'bredband-linsell,fiber-linsell,internet-linsell',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '386-sek',
    'ai-top-providers': 'Bredband2,Bahnhof'
  }
};

export default function LinsellBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Linsell<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Linsell – jämför priser och hastigheter gratis",
    cta: "Se Linsell-alternativ nu",
    cityName: "Linsell",
    region: "Skåne",
    fiberCoverage: 92,
    avgPrice: 386,
    topProviders: ["Bredband2","Bahnhof"],
    population: 21716
  };

  return <LandingPage localizedContent={localizedContent} />;
}