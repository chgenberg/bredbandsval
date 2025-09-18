import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Malmö 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 88% fiber-täckning. Helt gratis.",
  keywords: "bredband malmö, fiber malmö, internet malmö, tv paket malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Malmö',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Malmö","population":347949,"region":"Skåne","fiberCoverage":88,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410}',
    'ai-local-keywords': 'bredband-malmo,fiber-malmo,internet-malmo',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2'
  }
};

export default function MalmöBredbandsPage() {
  const localizedContent = {
    headline: "Malmös smartaste val för<br/>bredband & TV",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Malmö – gratis AI-analys",
    cta: "Jämför Malmö-leverantörer nu",
    cityName: "Malmö",
    region: "Skåne",
    fiberCoverage: 88,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 347949
  };

  return <LandingPage localizedContent={localizedContent} />;
}