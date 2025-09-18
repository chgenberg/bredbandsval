'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, TrendingUp, Clock, Zap, Target, Brain, 
  BarChart3, PieChart, Activity, AlertTriangle 
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AIAnalyticsDashboard() {
  const router = useRouter();
  const [metrics, setMetrics] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>({});
  const [timeRange, setTimeRange] = useState('24h');

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, [timeRange]);

  const fetchMetrics = async () => {
    try {
      const response = await fetch(`/api/ai-agent-metrics?limit=100`);
      const data = await response.json();
      setMetrics(data.metrics || []);
      setSummary(data.summary || {});
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    }
  };

  const getConversionFunnel = () => {
    const steps = {
      visited: metrics.length,
      started_form: metrics.filter(m => m.actions?.includes('clicked_select_both_services')).length,
      completed_form: metrics.filter(m => m.actions?.includes('completed_form')).length,
      reached_order: metrics.filter(m => m.actions?.includes('reached_order')).length,
      completed_order: metrics.filter(m => m.actions?.includes('completed_order')).length
    };
    
    return Object.entries(steps).map(([step, count]) => ({
      step: step.replace('_', ' ').toUpperCase(),
      count,
      percentage: steps.visited > 0 ? (count / steps.visited) * 100 : 0
    }));
  };

  const getAgentTypeDistribution = () => {
    const types: Record<string, number> = {};
    metrics.forEach(m => {
      types[m.agentType] = (types[m.agentType] || 0) + 1;
    });
    return Object.entries(types).map(([type, count]) => ({ type, count }));
  };

  const getPerformanceInsights = () => {
    const avgCompletionTime = metrics.reduce((acc, m) => 
      acc + (m.performance?.formCompletionTime || 0), 0) / metrics.length;
    
    const fastAgents = metrics.filter(m => 
      (m.performance?.formCompletionTime || 0) < 10000).length;
    
    return {
      avgCompletionTime: avgCompletionTime / 1000, // Convert to seconds
      fastAgents,
      slowAgents: metrics.length - fastAgents,
      efficiency: metrics.length > 0 ? (fastAgents / metrics.length) * 100 : 0
    };
  };

  const conversionFunnel = getConversionFunnel();
  const agentTypes = getAgentTypeDistribution();
  const performance = getPerformanceInsights();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header med Valle */}
        <div className="text-center mb-12">
          <button
            onClick={() => router.push('/')}
            className="hover:scale-105 transition-transform mb-6"
          >
            <Image
              src="/valle.png"
              alt="Valle AI"
              width={60}
              height={60}
              className="w-15 h-15 rounded-full mx-auto"
            />
          </button>
          <h1 className="text-3xl font-light text-gray-900 tracking-wide mb-2">AI Agent Analytics</h1>
          <p className="text-gray-600">Avancerad analys av AI-agent beteende och optimering</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  backgroundColor: ['#101929', '#1a2332', '#101929']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 bg-[#101929] rounded-xl flex items-center justify-center"
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Totala sessioner</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{summary.total_sessions || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  backgroundColor: ['#10B981', '#059669', '#10B981']
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Genomsnittlig tid</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">
                  {performance.avgCompletionTime.toFixed(1)}s
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.12, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Effektivitet</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{performance.efficiency.toFixed(1)}%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  y: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-[#101929] rounded-xl flex items-center justify-center"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Mest aktiv</p>
                <p className="text-2xl font-light text-gray-900 tracking-wide">{summary.most_common_agent || 'N/A'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conversion Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-light text-gray-900 tracking-wide mb-6 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-[#101929] rounded-lg flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 text-white" />
              </motion.div>
              Konverteringstratt
            </h3>
            <div className="space-y-3">
              {conversionFunnel.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{step.step}</span>
                    <span className="text-sm text-gray-500">{step.count} ({step.percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${step.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-[#101929] h-3 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Agent Type Distribution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-light text-gray-900 tracking-wide mb-6 flex items-center gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
              >
                <PieChart className="w-5 h-5 text-white" />
              </motion.div>
              Agent-typer
            </h3>
            <div className="space-y-3">
              {agentTypes.map((agent, index) => {
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
                const percentage = metrics.length > 0 ? (agent.count / metrics.length) * 100 : 0;
                
                return (
                  <div key={agent.type} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`} />
                    <span className="text-sm font-medium text-gray-700 flex-1">
                      {agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {agent.count} ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-xl font-light text-gray-900 tracking-wide flex items-center gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  backgroundColor: ['#10B981', '#059669', '#10B981']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"
              >
                <Activity className="w-5 h-5 text-white" />
              </motion.div>
              Senaste AI-agent aktivitet
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Session</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Insights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {metrics.slice(-10).reverse().map((metric, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">{metric.sessionId}</div>
                        <div className="text-gray-500">
                          {new Date(metric.serverTimestamp).toLocaleString('sv-SE')}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        metric.agentType === 'chatgpt' ? 'bg-green-100 text-green-800' :
                        metric.agentType === 'claude' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {metric.agentType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>
                        <div className="text-gray-900">
                          Form: {((metric.performance?.formCompletionTime || 0) / 1000).toFixed(1)}s
                        </div>
                        <div className="text-gray-500">
                          Load: {((metric.performance?.pageLoadTime || 0) / 1000).toFixed(1)}s
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="max-w-xs">
                        <div className="text-gray-900 font-medium">
                          {metric.actions?.length || 0} actions
                        </div>
                        <div className="text-gray-500 text-xs truncate">
                          {metric.actions?.slice(-2).join(' → ') || 'No actions'}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {metric.performance?.formCompletionTime < 5000 ? (
                        <span className="text-green-600 font-medium">Very Fast</span>
                      ) : metric.performance?.formCompletionTime < 15000 ? (
                        <span className="text-yellow-600 font-medium">Normal</span>
                      ) : (
                        <span className="text-red-600 font-medium">Slow</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optimization Recommendations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-light text-gray-900 tracking-wide mb-6 flex items-center gap-3">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center"
            >
              <AlertTriangle className="w-5 h-5 text-white" />
            </motion.div>
            AI Optimeringsrekommendationer
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Performance Optimizations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {performance.efficiency > 80 ? '✅' : '⚠️'} Agent efficiency: {performance.efficiency.toFixed(1)}%</li>
                <li>• {performance.avgCompletionTime < 10 ? '✅' : '⚠️'} Avg completion time: {performance.avgCompletionTime.toFixed(1)}s</li>
                <li>• {summary.total_sessions > 10 ? '✅' : '📈'} Session volume: {summary.total_sessions} total</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Suggested Improvements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Add more data-ai-* attributes to form elements</li>
                <li>• Implement direct API shortcuts for common flows</li>
                <li>• Optimize form validation for faster completion</li>
                <li>• Add structured data for better AI understanding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
