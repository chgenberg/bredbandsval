import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Göteborg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband göteborg, fiber göteborg, internet göteborg, tv paket göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Göteborg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Göteborg","population":583056,"region":"Västra Götaland","fiberCoverage":92,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420}',
    'ai-local-keywords': 'bredband-goteborg,fiber-goteborg,internet-goteborg',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function GöteborgBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Göteborg<br/>enligt AI-analys 2025",
    subtext: "Personlig rekommendation för ditt Göteborg-hem baserat på dina behov",
    cta: "Starta din Göteborg-analys nu",
    cityName: "Göteborg",
    region: "Västra Götaland",
    fiberCoverage: 92,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 583056
  };

  return <LandingPage localizedContent={localizedContent} />;
}