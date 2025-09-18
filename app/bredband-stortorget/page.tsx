import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stortorget Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Stortorget, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband stortorget, fiber stortorget, internet stortorget, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stortorget',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Stortorget","type":"område","population":500,"region":"Skåne","fiberCoverage":93,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":440,"searchVolume":1200,"competition":"high"}',
    'ai-local-keywords': 'bredband-stortorget,fiber-stortorget,internet-stortorget',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function StortorgetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Stortorget<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Stortorget, Malmö. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Stortorget",
    cityName: "Stortorget",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 500,
    areaType: "område",
    searchVolume: 1200,
    competition: "high",
    localContent: {"localInfo":"Stortorget är ett område i Malmö med cirka 500 invånare.","fiberInfo":"Fiber-täckningen i Stortorget ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Stortorget är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Stortorget ligger på cirka 440 SEK per månad.","seoKeywords":"bredband stortorget, fiber stortorget, internet stortorget, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}