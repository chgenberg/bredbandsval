import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tomteboda 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tomteboda. Jämför Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 65% fiber-täckning. Helt gratis.",
  keywords: "bredband tomteboda, fiber tomteboda, internet tomteboda, tv paket tomteboda, telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tomteboda',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tomteboda","population":30998,"region":"Norrbotten","fiberCoverage":65,"topProviders":["Telenor","Tele2"],"avgPrice":358}',
    'ai-local-keywords': 'bredband-tomteboda,fiber-tomteboda,internet-tomteboda',
    'ai-fiber-coverage': '65%',
    'ai-avg-price': '358-sek',
    'ai-top-providers': 'Telenor,Tele2'
  }
};

export default function TomtebodaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tomteboda<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tomteboda – jämför priser och hastigheter gratis",
    cta: "Se Tomteboda-alternativ nu",
    cityName: "Tomteboda",
    region: "Norrbotten",
    fiberCoverage: 65,
    avgPrice: 358,
    topProviders: ["Telenor","Tele2"],
    population: 30998
  };

  return <LandingPage localizedContent={localizedContent} />;
}