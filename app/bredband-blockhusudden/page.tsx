import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Blockhusudden 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Blockhusudden. Jämför Telia, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband blockhusudden, fiber blockhusudden, internet blockhusudden, tv paket blockhusudden, telia tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Blockhusudden',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Blockhusudden","population":5055,"region":"Norrbotten","fiberCoverage":90,"topProviders":["Telia","Tele2"],"avgPrice":321}',
    'ai-local-keywords': 'bredband-blockhusudden,fiber-blockhusudden,internet-blockhusudden',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '321-sek',
    'ai-top-providers': 'Telia,Tele2'
  }
};

export default function BlockhusuddenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Blockhusudden<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Blockhusudden – jämför priser och hastigheter gratis",
    cta: "Se Blockhusudden-alternativ nu",
    cityName: "Blockhusudden",
    region: "Norrbotten",
    fiberCoverage: 90,
    avgPrice: 321,
    topProviders: ["Telia","Tele2"],
    population: 5055
  };

  return <LandingPage localizedContent={localizedContent} />;
}