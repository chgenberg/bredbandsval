import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rörberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Rörberg. Jämför Tre, Bredband2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband rörberg, fiber rörberg, internet rörberg, tv paket rörberg, tre bredband2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rörberg',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Rörberg","population":14692,"region":"Norrbotten","fiberCoverage":83,"topProviders":["Tre","Bredband2","Bahnhof"],"avgPrice":389}',
    'ai-local-keywords': 'bredband-rorberg,fiber-rorberg,internet-rorberg',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '389-sek',
    'ai-top-providers': 'Tre,Bredband2,Bahnhof'
  }
};

export default function RörbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rörberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Rörberg – jämför priser och hastigheter gratis",
    cta: "Se Rörberg-alternativ nu",
    cityName: "Rörberg",
    region: "Norrbotten",
    fiberCoverage: 83,
    avgPrice: 389,
    topProviders: ["Tre","Bredband2","Bahnhof"],
    population: 14692
  };

  return <LandingPage localizedContent={localizedContent} />;
}