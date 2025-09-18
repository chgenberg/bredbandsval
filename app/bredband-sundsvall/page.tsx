import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sundsvall 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sundsvall. Jämför Telia, Telenor, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband sundsvall, fiber sundsvall, internet sundsvall, tv paket sundsvall, telia telenor bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sundsvall',
    'geo.position': 'Västernorrland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sundsvall","population":58807,"region":"Västernorrland","fiberCoverage":77,"topProviders":["Telia","Telenor","Bredband2"],"avgPrice":345}',
    'ai-local-keywords': 'bredband-sundsvall,fiber-sundsvall,internet-sundsvall',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '345-sek',
    'ai-top-providers': 'Telia,Telenor,Bredband2'
  }
};

export default function SundsvallBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sundsvall<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sundsvall – jämför priser och hastigheter gratis",
    cta: "Se Sundsvall-alternativ nu",
    cityName: "Sundsvall",
    region: "Västernorrland",
    fiberCoverage: 77,
    avgPrice: 345,
    topProviders: ["Telia","Telenor","Bredband2"],
    population: 58807
  };

  return <LandingPage localizedContent={localizedContent} />;
}