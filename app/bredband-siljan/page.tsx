import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Siljan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Siljan. Jämför Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband siljan, fiber siljan, internet siljan, tv paket siljan, telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Siljan',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Siljan","population":13567,"region":"Dalarna","fiberCoverage":91,"topProviders":["Telenor","Fibio"],"avgPrice":323}',
    'ai-local-keywords': 'bredband-siljan,fiber-siljan,internet-siljan',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '323-sek',
    'ai-top-providers': 'Telenor,Fibio'
  }
};

export default function SiljanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Siljan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Siljan – jämför priser och hastigheter gratis",
    cta: "Se Siljan-alternativ nu",
    cityName: "Siljan",
    region: "Dalarna",
    fiberCoverage: 91,
    avgPrice: 323,
    topProviders: ["Telenor","Fibio"],
    population: 13567
  };

  return <LandingPage localizedContent={localizedContent} />;
}