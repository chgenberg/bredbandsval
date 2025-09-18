import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Helsingborg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Helsingborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 84% fiber-täckning. Helt gratis.",
  keywords: "bredband helsingborg, fiber helsingborg, internet helsingborg, tv paket helsingborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Helsingborg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Helsingborg","population":113816,"region":"Skåne","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395}',
    'ai-local-keywords': 'bredband-helsingborg,fiber-helsingborg,internet-helsingborg',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2'
  }
};

export default function HelsingborgBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Helsingborg 2025<br/>– AI-driven jämförelse",
    subtext: "Hitta bästa bredband för ditt Helsingborg-hem på 30 sekunder",
    cta: "Få din Helsingborg-rekommendation",
    cityName: "Helsingborg",
    region: "Skåne",
    fiberCoverage: 84,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 113816
  };

  return <LandingPage localizedContent={localizedContent} />;
}