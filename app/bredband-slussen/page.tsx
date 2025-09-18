import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Slussen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Slussen. Jämför Tele2, Tre, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband slussen, fiber slussen, internet slussen, tv paket slussen, tele2 tre bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Slussen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Slussen","population":23261,"region":"Dalarna","fiberCoverage":92,"topProviders":["Tele2","Tre","Bredband2"],"avgPrice":335}',
    'ai-local-keywords': 'bredband-slussen,fiber-slussen,internet-slussen',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '335-sek',
    'ai-top-providers': 'Tele2,Tre,Bredband2'
  }
};

export default function SlussenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Slussen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Slussen – jämför priser och hastigheter gratis",
    cta: "Se Slussen-alternativ nu",
    cityName: "Slussen",
    region: "Dalarna",
    fiberCoverage: 92,
    avgPrice: 335,
    topProviders: ["Tele2","Tre","Bredband2"],
    population: 23261
  };

  return <LandingPage localizedContent={localizedContent} />;
}