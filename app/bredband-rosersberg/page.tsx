import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rosersberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Rosersberg. Jämför Telenor, Tele2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband rosersberg, fiber rosersberg, internet rosersberg, tv paket rosersberg, telenor tele2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rosersberg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Rosersberg","population":22013,"region":"Skåne","fiberCoverage":76,"topProviders":["Telenor","Tele2","Tre"],"avgPrice":391}',
    'ai-local-keywords': 'bredband-rosersberg,fiber-rosersberg,internet-rosersberg',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '391-sek',
    'ai-top-providers': 'Telenor,Tele2,Tre'
  }
};

export default function RosersbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rosersberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Rosersberg – jämför priser och hastigheter gratis",
    cta: "Se Rosersberg-alternativ nu",
    cityName: "Rosersberg",
    region: "Skåne",
    fiberCoverage: 76,
    avgPrice: 391,
    topProviders: ["Telenor","Tele2","Tre"],
    population: 22013
  };

  return <LandingPage localizedContent={localizedContent} />;
}