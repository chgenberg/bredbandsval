import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Grövelsjön 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Grövelsjön. Jämför Tele2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband grövelsjön, fiber grövelsjön, internet grövelsjön, tv paket grövelsjön, tele2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Grövelsjön',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Grövelsjön","population":7392,"region":"Gävleborg","fiberCoverage":85,"topProviders":["Tele2","Bahnhof"],"avgPrice":352}',
    'ai-local-keywords': 'bredband-grovelsjon,fiber-grovelsjon,internet-grovelsjon',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '352-sek',
    'ai-top-providers': 'Tele2,Bahnhof'
  }
};

export default function GrövelsjönBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Grövelsjön<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Grövelsjön – jämför priser och hastigheter gratis",
    cta: "Se Grövelsjön-alternativ nu",
    cityName: "Grövelsjön",
    region: "Gävleborg",
    fiberCoverage: 85,
    avgPrice: 352,
    topProviders: ["Tele2","Bahnhof"],
    population: 7392
  };

  return <LandingPage localizedContent={localizedContent} />;
}