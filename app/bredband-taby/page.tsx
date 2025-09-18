import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Täby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Täby. Jämför Tele2, Telia, Comhem, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband täby, fiber täby, internet täby, tv paket täby, tele2 telia comhem telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Täby',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Täby","population":19572,"region":"Dalarna","fiberCoverage":66,"topProviders":["Tele2","Telia","Comhem","Telenor"],"avgPrice":404}',
    'ai-local-keywords': 'bredband-taby,fiber-taby,internet-taby',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '404-sek',
    'ai-top-providers': 'Tele2,Telia,Comhem,Telenor'
  }
};

export default function TäbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Täby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Täby – jämför priser och hastigheter gratis",
    cta: "Se Täby-alternativ nu",
    cityName: "Täby",
    region: "Dalarna",
    fiberCoverage: 66,
    avgPrice: 404,
    topProviders: ["Tele2","Telia","Comhem","Telenor"],
    population: 19572
  };

  return <LandingPage localizedContent={localizedContent} />;
}