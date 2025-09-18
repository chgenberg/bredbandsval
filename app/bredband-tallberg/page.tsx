import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tällberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tällberg. Jämför Tele2, Telenor, Bahnhof, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 88% fiber-täckning. Helt gratis.",
  keywords: "bredband tällberg, fiber tällberg, internet tällberg, tv paket tällberg, tele2 telenor bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tällberg',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tällberg","population":8546,"region":"Dalarna","fiberCoverage":88,"topProviders":["Tele2","Telenor","Bahnhof","Bredband2"],"avgPrice":383}',
    'ai-local-keywords': 'bredband-tallberg,fiber-tallberg,internet-tallberg',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '383-sek',
    'ai-top-providers': 'Tele2,Telenor,Bahnhof,Bredband2'
  }
};

export default function TällbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tällberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tällberg – jämför priser och hastigheter gratis",
    cta: "Se Tällberg-alternativ nu",
    cityName: "Tällberg",
    region: "Dalarna",
    fiberCoverage: 88,
    avgPrice: 383,
    topProviders: ["Tele2","Telenor","Bahnhof","Bredband2"],
    population: 8546
  };

  return <LandingPage localizedContent={localizedContent} />;
}