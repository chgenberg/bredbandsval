import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Norrmalm 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Norrmalm. Jämför Comhem, Tre, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband norrmalm, fiber norrmalm, internet norrmalm, tv paket norrmalm, comhem tre telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Norrmalm',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Norrmalm","population":26545,"region":"Skåne","fiberCoverage":91,"topProviders":["Comhem","Tre","Telia"],"avgPrice":337}',
    'ai-local-keywords': 'bredband-norrmalm,fiber-norrmalm,internet-norrmalm',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '337-sek',
    'ai-top-providers': 'Comhem,Tre,Telia'
  }
};

export default function NorrmalmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Norrmalm<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Norrmalm – jämför priser och hastigheter gratis",
    cta: "Se Norrmalm-alternativ nu",
    cityName: "Norrmalm",
    region: "Skåne",
    fiberCoverage: 91,
    avgPrice: 337,
    topProviders: ["Comhem","Tre","Telia"],
    population: 26545
  };

  return <LandingPage localizedContent={localizedContent} />;
}