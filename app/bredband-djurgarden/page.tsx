import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Djurgården 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Djurgården. Jämför Telia, Comhem, Bahnhof, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband djurgården, fiber djurgården, internet djurgården, tv paket djurgården, telia comhem bahnhof tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Djurgården',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Djurgården","population":19422,"region":"Skåne","fiberCoverage":79,"topProviders":["Telia","Comhem","Bahnhof","Tele2"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-djurgarden,fiber-djurgarden,internet-djurgarden',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof,Tele2'
  }
};

export default function DjurgårdenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Djurgården<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Djurgården – jämför priser och hastigheter gratis",
    cta: "Se Djurgården-alternativ nu",
    cityName: "Djurgården",
    region: "Skåne",
    fiberCoverage: 79,
    avgPrice: 340,
    topProviders: ["Telia","Comhem","Bahnhof","Tele2"],
    population: 19422
  };

  return <LandingPage localizedContent={localizedContent} />;
}