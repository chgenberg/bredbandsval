'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Wifi, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const swedishCities = [
  // Stora städer
  { name: "Stockholm", population: 975551, slug: "stockholm", region: "Stockholm", fiberCoverage: 95 },
  { name: "Göteborg", population: 583056, slug: "goteborg", region: "Västra Götaland", fiberCoverage: 92 },
  { name: "Malmö", population: 347949, slug: "malmo", region: "Skåne", fiberCoverage: 88 },
  { name: "Uppsala", population: 230767, slug: "uppsala", region: "Uppsala", fiberCoverage: 90 },
  { name: "Västerås", population: 127799, slug: "vasteras", region: "Västmanland", fiberCoverage: 85 },
  { name: "Örebro", population: 126009, slug: "orebro", region: "Örebro", fiberCoverage: 83 },
  { name: "Linköping", population: 114291, slug: "linkoping", region: "Östergötland", fiberCoverage: 87 },
  { name: "Helsingborg", population: 113816, slug: "helsingborg", region: "Skåne", fiberCoverage: 84 },
  { name: "Jönköping", population: 112766, slug: "jonkoping", region: "Jönköping", fiberCoverage: 82 },
  { name: "Norrköping", population: 95618, slug: "norrkoping", region: "Östergötland", fiberCoverage: 86 },
  
  // Medelstora städer
  { name: "Lund", population: 94703, slug: "lund", region: "Skåne", fiberCoverage: 89 },
  { name: "Umeå", population: 89232, slug: "umea", region: "Västerbotten", fiberCoverage: 78 },
  { name: "Gävle", population: 77586, slug: "gavle", region: "Gävleborg", fiberCoverage: 80 },
  { name: "Borås", population: 73768, slug: "boras", region: "Västra Götaland", fiberCoverage: 84 },
  { name: "Eskilstuna", population: 69948, slug: "eskilstuna", region: "Södermanland", fiberCoverage: 82 },
  { name: "Halmstad", population: 67207, slug: "halmstad", region: "Halland", fiberCoverage: 86 },
  { name: "Växjö", population: 66275, slug: "vaxjo", region: "Kronoberg", fiberCoverage: 85 },
  { name: "Karlstad", population: 65856, slug: "karlstad", region: "Värmland", fiberCoverage: 81 },
  { name: "Sundsvall", population: 58807, slug: "sundsvall", region: "Västernorrland", fiberCoverage: 77 },
  { name: "Trollhättan", population: 58218, slug: "trollhattan", region: "Västra Götaland", fiberCoverage: 83 },
  
  // Mindre städer och orter
  { name: "Skellefteå", population: 57589, slug: "skelleftea", region: "Västerbotten", fiberCoverage: 76 },
  { name: "Kalmar", population: 42634, slug: "kalmar", region: "Kalmar", fiberCoverage: 83 },
  { name: "Kristianstad", population: 40145, slug: "kristianstad", region: "Skåne", fiberCoverage: 82 },
  { name: "Falun", population: 37291, slug: "falun", region: "Dalarna", fiberCoverage: 79 },
  { name: "Skövde", population: 36855, slug: "skovde", region: "Västra Götaland", fiberCoverage: 84 },
  { name: "Karlskrona", population: 36304, slug: "karlskrona", region: "Blekinge", fiberCoverage: 81 },
  { name: "Östersund", population: 31158, slug: "ostersund", region: "Jämtland", fiberCoverage: 75 },
  { name: "Åre", population: 3200, slug: "are", region: "Jämtland", fiberCoverage: 85 },
  { name: "Kiruna", population: 17002, slug: "kiruna", region: "Norrbotten", fiberCoverage: 72 },
];

export default function StaderPage() {
  const router = useRouter();

  const getCitySize = (population: number) => {
    if (population > 500000) return "Storstad";
    if (population > 100000) return "Större stad";
    if (population > 50000) return "Medelstad";
    return "Mindre ort";
  };

  const getFiberStatus = (coverage: number) => {
    if (coverage > 90) return { text: "Utmärkt fiber", color: "text-green-600" };
    if (coverage > 80) return { text: "Bra fiber", color: "text-blue-600" };
    return { text: "Växande fiber", color: "text-orange-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="hover:scale-105 transition-transform"
            >
              <Image
                src="/valle.png"
                alt="Valle AI"
                width={60}
                height={60}
                className="w-15 h-15 rounded-full"
              />
            </button>
            
            <div className="text-center">
              <h1 className="text-3xl font-light text-gray-900 tracking-wide">Svenska Städer</h1>
              <p className="text-gray-600">Bredband & TV-jämförelse för alla orter</p>
            </div>
            
            <div className="w-15"></div> {/* Spacer för centrering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <MapPin className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{swedishCities.length}+</p>
            <p className="text-sm text-gray-600">Städer & orter</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <Users className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">8M+</p>
            <p className="text-sm text-gray-600">Invånare täckta</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <Wifi className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">21+</p>
            <p className="text-sm text-gray-600">Leverantörer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <TrendingUp className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">85%</p>
            <p className="text-sm text-gray-600">Genomsnittlig fiber</p>
          </motion.div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {swedishCities.map((city, index) => {
            const fiberStatus = getFiberStatus(city.fiberCoverage);
            
            return (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <Link href={`/bredband-${city.slug}`}>
                  <div className="cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{city.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {getCitySize(city.population)}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Invånare:</span>
                        <span className="font-medium">{city.population.toLocaleString('sv-SE')}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Region:</span>
                        <span className="font-medium">{city.region}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Fiber:</span>
                        <span className={`font-medium ${fiberStatus.color}`}>
                          {city.fiberCoverage}% - {fiberStatus.text}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-[#101929] font-medium">
                        Jämför bredband i {city.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Saknar du din stad? Vi täcker hela Sverige med personliga AI-rekommendationer.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#101929] text-white rounded-xl hover:bg-[#1a2332] transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Hitta bredband för din adress
          </Link>
        </div>
      </div>
    </div>
  );
}
