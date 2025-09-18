import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Södermalm Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Södermalm, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband södermalm, fiber södermalm, internet södermalm, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Södermalm',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Södermalm","type":"stadsdel","population":99000,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":470,"searchVolume":3200,"competition":"high"}',
    'ai-local-keywords': 'bredband-sodermalm,fiber-sodermalm,internet-sodermalm',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '470-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '3200',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SdermalmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Södermalm<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Södermalm-hem baserat på dina unika behov",
    cta: "Starta din Södermalm-analys",
    cityName: "Södermalm",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 470,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 99000,
    areaType: "stadsdel",
    searchVolume: 3200,
    competition: "high",
    localContent: {"localInfo":"Södermalm är ett stadsdel i Stockholm med cirka 99,000 invånare.","fiberInfo":"Fiber-täckningen i Södermalm ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Södermalm är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Södermalm ligger på cirka 470 SEK per månad.","seoKeywords":"bredband södermalm, fiber södermalm, internet södermalm, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}