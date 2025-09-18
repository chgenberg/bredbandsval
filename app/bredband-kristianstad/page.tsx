import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kristianstad 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kristianstad. Jämför Telia, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband kristianstad, fiber kristianstad, internet kristianstad, tv paket kristianstad, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kristianstad',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kristianstad","population":40145,"region":"Skåne","fiberCoverage":82,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-kristianstad,fiber-kristianstad,internet-kristianstad',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2'
  }
};

export default function KristianstadBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kristianstad<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kristianstad – jämför priser och hastigheter gratis",
    cta: "Se Kristianstad-alternativ nu",
    cityName: "Kristianstad",
    region: "Skåne",
    fiberCoverage: 82,
    avgPrice: 365,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 40145
  };

  return <LandingPage localizedContent={localizedContent} />;
}