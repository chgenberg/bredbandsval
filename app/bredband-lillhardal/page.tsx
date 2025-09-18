import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lillhärdal 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Lillhärdal. Jämför Telia, Comhem, Bahnhof, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband lillhärdal, fiber lillhärdal, internet lillhärdal, tv paket lillhärdal, telia comhem bahnhof tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lillhärdal',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Lillhärdal","population":24852,"region":"Norrbotten","fiberCoverage":91,"topProviders":["Telia","Comhem","Bahnhof","Tele2"],"avgPrice":385}',
    'ai-local-keywords': 'bredband-lillhardal,fiber-lillhardal,internet-lillhardal',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof,Tele2'
  }
};

export default function LillhärdalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lillhärdal<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Lillhärdal – jämför priser och hastigheter gratis",
    cta: "Se Lillhärdal-alternativ nu",
    cityName: "Lillhärdal",
    region: "Norrbotten",
    fiberCoverage: 91,
    avgPrice: 385,
    topProviders: ["Telia","Comhem","Bahnhof","Tele2"],
    population: 24852
  };

  return <LandingPage localizedContent={localizedContent} />;
}