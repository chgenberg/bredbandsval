import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tierp 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tierp. Jämför Telia, Comhem, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband tierp, fiber tierp, internet tierp, tv paket tierp, telia comhem telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tierp',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tierp","population":14615,"region":"Dalarna","fiberCoverage":93,"topProviders":["Telia","Comhem","Telenor"],"avgPrice":353}',
    'ai-local-keywords': 'bredband-tierp,fiber-tierp,internet-tierp',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '353-sek',
    'ai-top-providers': 'Telia,Comhem,Telenor'
  }
};

export default function TierpBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tierp<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tierp – jämför priser och hastigheter gratis",
    cta: "Se Tierp-alternativ nu",
    cityName: "Tierp",
    region: "Dalarna",
    fiberCoverage: 93,
    avgPrice: 353,
    topProviders: ["Telia","Comhem","Telenor"],
    population: 14615
  };

  return <LandingPage localizedContent={localizedContent} />;
}