import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rinkeby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Rinkeby. Jämför Tele2, Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband rinkeby, fiber rinkeby, internet rinkeby, tv paket rinkeby, tele2 telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rinkeby',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Rinkeby","population":16530,"region":"Västerbotten","fiberCoverage":82,"topProviders":["Tele2","Telia","Telenor"],"avgPrice":419}',
    'ai-local-keywords': 'bredband-rinkeby,fiber-rinkeby,internet-rinkeby',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '419-sek',
    'ai-top-providers': 'Tele2,Telia,Telenor'
  }
};

export default function RinkebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rinkeby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Rinkeby – jämför priser och hastigheter gratis",
    cta: "Se Rinkeby-alternativ nu",
    cityName: "Rinkeby",
    region: "Västerbotten",
    fiberCoverage: 82,
    avgPrice: 419,
    topProviders: ["Tele2","Telia","Telenor"],
    population: 16530
  };

  return <LandingPage localizedContent={localizedContent} />;
}