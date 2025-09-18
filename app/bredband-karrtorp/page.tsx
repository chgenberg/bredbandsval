import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kärrtorp Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kärrtorp, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kärrtorp, fiber kärrtorp, internet kärrtorp, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kärrtorp',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kärrtorp","type":"stadsdel","population":4000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-karrtorp,fiber-karrtorp,internet-karrtorp',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function KrrtorpBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kärrtorp<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kärrtorp, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Kärrtorp-leverantörer",
    cityName: "Kärrtorp",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Kärrtorp är ett stadsdel i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Kärrtorp ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kärrtorp är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Kärrtorp ligger på cirka 425 SEK per månad.","seoKeywords":"bredband kärrtorp, fiber kärrtorp, internet kärrtorp, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}