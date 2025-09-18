import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vansbro 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vansbro. Jämför Tele2, Telia, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband vansbro, fiber vansbro, internet vansbro, tv paket vansbro, tele2 telia bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vansbro',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vansbro","population":16379,"region":"Västerbotten","fiberCoverage":92,"topProviders":["Tele2","Telia","Bredband2"],"avgPrice":395}',
    'ai-local-keywords': 'bredband-vansbro,fiber-vansbro,internet-vansbro',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Tele2,Telia,Bredband2'
  }
};

export default function VansbroBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vansbro<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vansbro – jämför priser och hastigheter gratis",
    cta: "Se Vansbro-alternativ nu",
    cityName: "Vansbro",
    region: "Västerbotten",
    fiberCoverage: 92,
    avgPrice: 395,
    topProviders: ["Tele2","Telia","Bredband2"],
    population: 16379
  };

  return <LandingPage localizedContent={localizedContent} />;
}