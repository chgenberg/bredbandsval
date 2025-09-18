import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Örebro 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Örebro. Jämför Telia, Telenor, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband örebro, fiber örebro, internet örebro, tv paket örebro, telia telenor bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Örebro',
    'geo.position': 'Örebro',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Örebro","population":126009,"region":"Örebro","fiberCoverage":83,"topProviders":["Telia","Telenor","Bredband2"],"avgPrice":370}',
    'ai-local-keywords': 'bredband-orebro,fiber-orebro,internet-orebro',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '370-sek',
    'ai-top-providers': 'Telia,Telenor,Bredband2'
  }
};

export default function ÖrebroBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Örebro 2025<br/>– AI-driven jämförelse",
    subtext: "Hitta bästa bredband för ditt Örebro-hem på 30 sekunder",
    cta: "Få din Örebro-rekommendation",
    cityName: "Örebro",
    region: "Örebro",
    fiberCoverage: 83,
    avgPrice: 370,
    topProviders: ["Telia","Telenor","Bredband2"],
    population: 126009
  };

  return <LandingPage localizedContent={localizedContent} />;
}