import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kärrtorp 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kärrtorp. Jämför Bredband2, Comhem, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband kärrtorp, fiber kärrtorp, internet kärrtorp, tv paket kärrtorp, bredband2 comhem telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kärrtorp',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kärrtorp","population":9081,"region":"Västra Götaland","fiberCoverage":83,"topProviders":["Bredband2","Comhem","Telia"],"avgPrice":372}',
    'ai-local-keywords': 'bredband-karrtorp,fiber-karrtorp,internet-karrtorp',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '372-sek',
    'ai-top-providers': 'Bredband2,Comhem,Telia'
  }
};

export default function KärrtorpBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kärrtorp<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kärrtorp – jämför priser och hastigheter gratis",
    cta: "Se Kärrtorp-alternativ nu",
    cityName: "Kärrtorp",
    region: "Västra Götaland",
    fiberCoverage: 83,
    avgPrice: 372,
    topProviders: ["Bredband2","Comhem","Telia"],
    population: 9081
  };

  return <LandingPage localizedContent={localizedContent} />;
}