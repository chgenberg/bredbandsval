import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Undersåker 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Undersåker. Jämför Bredband2, Tre, Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 94% fiber-täckning. Helt gratis.",
  keywords: "bredband undersåker, fiber undersåker, internet undersåker, tv paket undersåker, bredband2 tre telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Undersåker',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Undersåker","population":31880,"region":"Dalarna","fiberCoverage":94,"topProviders":["Bredband2","Tre","Telia","Comhem"],"avgPrice":345}',
    'ai-local-keywords': 'bredband-undersaker,fiber-undersaker,internet-undersaker',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '345-sek',
    'ai-top-providers': 'Bredband2,Tre,Telia,Comhem'
  }
};

export default function UndersåkerBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Undersåker<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Undersåker – jämför priser och hastigheter gratis",
    cta: "Se Undersåker-alternativ nu",
    cityName: "Undersåker",
    region: "Dalarna",
    fiberCoverage: 94,
    avgPrice: 345,
    topProviders: ["Bredband2","Tre","Telia","Comhem"],
    population: 31880
  };

  return <LandingPage localizedContent={localizedContent} />;
}