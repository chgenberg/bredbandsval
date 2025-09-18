import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Umeå 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Umeå. Jämför Telia, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband umeå, fiber umeå, internet umeå, tv paket umeå, telia telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Umeå',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Umeå","population":89232,"region":"Västerbotten","fiberCoverage":78,"topProviders":["Telia","Telenor","Fibio"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-umea,fiber-umea,internet-umea',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Telia,Telenor,Fibio'
  }
};

export default function UmeåBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Umeå<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Umeå – jämför priser och hastigheter gratis",
    cta: "Se Umeå-alternativ nu",
    cityName: "Umeå",
    region: "Västerbotten",
    fiberCoverage: 78,
    avgPrice: 340,
    topProviders: ["Telia","Telenor","Fibio"],
    population: 89232
  };

  return <LandingPage localizedContent={localizedContent} />;
}