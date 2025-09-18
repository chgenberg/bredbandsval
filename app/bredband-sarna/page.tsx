import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Särna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Särna. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband särna, fiber särna, internet särna, tv paket särna, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Särna',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Särna","population":26692,"region":"Västerbotten","fiberCoverage":71,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":336}',
    'ai-local-keywords': 'bredband-sarna,fiber-sarna,internet-sarna',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '336-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function SärnaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Särna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Särna – jämför priser och hastigheter gratis",
    cta: "Se Särna-alternativ nu",
    cityName: "Särna",
    region: "Västerbotten",
    fiberCoverage: 71,
    avgPrice: 336,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 26692
  };

  return <LandingPage localizedContent={localizedContent} />;
}