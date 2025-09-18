import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sollerön 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sollerön. Jämför Tele2, Bahnhof, Comhem, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband sollerön, fiber sollerön, internet sollerön, tv paket sollerön, tele2 bahnhof comhem tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sollerön',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sollerön","population":6540,"region":"Västra Götaland","fiberCoverage":80,"topProviders":["Tele2","Bahnhof","Comhem","Tre"],"avgPrice":335}',
    'ai-local-keywords': 'bredband-solleron,fiber-solleron,internet-solleron',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '335-sek',
    'ai-top-providers': 'Tele2,Bahnhof,Comhem,Tre'
  }
};

export default function SollerönBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sollerön<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sollerön – jämför priser och hastigheter gratis",
    cta: "Se Sollerön-alternativ nu",
    cityName: "Sollerön",
    region: "Västra Götaland",
    fiberCoverage: 80,
    avgPrice: 335,
    topProviders: ["Tele2","Bahnhof","Comhem","Tre"],
    population: 6540
  };

  return <LandingPage localizedContent={localizedContent} />;
}