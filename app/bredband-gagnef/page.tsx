import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gagnef 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gagnef. Jämför Bahnhof, Comhem, Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 88% fiber-täckning. Helt gratis.",
  keywords: "bredband gagnef, fiber gagnef, internet gagnef, tv paket gagnef, bahnhof comhem telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gagnef',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gagnef","population":30322,"region":"Västra Götaland","fiberCoverage":88,"topProviders":["Bahnhof","Comhem","Telia","Telenor"],"avgPrice":375}',
    'ai-local-keywords': 'bredband-gagnef,fiber-gagnef,internet-gagnef',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '375-sek',
    'ai-top-providers': 'Bahnhof,Comhem,Telia,Telenor'
  }
};

export default function GagnefBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gagnef<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gagnef – jämför priser och hastigheter gratis",
    cta: "Se Gagnef-alternativ nu",
    cityName: "Gagnef",
    region: "Västra Götaland",
    fiberCoverage: 88,
    avgPrice: 375,
    topProviders: ["Bahnhof","Comhem","Telia","Telenor"],
    population: 30322
  };

  return <LandingPage localizedContent={localizedContent} />;
}