import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Enafors 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Enafors. Jämför Tre, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 73% fiber-täckning. Helt gratis.",
  keywords: "bredband enafors, fiber enafors, internet enafors, tv paket enafors, tre bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Enafors',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Enafors","population":27090,"region":"Gävleborg","fiberCoverage":73,"topProviders":["Tre","Bahnhof"],"avgPrice":337}',
    'ai-local-keywords': 'bredband-enafors,fiber-enafors,internet-enafors',
    'ai-fiber-coverage': '73%',
    'ai-avg-price': '337-sek',
    'ai-top-providers': 'Tre,Bahnhof'
  }
};

export default function EnaforsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Enafors<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Enafors – jämför priser och hastigheter gratis",
    cta: "Se Enafors-alternativ nu",
    cityName: "Enafors",
    region: "Gävleborg",
    fiberCoverage: 73,
    avgPrice: 337,
    topProviders: ["Tre","Bahnhof"],
    population: 27090
  };

  return <LandingPage localizedContent={localizedContent} />;
}