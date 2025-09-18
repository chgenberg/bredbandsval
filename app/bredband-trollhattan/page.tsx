import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Trollhättan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Trollhättan. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband trollhättan, fiber trollhättan, internet trollhättan, tv paket trollhättan, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Trollhättan',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Trollhättan","population":58218,"region":"Västra Götaland","fiberCoverage":83,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-trollhattan,fiber-trollhattan,internet-trollhattan',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function TrollhättanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Trollhättan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Trollhättan – jämför priser och hastigheter gratis",
    cta: "Se Trollhättan-alternativ nu",
    cityName: "Trollhättan",
    region: "Västra Götaland",
    fiberCoverage: 83,
    avgPrice: 360,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 58218
  };

  return <LandingPage localizedContent={localizedContent} />;
}