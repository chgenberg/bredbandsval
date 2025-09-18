'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Wifi, TrendingUp, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { allAreas, getCitySize, getFiberStatus, getAreaType, totalPopulation, averageFiberCoverage, totalProviders } from '@/lib/city-data';

export default function StaderPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Filtrera och sortera områden
  const filteredAreas = useMemo(() => {
    return allAreas
      .filter(area => {
        const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            area.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (area.parentCity && area.parentCity.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesRegion = selectedRegion === 'all' || area.region === selectedRegion;
        const matchesType = selectedType === 'all' || area.type === selectedType;
        
        return matchesSearch && matchesRegion && matchesType;
      })
      .sort((a, b) => {
        // Sortera: städer först (efter population), sedan lokala områden (efter sökvolym)
        if (a.type === 'city' && b.type === 'area') return -1;
        if (a.type === 'area' && b.type === 'city') return 1;
        
        if (a.type === 'city' && b.type === 'city') {
          return b.population - a.population;
        }
        
        if (a.type === 'area' && b.type === 'area') {
          return (b.searchVolume || 0) - (a.searchVolume || 0);
        }
        
        return 0;
      });
  }, [searchTerm, selectedRegion, selectedType]);

  // Unika regioner för filter
  const regions = useMemo(() => {
    return [...new Set(allAreas.map(area => area.region))].sort();
  }, []);

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
              <h1 className="text-3xl font-light text-gray-900 tracking-wide">Svenska Städer & Områden</h1>
              <p className="text-gray-600">Bredband & TV-jämförelse för alla orter och lokala områden</p>
            </div>
            
            <div className="w-15"></div> {/* Spacer för centrering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <MapPin className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{allAreas.length}</p>
            <p className="text-sm text-gray-600">Städer & områden</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <Users className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{Math.round(totalPopulation / 1000000 * 10) / 10}M</p>
            <p className="text-sm text-gray-600">Invånare täckta</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <Wifi className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{totalProviders}+</p>
            <p className="text-sm text-gray-600">Leverantörer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <TrendingUp className="w-8 h-8 text-[#101929] mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{averageFiberCoverage}%</p>
            <p className="text-sm text-gray-600">Genomsnittlig fiber</p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Sök stad eller område..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#101929] focus:border-transparent"
              />
            </div>
            
            {/* Region Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#101929] focus:border-transparent bg-white appearance-none cursor-pointer"
              >
                <option value="all">Alla regioner</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#101929] focus:border-transparent bg-white appearance-none cursor-pointer"
              >
                <option value="all">Alla typer</option>
                <option value="city">Städer</option>
                <option value="area">Lokala områden</option>
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Visar {filteredAreas.length} av {allAreas.length} platser
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAreas.map((area, index) => {
            const fiberStatus = getFiberStatus(area.fiberCoverage);
            const areaType = getAreaType(area.type || 'city');
            
            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.01, 2) }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <Link href={`/bredband-${area.slug}`}>
                  <div className="cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{area.name}</h3>
                      <div className="flex gap-1">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {area.type === 'city' ? getCitySize(area.population) : areaType}
                        </span>
                        {area.competition && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            area.competition === 'high' ? 'bg-red-100 text-red-600' :
                            area.competition === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            {area.competition === 'high' ? 'Hög' : 
                             area.competition === 'medium' ? 'Medium' : 'Låg'} SEO
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Invånare:</span>
                        <span className="font-medium">{area.population.toLocaleString('sv-SE')}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">
                          {area.parentCity ? `${area.parentCity}, ${area.region}` : area.region}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Fiber:</span>
                        <span className={`font-medium ${fiberStatus.color}`}>
                          {area.fiberCoverage}% - {fiberStatus.text}
                        </span>
                      </div>
                      
                      {area.searchVolume && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Sökningar/månad:</span>
                          <span className="font-medium text-blue-600">{area.searchVolume.toLocaleString('sv-SE')}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-[#101929] font-medium">
                        Jämför bredband i {area.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {/* No results message */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Inga resultat hittades</h3>
            <p className="text-gray-600 mb-4">Prova att ändra dina sökkriterier eller filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedType('all');
              }}
              className="px-4 py-2 bg-[#101929] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
            >
              Rensa alla filter
            </button>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Saknar du din stad eller område? Vi täcker hela Sverige med personliga AI-rekommendationer.
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
