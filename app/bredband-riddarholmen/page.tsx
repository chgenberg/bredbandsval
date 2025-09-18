import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Riddarholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Riddarholmen. Jämför Bahnhof, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband riddarholmen, fiber riddarholmen, internet riddarholmen, tv paket riddarholmen, bahnhof telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Riddarholmen',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Riddarholmen","population":7983,"region":"Jämtland","fiberCoverage":77,"topProviders":["Bahnhof","Telia"],"avgPrice":383}',
    'ai-local-keywords': 'bredband-riddarholmen,fiber-riddarholmen,internet-riddarholmen',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '383-sek',
    'ai-top-providers': 'Bahnhof,Telia'
  }
};

export default function RiddarholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Riddarholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Riddarholmen – jämför priser och hastigheter gratis",
    cta: "Se Riddarholmen-alternativ nu",
    cityName: "Riddarholmen",
    region: "Jämtland",
    fiberCoverage: 77,
    avgPrice: 383,
    topProviders: ["Bahnhof","Telia"],
    population: 7983
  };

  return <LandingPage localizedContent={localizedContent} />;
}