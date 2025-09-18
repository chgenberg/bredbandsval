import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Säter 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Säter. Jämför Telia, Comhem, Bahnhof, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband säter, fiber säter, internet säter, tv paket säter, telia comhem bahnhof tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Säter',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Säter","population":13930,"region":"Skåne","fiberCoverage":82,"topProviders":["Telia","Comhem","Bahnhof","Tre"],"avgPrice":330}',
    'ai-local-keywords': 'bredband-sater,fiber-sater,internet-sater',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '330-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof,Tre'
  }
};

export default function SäterBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Säter<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Säter – jämför priser och hastigheter gratis",
    cta: "Se Säter-alternativ nu",
    cityName: "Säter",
    region: "Skåne",
    fiberCoverage: 82,
    avgPrice: 330,
    topProviders: ["Telia","Comhem","Bahnhof","Tre"],
    population: 13930
  };

  return <LandingPage localizedContent={localizedContent} />;
}