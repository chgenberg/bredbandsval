import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ulvsunda 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ulvsunda. Jämför Tele2, Tre, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband ulvsunda, fiber ulvsunda, internet ulvsunda, tv paket ulvsunda, tele2 tre bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ulvsunda',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ulvsunda","population":26623,"region":"Västerbotten","fiberCoverage":87,"topProviders":["Tele2","Tre","Bahnhof"],"avgPrice":402}',
    'ai-local-keywords': 'bredband-ulvsunda,fiber-ulvsunda,internet-ulvsunda',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '402-sek',
    'ai-top-providers': 'Tele2,Tre,Bahnhof'
  }
};

export default function UlvsundaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ulvsunda<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ulvsunda – jämför priser och hastigheter gratis",
    cta: "Se Ulvsunda-alternativ nu",
    cityName: "Ulvsunda",
    region: "Västerbotten",
    fiberCoverage: 87,
    avgPrice: 402,
    topProviders: ["Tele2","Tre","Bahnhof"],
    population: 26623
  };

  return <LandingPage localizedContent={localizedContent} />;
}