import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Slussen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Slussen, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband slussen, fiber slussen, internet slussen, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Slussen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Slussen","type":"område","population":1500,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":465,"searchVolume":2200,"competition":"high"}',
    'ai-local-keywords': 'bredband-slussen,fiber-slussen,internet-slussen',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SlussenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Slussen<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Slussen, Stockholm. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Slussen",
    cityName: "Slussen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 1500,
    areaType: "område",
    searchVolume: 2200,
    competition: "high",
    localContent: {"localInfo":"Slussen är ett område i Stockholm med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Slussen ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Slussen är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Slussen ligger på cirka 465 SEK per månad.","seoKeywords":"bredband slussen, fiber slussen, internet slussen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}