import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Jönköping 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Jönköping. Jämför Telia, Telenor, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband jönköping, fiber jönköping, internet jönköping, tv paket jönköping, telia telenor bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Jönköping',
    'geo.position': 'Jönköping',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Jönköping","population":112766,"region":"Jönköping","fiberCoverage":82,"topProviders":["Telia","Telenor","Bredband2"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-jonkoping,fiber-jonkoping,internet-jonkoping',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Telia,Telenor,Bredband2'
  }
};

export default function JönköpingBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Jönköping 2025<br/>– AI-driven jämförelse",
    subtext: "Hitta bästa bredband för ditt Jönköping-hem på 30 sekunder",
    cta: "Få din Jönköping-rekommendation",
    cityName: "Jönköping",
    region: "Jönköping",
    fiberCoverage: 82,
    avgPrice: 365,
    topProviders: ["Telia","Telenor","Bredband2"],
    population: 112766
  };

  return <LandingPage localizedContent={localizedContent} />;
}