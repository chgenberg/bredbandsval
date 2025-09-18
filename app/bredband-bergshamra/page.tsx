import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bergshamra 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bergshamra. Jämför Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband bergshamra, fiber bergshamra, internet bergshamra, tv paket bergshamra, comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bergshamra',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bergshamra","population":5124,"region":"Stockholm","fiberCoverage":69,"topProviders":["Comhem","Bahnhof"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-bergshamra,fiber-bergshamra,internet-bergshamra',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Comhem,Bahnhof'
  }
};

export default function BergshamraBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bergshamra<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bergshamra – jämför priser och hastigheter gratis",
    cta: "Se Bergshamra-alternativ nu",
    cityName: "Bergshamra",
    region: "Stockholm",
    fiberCoverage: 69,
    avgPrice: 360,
    topProviders: ["Comhem","Bahnhof"],
    population: 5124
  };

  return <LandingPage localizedContent={localizedContent} />;
}