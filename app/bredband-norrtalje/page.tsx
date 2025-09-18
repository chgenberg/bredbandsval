import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Norrtälje Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Norrtälje, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 81% fiber-täckning. AI-analys gratis.",
  keywords: "bredband norrtälje, fiber norrtälje, internet norrtälje, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Norrtälje',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Norrtälje","type":"kommun","population":60000,"region":"Stockholm","fiberCoverage":81,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":1500,"competition":"medium"}',
    'ai-local-keywords': 'bredband-norrtalje,fiber-norrtalje,internet-norrtalje',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1500',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function NorrtljeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Norrtälje<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Norrtälje-boende. 81% fiber-täckning",
    cta: "Få din Norrtälje-rekommendation",
    cityName: "Norrtälje",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 81,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 60000,
    areaType: "kommun",
    searchVolume: 1500,
    competition: "medium",
    localContent: {"localInfo":"Norrtälje är ett kommun i Stockholm med cirka 60,000 invånare.","fiberInfo":"Fiber-täckningen i Norrtälje ligger på 81%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Norrtälje är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Norrtälje ligger på cirka 395 SEK per månad.","seoKeywords":"bredband norrtälje, fiber norrtälje, internet norrtälje, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}