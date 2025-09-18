import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skellefteå 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Skellefteå. Jämför Telia, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband skellefteå, fiber skellefteå, internet skellefteå, tv paket skellefteå, telia telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skellefteå',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Skellefteå","population":57589,"region":"Västerbotten","fiberCoverage":76,"topProviders":["Telia","Telenor","Fibio"],"avgPrice":335}',
    'ai-local-keywords': 'bredband-skelleftea,fiber-skelleftea,internet-skelleftea',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '335-sek',
    'ai-top-providers': 'Telia,Telenor,Fibio'
  }
};

export default function SkellefteåBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skellefteå<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Skellefteå – jämför priser och hastigheter gratis",
    cta: "Se Skellefteå-alternativ nu",
    cityName: "Skellefteå",
    region: "Västerbotten",
    fiberCoverage: 76,
    avgPrice: 335,
    topProviders: ["Telia","Telenor","Fibio"],
    population: 57589
  };

  return <LandingPage localizedContent={localizedContent} />;
}