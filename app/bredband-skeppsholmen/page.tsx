import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skeppsholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Skeppsholmen. Jämför Bahnhof, Tre, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband skeppsholmen, fiber skeppsholmen, internet skeppsholmen, tv paket skeppsholmen, bahnhof tre telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skeppsholmen',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Skeppsholmen","population":10332,"region":"Norrbotten","fiberCoverage":83,"topProviders":["Bahnhof","Tre","Telenor","Tele2"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-skeppsholmen,fiber-skeppsholmen,internet-skeppsholmen',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Bahnhof,Tre,Telenor,Tele2'
  }
};

export default function SkeppsholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skeppsholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Skeppsholmen – jämför priser och hastigheter gratis",
    cta: "Se Skeppsholmen-alternativ nu",
    cityName: "Skeppsholmen",
    region: "Norrbotten",
    fiberCoverage: 83,
    avgPrice: 340,
    topProviders: ["Bahnhof","Tre","Telenor","Tele2"],
    population: 10332
  };

  return <LandingPage localizedContent={localizedContent} />;
}