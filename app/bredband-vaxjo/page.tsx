import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Växjö 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Växjö. Jämför Telia, Telenor, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband växjö, fiber växjö, internet växjö, tv paket växjö, telia telenor bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Växjö',
    'geo.position': 'Kronoberg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Växjö","population":66275,"region":"Kronoberg","fiberCoverage":85,"topProviders":["Telia","Telenor","Bredband2"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-vaxjo,fiber-vaxjo,internet-vaxjo',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telia,Telenor,Bredband2'
  }
};

export default function VäxjöBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Växjö<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Växjö – jämför priser och hastigheter gratis",
    cta: "Se Växjö-alternativ nu",
    cityName: "Växjö",
    region: "Kronoberg",
    fiberCoverage: 85,
    avgPrice: 360,
    topProviders: ["Telia","Telenor","Bredband2"],
    population: 66275
  };

  return <LandingPage localizedContent={localizedContent} />;
}