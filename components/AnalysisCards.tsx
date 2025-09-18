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
      const icon = getIconForSection(title);
      
      // Skip "Nästa steg" sections entirely
      if (title.toLowerCase().includes('nästa steg') || icon === null) {
        continue;
      }
      
      sections.push({
        title,
        content,
        icon
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
    if (lower.includes('alternativ')) return TrendingUp;
    if (lower.includes('praktisk') || lower.includes('fördelar')) return CheckCircle;
    // Skip "Nästa steg" sections entirely
    return null;
  };
  
  const getCardColor = (title: string, index: number) => {
    const lower = title.toLowerCase();
    if (lower.includes('rekommendation')) return 'bg-[#101929] text-white';
    return 'bg-white border border-gray-200';
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
                  <Icon className={`w-5 h-5 ${
                    isMainRecommendation 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`} strokeWidth={1.5} />
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
