import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Solna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Solna. Jämför Bahnhof, Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 67% fiber-täckning. Helt gratis.",
  keywords: "bredband solna, fiber solna, internet solna, tv paket solna, bahnhof tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Solna',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Solna","population":6776,"region":"Norrbotten","fiberCoverage":67,"topProviders":["Bahnhof","Tele2","Bredband2"],"avgPrice":413}',
    'ai-local-keywords': 'bredband-solna,fiber-solna,internet-solna',
    'ai-fiber-coverage': '67%',
    'ai-avg-price': '413-sek',
    'ai-top-providers': 'Bahnhof,Tele2,Bredband2'
  }
};

export default function SolnaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Solna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Solna – jämför priser och hastigheter gratis",
    cta: "Se Solna-alternativ nu",
    cityName: "Solna",
    region: "Norrbotten",
    fiberCoverage: 67,
    avgPrice: 413,
    topProviders: ["Bahnhof","Tele2","Bredband2"],
    population: 6776
  };

  return <LandingPage localizedContent={localizedContent} />;
}