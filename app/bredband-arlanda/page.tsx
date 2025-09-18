import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Arlanda 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Arlanda. Jämför Tre, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 94% fiber-täckning. Helt gratis.",
  keywords: "bredband arlanda, fiber arlanda, internet arlanda, tv paket arlanda, tre comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Arlanda',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Arlanda","population":31536,"region":"Västra Götaland","fiberCoverage":94,"topProviders":["Tre","Comhem"],"avgPrice":414}',
    'ai-local-keywords': 'bredband-arlanda,fiber-arlanda,internet-arlanda',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '414-sek',
    'ai-top-providers': 'Tre,Comhem'
  }
};

export default function ArlandaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Arlanda<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Arlanda – jämför priser och hastigheter gratis",
    cta: "Se Arlanda-alternativ nu",
    cityName: "Arlanda",
    region: "Västra Götaland",
    fiberCoverage: 94,
    avgPrice: 414,
    topProviders: ["Tre","Comhem"],
    population: 31536
  };

  return <LandingPage localizedContent={localizedContent} />;
}