import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Guldheden Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Guldheden, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband guldheden, fiber guldheden, internet guldheden, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Guldheden',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Guldheden","type":"stadsdel","population":7000,"region":"Västra Götaland","fiberCoverage":90,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-guldheden,fiber-guldheden,internet-guldheden',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function GuldhedenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Guldheden<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Guldheden, Göteborg. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Guldheden-leverantörer",
    cityName: "Guldheden",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 90,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 7000,
    areaType: "stadsdel",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Guldheden är ett stadsdel i Göteborg med cirka 7,000 invånare.","fiberInfo":"Fiber-täckningen i Guldheden ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Guldheden är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Guldheden ligger på cirka 425 SEK per månad.","seoKeywords":"bredband guldheden, fiber guldheden, internet guldheden, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}