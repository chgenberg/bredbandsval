import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sköndal 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sköndal. Jämför Telia, Tele2, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 74% fiber-täckning. Helt gratis.",
  keywords: "bredband sköndal, fiber sköndal, internet sköndal, tv paket sköndal, telia tele2 comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sköndal',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sköndal","population":29059,"region":"Västerbotten","fiberCoverage":74,"topProviders":["Telia","Tele2","Comhem"],"avgPrice":396}',
    'ai-local-keywords': 'bredband-skondal,fiber-skondal,internet-skondal',
    'ai-fiber-coverage': '74%',
    'ai-avg-price': '396-sek',
    'ai-top-providers': 'Telia,Tele2,Comhem'
  }
};

export default function SköndalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sköndal<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sköndal – jämför priser och hastigheter gratis",
    cta: "Se Sköndal-alternativ nu",
    cityName: "Sköndal",
    region: "Västerbotten",
    fiberCoverage: 74,
    avgPrice: 396,
    topProviders: ["Telia","Tele2","Comhem"],
    population: 29059
  };

  return <LandingPage localizedContent={localizedContent} />;
}