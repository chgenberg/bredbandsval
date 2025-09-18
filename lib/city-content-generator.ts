// AI-Generated Content Factory för 200+ svenska städer
export interface CityData {
  name: string;
  population: number;
  region: string;
  fiberCoverage: number;
  topProviders: string[];
  avgPrice: number;
}

export const swedishCities: CityData[] = [
  { name: "Stockholm", population: 975551, region: "Stockholm", fiberCoverage: 95, topProviders: ["Telia", "Bahnhof", "Bredband2"], avgPrice: 450 },
  { name: "Göteborg", population: 583056, region: "Västra Götaland", fiberCoverage: 92, topProviders: ["Telia", "Comhem", "Bahnhof"], avgPrice: 420 },
  { name: "Malmö", population: 347949, region: "Skåne", fiberCoverage: 88, topProviders: ["Telia", "Comhem", "Tele2"], avgPrice: 410 },
  { name: "Uppsala", population: 230767, region: "Uppsala", fiberCoverage: 90, topProviders: ["Telia", "Bahnhof", "Fibio"], avgPrice: 380 },
  { name: "Västerås", population: 127799, region: "Västmanland", fiberCoverage: 85, topProviders: ["Telia", "Bredband2", "Fibio"], avgPrice: 360 },
  { name: "Örebro", population: 126009, region: "Örebro", fiberCoverage: 83, topProviders: ["Telia", "Telenor", "Bredband2"], avgPrice: 370 },
  { name: "Linköping", population: 114291, region: "Östergötland", fiberCoverage: 87, topProviders: ["Telia", "Bahnhof", "Fibio"], avgPrice: 375 },
  { name: "Helsingborg", population: 113816, region: "Skåne", fiberCoverage: 84, topProviders: ["Telia", "Comhem", "Tele2"], avgPrice: 395 },
  { name: "Jönköping", population: 112766, region: "Jönköping", fiberCoverage: 82, topProviders: ["Telia", "Telenor", "Bredband2"], avgPrice: 365 },
  { name: "Norrköping", population: 95618, region: "Östergötland", fiberCoverage: 86, topProviders: ["Telia", "Bahnhof", "Fibio"], avgPrice: 355 },
  // ... fortsätt för alla 200 städer
];

export class CityContentGenerator {
  
  // Generera lokaliserad hero-text för varje stad
  static generateHeroContent(city: CityData): {
    headline: string;
    subtext: string;
    cta: string;
    metaTitle: string;
    metaDescription: string;
  } {
    const templates = this.getTemplatesForCity(city);
    const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    return {
      headline: selectedTemplate.headline.replace('{city}', city.name),
      subtext: selectedTemplate.subtext.replace('{city}', city.name),
      cta: selectedTemplate.cta.replace('{city}', city.name),
      metaTitle: `Bästa Bredband ${city.name} 2025 - Jämför Priser & Hastigheter`,
      metaDescription: `Hitta bästa bredband i ${city.name}. Jämför ${city.topProviders.join(', ')} och fler leverantörer. AI-driven analys på 30 sekunder. Helt gratis.`
    };
  }

  private static getTemplatesForCity(city: CityData) {
    // Olika templates baserat på stadsstorlek och egenskaper
    if (city.population > 500000) {
      // Stora städer - fokus på val och konkurrens
      return [
        {
          headline: "{city}s mest kompletta<br/>bredband & TV-jämförelse",
          subtext: "Jämför alla leverantörer i {city} på sekunder – AI-driven analys helt gratis",
          cta: "Hitta bästa bredband i {city}"
        },
        {
          headline: "Bästa bredband i {city}<br/>enligt AI-analys 2025",
          subtext: "Personlig rekommendation för ditt {city}-hem baserat på dina behov",
          cta: "Starta din {city}-analys nu"
        }
      ];
    } else if (city.population > 100000) {
      // Medelstora städer - fokus på lokalitet
      return [
        {
          headline: "{city}s smartaste val för<br/>bredband & TV",
          subtext: "Lokala experter hjälper dig hitta perfekt bredband i {city} – gratis AI-analys",
          cta: "Jämför {city}-leverantörer nu"
        },
        {
          headline: "Bredband {city} 2025<br/>– AI-driven jämförelse",
          subtext: "Hitta bästa bredband för ditt {city}-hem på 30 sekunder",
          cta: "Få din {city}-rekommendation"
        }
      ];
    } else {
      // Mindre städer - fokus på tillgänglighet
      return [
        {
          headline: "Bredband i {city}<br/>– Alla tillgängliga alternativ",
          subtext: "Komplett guide till bredband i {city} – jämför priser och hastigheter gratis",
          cta: "Se {city}-alternativ nu"
        }
      ];
    }
  }

  // Generera lokal content för staden
  static generateLocalContent(city: CityData): {
    providerSection: string;
    fiberInfo: string;
    priceInfo: string;
    localTips: string;
  } {
    return {
      providerSection: `
        <h2>Bästa Bredband i ${city.name}</h2>
        <p>I ${city.name} finns ${city.topProviders.length} huvudleverantörer: ${city.topProviders.join(', ')}. 
        Genomsnittspriset ligger på ${city.avgPrice} kr/månad för 250 Mbit/s.</p>
      `,
      fiberInfo: `
        <h3>Fiber-tillgänglighet i ${city.name}</h3>
        <p>${city.fiberCoverage}% av hemmen i ${city.name} har tillgång till fiber. 
        ${city.fiberCoverage > 90 ? 'Utmärkt täckning' : city.fiberCoverage > 80 ? 'Bra täckning' : 'Växande täckning'} 
        gör ${city.name} till en attraktiv stad för snabbt bredband.</p>
      `,
      priceInfo: `
        <h3>Priser för Bredband i ${city.name}</h3>
        <p>Priserna i ${city.name} varierar från 299-899 kr/månad beroende på hastighet och leverantör. 
        ${city.avgPrice < 400 ? 'Relativt låga priser' : 'Standardpriser'} jämfört med riksgenomsnittet.</p>
      `,
      localTips: `
        <h3>Tips för ${city.name}-bor</h3>
        <p>Bästa tiden att beställa bredband i ${city.name} är ${this.getBestOrderTime(city)}. 
        Installation tar vanligtvis 1-2 veckor i ${city.region} regionen.</p>
      `
    };
  }

  private static getBestOrderTime(city: CityData): string {
    // Baserat på region och stadsstorlek
    if (city.population > 500000) return "måndag-onsdag för snabbast installation";
    return "vilken dag som helst - kort kötid";
  }

  // Generera komplett sida för en stad
  static async generateCityPage(city: CityData): Promise<string> {
    const heroContent = this.generateHeroContent(city);
    const localContent = this.generateLocalContent(city);
    
    // AI-genererar ytterligare innehåll
    const aiContent = await this.generateAIContent(city);
    
    return `
import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${heroContent.metaTitle}",
  description: "${heroContent.metaDescription}",
  other: {
    'geo.region': 'SE-${this.getRegionCode(city.region)}',
    'geo.placename': '${city.name}',
    'ai-local-optimization': 'true',
    'ai-city-data': '${JSON.stringify(city)}'
  }
};

export default function ${city.name}Page() {
  const localizedContent = {
    headline: "${heroContent.headline}",
    subtext: "${heroContent.subtext}", 
    cta: "${heroContent.cta}",
    localInfo: ${JSON.stringify(localContent)},
    cityData: ${JSON.stringify(city)}
  };

  return <LandingPage localizedContent={localizedContent} />;
}
    `.trim();
  }

  private static async generateAIContent(city: CityData): Promise<string> {
    // Här skulle vi använda AI för att generera unikt innehåll
    // För nu returnerar vi template-baserat innehåll
    return `AI-generated content for ${city.name}`;
  }

  private static getRegionCode(region: string): string {
    const regionCodes: Record<string, string> = {
      "Stockholm": "AB",
      "Västra Götaland": "O", 
      "Skåne": "M",
      "Uppsala": "C"
    };
    return regionCodes[region] || "SE";
  }

  // Batch-generera alla sidor
  static async generateAllCityPages(): Promise<void> {
    console.log('🏭 Starting AI Content Factory for 200+ cities...');
    
    for (const city of swedishCities.slice(0, 20)) { // Start med top 20
      try {
        const pageContent = await this.generateCityPage(city);
        const fileName = `/app/bredband-${city.name.toLowerCase()}/page.tsx`;
        
        // Här skulle vi skriva filen (behöver file system access)
        console.log(`✅ Generated page for ${city.name}`);
        
        // Vänta lite mellan genereringar för att inte överbelasta
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`❌ Failed to generate page for ${city.name}:`, error);
      }
    }
    
    console.log('🎉 AI Content Factory complete!');
  }
}

// Keyword variations per stad
export const generateCityKeywords = (cityName: string): string[] => [
  `bredband ${cityName.toLowerCase()}`,
  `bästa bredband ${cityName.toLowerCase()}`,
  `fiber ${cityName.toLowerCase()}`,
  `internet ${cityName.toLowerCase()}`,
  `bredband ${cityName.toLowerCase()} 2025`,
  `billigast bredband ${cityName.toLowerCase()}`,
  `snabbaste internet ${cityName.toLowerCase()}`,
  `bredband utan bindning ${cityName.toLowerCase()}`,
  `tv paket ${cityName.toLowerCase()}`,
  `bredband jämförelse ${cityName.toLowerCase()}`
];
