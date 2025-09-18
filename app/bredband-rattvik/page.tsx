import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rättvik 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Rättvik. Jämför Telia, Bredband2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband rättvik, fiber rättvik, internet rättvik, tv paket rättvik, telia bredband2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rättvik',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Rättvik","population":7013,"region":"Norrbotten","fiberCoverage":92,"topProviders":["Telia","Bredband2","Tre"],"avgPrice":406}',
    'ai-local-keywords': 'bredband-rattvik,fiber-rattvik,internet-rattvik',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '406-sek',
    'ai-top-providers': 'Telia,Bredband2,Tre'
  }
};

export default function RättvikBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rättvik<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Rättvik – jämför priser och hastigheter gratis",
    cta: "Se Rättvik-alternativ nu",
    cityName: "Rättvik",
    region: "Norrbotten",
    fiberCoverage: 92,
    avgPrice: 406,
    topProviders: ["Telia","Bredband2","Tre"],
    population: 7013
  };

  return <LandingPage localizedContent={localizedContent} />;
}