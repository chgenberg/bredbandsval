import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Roslagstull 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Roslagstull. Jämför Tre, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband roslagstull, fiber roslagstull, internet roslagstull, tv paket roslagstull, tre telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Roslagstull',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Roslagstull","population":20039,"region":"Västerbotten","fiberCoverage":77,"topProviders":["Tre","Telia"],"avgPrice":395}',
    'ai-local-keywords': 'bredband-roslagstull,fiber-roslagstull,internet-roslagstull',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Tre,Telia'
  }
};

export default function RoslagstullBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Roslagstull<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Roslagstull – jämför priser och hastigheter gratis",
    cta: "Se Roslagstull-alternativ nu",
    cityName: "Roslagstull",
    region: "Västerbotten",
    fiberCoverage: 77,
    avgPrice: 395,
    topProviders: ["Tre","Telia"],
    population: 20039
  };

  return <LandingPage localizedContent={localizedContent} />;
}