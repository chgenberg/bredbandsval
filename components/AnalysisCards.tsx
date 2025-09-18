'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, CheckCircle, Wifi, Tv, ArrowRight, DollarSign } from 'lucide-react';

interface AnalysisCardsProps {
  aiRecommendation: string;
}

export function AnalysisCards({ aiRecommendation }: AnalysisCardsProps) {
  // Parse the HTML content to extract different sections
  const parseAnalysis = (html: string) => {
    const sections = [];
    
    // Extract content between <p><strong>Title:</strong> Content</p>
    const regex = /<p><strong>([^:]+):<\/strong>\s*([^<]+)<\/p>/g;
    let match;
    
    while ((match = regex.exec(html)) !== null) {
      const title = match[1].trim();
      const content = match[2].trim();
      
      sections.push({
        title,
        content,
        icon: getIconForSection(title)
      });
    }
    
    return sections;
  };
  
  const getIconForSection = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('rekommendation') || lower.includes('min ')) return Star;
    if (lower.includes('varför') || lower.includes('passar')) return CheckCircle;
    if (lower.includes('sparar') || lower.includes('totalkostnad') || lower.includes('kostnad')) return DollarSign;
    if (lower.includes('bredband') || lower.includes('hastighet')) return Wifi;
    if (lower.includes('tv') || lower.includes('kanaler')) return Tv;
    if (lower.includes('alternativ') || lower.includes('nästa')) return ArrowRight;
    if (lower.includes('praktisk') || lower.includes('fördelar')) return TrendingUp;
    return CheckCircle;
  };
  
  const getCardColor = (title: string, index: number) => {
    const lower = title.toLowerCase();
    if (lower.includes('rekommendation')) return 'from-blue-500 to-blue-600 text-white';
    if (lower.includes('sparar') || lower.includes('kostnad')) return 'from-green-50 to-green-100 border border-green-200';
    if (lower.includes('bredband')) return 'from-blue-50 to-blue-100 border border-blue-200';
    if (lower.includes('tv')) return 'from-purple-50 to-purple-100 border border-purple-200';
    if (lower.includes('alternativ')) return 'from-orange-50 to-orange-100 border border-orange-200';
    return 'from-gray-50 to-gray-100 border border-gray-200';
  };
  
  const sections = parseAnalysis(aiRecommendation);
  
  if (sections.length === 0) {
    // Fallback to original display if parsing fails
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Valle's analys</h3>
            <div 
              className="ai-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aiRecommendation }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Valle's personliga analys</h3>
        <p className="text-gray-600">Baserat på dina svar och behov</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isMainRecommendation = section.title.toLowerCase().includes('rekommendation');
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-2xl p-6 shadow-sm transition-all hover:shadow-md
                ${isMainRecommendation ? 'md:col-span-2' : ''}
                ${getCardColor(section.title, index)}
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                  ${isMainRecommendation 
                    ? 'bg-white/20' 
                    : 'bg-white shadow-sm'
                  }
                `}>
                  <Icon className={`w-6 h-6 ${
                    isMainRecommendation 
                      ? 'text-white' 
                      : section.title.toLowerCase().includes('sparar') 
                      ? 'text-green-600'
                      : section.title.toLowerCase().includes('bredband')
                      ? 'text-blue-600'
                      : section.title.toLowerCase().includes('tv')
                      ? 'text-purple-600'
                      : 'text-gray-600'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h4 className={`
                    text-lg font-semibold mb-3
                    ${isMainRecommendation ? 'text-white' : 'text-gray-900'}
                  `}>
                    {section.title}
                  </h4>
                  <p className={`
                    leading-relaxed
                    ${isMainRecommendation ? 'text-white/90' : 'text-gray-700'}
                  `}>
                    {section.content}
                  </p>
                </div>
              </div>
              
              {isMainRecommendation && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Valle's val
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
