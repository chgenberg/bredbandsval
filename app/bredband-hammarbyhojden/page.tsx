import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hammarbyhöjden 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hammarbyhöjden. Jämför Bredband2, Tre, Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband hammarbyhöjden, fiber hammarbyhöjden, internet hammarbyhöjden, tv paket hammarbyhöjden, bredband2 tre telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hammarbyhöjden',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hammarbyhöjden","population":29513,"region":"Norrbotten","fiberCoverage":81,"topProviders":["Bredband2","Tre","Telia","Comhem"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-hammarbyhojden,fiber-hammarbyhojden,internet-hammarbyhojden',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Bredband2,Tre,Telia,Comhem'
  }
};

export default function HammarbyhöjdenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hammarbyhöjden<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hammarbyhöjden – jämför priser och hastigheter gratis",
    cta: "Se Hammarbyhöjden-alternativ nu",
    cityName: "Hammarbyhöjden",
    region: "Norrbotten",
    fiberCoverage: 81,
    avgPrice: 360,
    topProviders: ["Bredband2","Tre","Telia","Comhem"],
    population: 29513
  };

  return <LandingPage localizedContent={localizedContent} />;
}