import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Orsa 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Orsa. Jämför Telenor, Bahnhof, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband orsa, fiber orsa, internet orsa, tv paket orsa, telenor bahnhof comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Orsa',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Orsa","population":13880,"region":"Västerbotten","fiberCoverage":87,"topProviders":["Telenor","Bahnhof","Comhem","Tele2"],"avgPrice":346}',
    'ai-local-keywords': 'bredband-orsa,fiber-orsa,internet-orsa',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '346-sek',
    'ai-top-providers': 'Telenor,Bahnhof,Comhem,Tele2'
  }
};

export default function OrsaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Orsa<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Orsa – jämför priser och hastigheter gratis",
    cta: "Se Orsa-alternativ nu",
    cityName: "Orsa",
    region: "Västerbotten",
    fiberCoverage: 87,
    avgPrice: 346,
    topProviders: ["Telenor","Bahnhof","Comhem","Tele2"],
    population: 13880
  };

  return <LandingPage localizedContent={localizedContent} />;
}