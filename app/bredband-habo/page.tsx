import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Håbo 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Håbo. Jämför Fibio, Telenor, Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband håbo, fiber håbo, internet håbo, tv paket håbo, fibio telenor comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Håbo',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Håbo","population":31873,"region":"Skåne","fiberCoverage":81,"topProviders":["Fibio","Telenor","Comhem","Bredband2"],"avgPrice":384}',
    'ai-local-keywords': 'bredband-habo,fiber-habo,internet-habo',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '384-sek',
    'ai-top-providers': 'Fibio,Telenor,Comhem,Bredband2'
  }
};

export default function HåboBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Håbo<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Håbo – jämför priser och hastigheter gratis",
    cta: "Se Håbo-alternativ nu",
    cityName: "Håbo",
    region: "Skåne",
    fiberCoverage: 81,
    avgPrice: 384,
    topProviders: ["Fibio","Telenor","Comhem","Bredband2"],
    population: 31873
  };

  return <LandingPage localizedContent={localizedContent} />;
}