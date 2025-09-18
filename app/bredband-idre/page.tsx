import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Idre 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Idre. Jämför Bahnhof, Tele2, Comhem, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband idre, fiber idre, internet idre, tv paket idre, bahnhof tele2 comhem telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Idre',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Idre","population":15650,"region":"Gävleborg","fiberCoverage":71,"topProviders":["Bahnhof","Tele2","Comhem","Telenor"],"avgPrice":409}',
    'ai-local-keywords': 'bredband-idre,fiber-idre,internet-idre',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '409-sek',
    'ai-top-providers': 'Bahnhof,Tele2,Comhem,Telenor'
  }
};

export default function IdreBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Idre<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Idre – jämför priser och hastigheter gratis",
    cta: "Se Idre-alternativ nu",
    cityName: "Idre",
    region: "Gävleborg",
    fiberCoverage: 71,
    avgPrice: 409,
    topProviders: ["Bahnhof","Tele2","Comhem","Telenor"],
    population: 15650
  };

  return <LandingPage localizedContent={localizedContent} />;
}