import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Västberga 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Västberga. Jämför Fibio, Tre, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband västberga, fiber västberga, internet västberga, tv paket västberga, fibio tre telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Västberga',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Västberga","population":10683,"region":"Jämtland","fiberCoverage":92,"topProviders":["Fibio","Tre","Telia"],"avgPrice":375}',
    'ai-local-keywords': 'bredband-vastberga,fiber-vastberga,internet-vastberga',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '375-sek',
    'ai-top-providers': 'Fibio,Tre,Telia'
  }
};

export default function VästbergaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Västberga<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Västberga – jämför priser och hastigheter gratis",
    cta: "Se Västberga-alternativ nu",
    cityName: "Västberga",
    region: "Jämtland",
    fiberCoverage: 92,
    avgPrice: 375,
    topProviders: ["Fibio","Tre","Telia"],
    population: 10683
  };

  return <LandingPage localizedContent={localizedContent} />;
}