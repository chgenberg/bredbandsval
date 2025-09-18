import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Piteå 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Piteå. Jämför Telenor, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband piteå, fiber piteå, internet piteå, tv paket piteå, telenor tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Piteå',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Piteå","population":17459,"region":"Gävleborg","fiberCoverage":78,"topProviders":["Telenor","Tre"],"avgPrice":385}',
    'ai-local-keywords': 'bredband-pitea,fiber-pitea,internet-pitea',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Telenor,Tre'
  }
};

export default function PiteåBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Piteå<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Piteå – jämför priser och hastigheter gratis",
    cta: "Se Piteå-alternativ nu",
    cityName: "Piteå",
    region: "Gävleborg",
    fiberCoverage: 78,
    avgPrice: 385,
    topProviders: ["Telenor","Tre"],
    population: 17459
  };

  return <LandingPage localizedContent={localizedContent} />;
}