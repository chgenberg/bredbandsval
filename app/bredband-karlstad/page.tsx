import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Karlstad 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Karlstad. Jämför Telia, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband karlstad, fiber karlstad, internet karlstad, tv paket karlstad, telia telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Karlstad',
    'geo.position': 'Värmland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Karlstad","population":65856,"region":"Värmland","fiberCoverage":81,"topProviders":["Telia","Telenor","Fibio"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-karlstad,fiber-karlstad,internet-karlstad',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Telia,Telenor,Fibio'
  }
};

export default function KarlstadBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Karlstad<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Karlstad – jämför priser och hastigheter gratis",
    cta: "Se Karlstad-alternativ nu",
    cityName: "Karlstad",
    region: "Värmland",
    fiberCoverage: 81,
    avgPrice: 365,
    topProviders: ["Telia","Telenor","Fibio"],
    population: 65856
  };

  return <LandingPage localizedContent={localizedContent} />;
}