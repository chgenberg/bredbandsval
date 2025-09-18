'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart, Clock, TrendingUp, Monitor, MousePointer, ShoppingBag, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AIAgentVisit {
  timestamp: Date;
  agentType: string;
  userAgent: string;
  ip: string;
  path: string;
  actions: string[];
  sessionDuration?: number;
  completedOrder?: boolean;
}

export default function AIAgentDashboard() {
  const router = useRouter();
  const [visits, setVisits] = useState<AIAgentVisit[]>([]);
  const [stats, setStats] = useState({
    total_visits: 0,
    today_visits: 0,
    chatgpt_visits: 0,
    completed_orders: 0,
    conversion_rate: 0
  });

  useEffect(() => {
    // Load data from localStorage and API
    const loadData = () => {
      const stored = JSON.parse(localStorage.getItem('ai_agent_visits') || '[]');
      setVisits(stored);
      
      // Calculate stats
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const todayVisits = stored.filter((v: any) => new Date(v.timestamp) >= today);
      const chatgptVisits = stored.filter((v: any) => v.agentType === 'chatgpt');
      const completedOrders = stored.filter((v: any) => v.completedOrder);
      
      setStats({
        total_visits: stored.length,
        today_visits: todayVisits.length,
        chatgpt_visits: chatgptVisits.length,
        completed_orders: completedOrders.length,
        conversion_rate: stored.length > 0 ? (completedOrders.length / stored.length) * 100 : 0
      });
    };

    loadData();
    
    // Refresh every 30 seconds
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

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
          <h1 className="text-3xl font-light text-gray-900 tracking-wide mb-2">AI Agent Dashboard</h1>
          <p className="text-gray-600">Spåra AI-agent aktivitet på Bredbandsval</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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
                  boxShadow: ['0 0 0 0 rgba(16, 25, 41, 0.4)', '0 0 0 10px rgba(16, 25, 41, 0)', '0 0 0 0 rgba(16, 25, 41, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center"
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Visits</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{stats.total_visits}</p>
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
                  scale: [1, 1.05, 1],
                  backgroundColor: ['#10B981', '#059669', '#10B981']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center"
              >
                <BarChart className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Idag</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{stats.today_visits}</p>
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
                  scale: [1, 1.08, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center"
              >
                <Monitor className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">ChatGPT</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{stats.chatgpt_visits}</p>
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
                  backgroundColor: ['#F97316', '#EA580C', '#F97316']
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center"
              >
                <ShoppingBag className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Beställningar</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{stats.completed_orders}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.12, 1],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="w-12 h-12 bg-[#101929] rounded-xl flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-600">Konvertering</p>
                <p className="text-3xl font-light text-gray-900 tracking-wide">{stats.conversion_rate.toFixed(1)}%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Visits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-light text-gray-900 tracking-wide">Senaste AI-agent besök</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agent Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Path
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {visits.slice(-20).reverse().map((visit, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(visit.timestamp).toLocaleString('sv-SE')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        visit.agentType === 'chatgpt' ? 'bg-green-100 text-green-800' :
                        visit.agentType === 'claude' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {visit.agentType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {visit.path}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-xs truncate">
                        {visit.actions.slice(-3).join(' → ') || 'No actions yet'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {visit.sessionDuration ? formatDuration(visit.sessionDuration) : 'Active'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {visit.completedOrder ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Completed Order
                        </span>
                      ) : visit.actions.includes('reached_order') ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          At Order Page
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Browsing
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {visits.length === 0 && (
            <div className="p-12 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Users className="w-8 h-8 text-gray-400" />
              </motion.div>
              <p className="text-gray-600 font-medium">Inga AI-agent besök ännu</p>
              <p className="text-sm text-gray-400 mt-2">AI-agenter kommer att visas här när de besöker er sajt</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
