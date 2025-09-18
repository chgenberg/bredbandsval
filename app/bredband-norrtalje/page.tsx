import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Norrtälje 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Norrtälje. Jämför Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 74% fiber-täckning. Helt gratis.",
  keywords: "bredband norrtälje, fiber norrtälje, internet norrtälje, tv paket norrtälje, telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Norrtälje',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Norrtälje","population":14616,"region":"Västra Götaland","fiberCoverage":74,"topProviders":["Telenor","Fibio"],"avgPrice":398}',
    'ai-local-keywords': 'bredband-norrtalje,fiber-norrtalje,internet-norrtalje',
    'ai-fiber-coverage': '74%',
    'ai-avg-price': '398-sek',
    'ai-top-providers': 'Telenor,Fibio'
  }
};

export default function NorrtäljeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Norrtälje<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Norrtälje – jämför priser och hastigheter gratis",
    cta: "Se Norrtälje-alternativ nu",
    cityName: "Norrtälje",
    region: "Västra Götaland",
    fiberCoverage: 74,
    avgPrice: 398,
    topProviders: ["Telenor","Fibio"],
    population: 14616
  };

  return <LandingPage localizedContent={localizedContent} />;
}