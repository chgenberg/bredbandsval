import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sundbyberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sundbyberg. Jämför Tele2, Comhem, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband sundbyberg, fiber sundbyberg, internet sundbyberg, tv paket sundbyberg, tele2 comhem telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sundbyberg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sundbyberg","population":23427,"region":"Västra Götaland","fiberCoverage":90,"topProviders":["Tele2","Comhem","Telia"],"avgPrice":415}',
    'ai-local-keywords': 'bredband-sundbyberg,fiber-sundbyberg,internet-sundbyberg',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Tele2,Comhem,Telia'
  }
};

export default function SundbybergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sundbyberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sundbyberg – jämför priser och hastigheter gratis",
    cta: "Se Sundbyberg-alternativ nu",
    cityName: "Sundbyberg",
    region: "Västra Götaland",
    fiberCoverage: 90,
    avgPrice: 415,
    topProviders: ["Tele2","Comhem","Telia"],
    population: 23427
  };

  return <LandingPage localizedContent={localizedContent} />;
}