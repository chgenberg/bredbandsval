import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ockelbo 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ockelbo. Jämför Tele2, Tre, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband ockelbo, fiber ockelbo, internet ockelbo, tv paket ockelbo, tele2 tre telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ockelbo',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ockelbo","population":28776,"region":"Norrbotten","fiberCoverage":79,"topProviders":["Tele2","Tre","Telia"],"avgPrice":352}',
    'ai-local-keywords': 'bredband-ockelbo,fiber-ockelbo,internet-ockelbo',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '352-sek',
    'ai-top-providers': 'Tele2,Tre,Telia'
  }
};

export default function OckelboBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ockelbo<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ockelbo – jämför priser och hastigheter gratis",
    cta: "Se Ockelbo-alternativ nu",
    cityName: "Ockelbo",
    region: "Norrbotten",
    fiberCoverage: 79,
    avgPrice: 352,
    topProviders: ["Tele2","Tre","Telia"],
    population: 28776
  };

  return <LandingPage localizedContent={localizedContent} />;
}