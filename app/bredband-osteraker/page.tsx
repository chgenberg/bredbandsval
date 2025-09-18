import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Österåker 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Österåker. Jämför Telenor, Tre, Fibio, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband österåker, fiber österåker, internet österåker, tv paket österåker, telenor tre fibio bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Österåker',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Österåker","population":25093,"region":"Västra Götaland","fiberCoverage":78,"topProviders":["Telenor","Tre","Fibio","Bredband2"],"avgPrice":348}',
    'ai-local-keywords': 'bredband-osteraker,fiber-osteraker,internet-osteraker',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '348-sek',
    'ai-top-providers': 'Telenor,Tre,Fibio,Bredband2'
  }
};

export default function ÖsteråkerBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Österåker<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Österåker – jämför priser och hastigheter gratis",
    cta: "Se Österåker-alternativ nu",
    cityName: "Österåker",
    region: "Västra Götaland",
    fiberCoverage: 78,
    avgPrice: 348,
    topProviders: ["Telenor","Tre","Fibio","Bredband2"],
    population: 25093
  };

  return <LandingPage localizedContent={localizedContent} />;
}