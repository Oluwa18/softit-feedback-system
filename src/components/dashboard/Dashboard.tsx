import { Sidebar } from './Sidebar';
import { 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Star,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface DashboardProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Dashboard({ onNavigate, onLogout }: DashboardProps) {
  const stats = [
    {
      label: 'Total Feedbacks',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-indigo-400 to-indigo-500'
    },
    {
      label: 'Satisfaction Moyenne',
      value: '87.3%',
      change: '+5.2%',
      trend: 'up',
      icon: Star,
      color: 'from-purple-400 to-purple-500'
    },
    {
      label: 'Score NPS',
      value: '72',
      change: '+8.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-pink-400 to-pink-500'
    },
    {
      label: 'Utilisateurs Actifs',
      value: '1,245',
      change: '-2.3%',
      trend: 'down',
      icon: Users,
      color: 'from-emerald-400 to-emerald-500'
    }
  ];

  const monthlyData = [
    { month: 'Jan', feedbacks: 320, satisfaction: 85 },
    { month: 'Fév', feedbacks: 380, satisfaction: 82 },
    { month: 'Mar', feedbacks: 420, satisfaction: 88 },
    { month: 'Avr', feedbacks: 390, satisfaction: 86 },
    { month: 'Mai', feedbacks: 450, satisfaction: 89 },
    { month: 'Juin', feedbacks: 487, satisfaction: 87 }
  ];

  const satisfactionData = [
    { name: 'Très Satisfait', value: 654, color: '#10b981' },
    { name: 'Satisfait', value: 892, color: '#8b5cf6' },
    { name: 'Neutre', value: 234, color: '#f59e0b' },
    { name: 'Insatisfait', value: 67, color: '#ef4444' }
  ];

  const npsData = [
    { range: '0-6', count: 143, label: 'Détracteurs' },
    { range: '7-8', count: 567, label: 'Passifs' },
    { range: '9-10', count: 2137, label: 'Promoteurs' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
          <p className="text-sm text-gray-500 mt-1">Vue d'ensemble de vos feedbacks et statistiques</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown;
              
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className={`inline-flex items-center gap-1 text-xs font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendIcon className="w-3 h-3" />
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            {/* Monthly Feedbacks */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedbacks Mensuels</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Bar dataKey="feedbacks" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Satisfaction Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution Satisfaction</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            {/* Satisfaction Trend */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendance Satisfaction</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* NPS Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution NPS</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={npsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" stroke="#9ca3af" />
                  <YAxis type="category" dataKey="label" stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Feedback Table */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedbacks Récents</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Client</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Satisfaction</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Note</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">NPS</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '04 Fév 2026', client: 'Marie Dupont', satisfaction: 'Satisfait', note: 5, nps: 9, comment: 'Excellent service !' },
                    { date: '04 Fév 2026', client: 'Jean Martin', satisfaction: 'Très Satisfait', note: 5, nps: 10, comment: 'Parfait, rien à redire' },
                    { date: '03 Fév 2026', client: 'Sophie Bernard', satisfaction: 'Neutre', note: 3, nps: 7, comment: 'Peut mieux faire' },
                    { date: '03 Fév 2026', client: 'Pierre Dubois', satisfaction: 'Satisfait', note: 4, nps: 8, comment: 'Très bien dans l\'ensemble' },
                    { date: '02 Fév 2026', client: 'Claire Petit', satisfaction: 'Très Satisfait', note: 5, nps: 10, comment: 'Service impeccable' }
                  ].map((feedback, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-gray-600">{feedback.date}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{feedback.client}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium ${
                          feedback.satisfaction === 'Très Satisfait' ? 'bg-green-100 text-green-700' :
                          feedback.satisfaction === 'Satisfait' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {feedback.satisfaction}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < feedback.note ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium ${
                          feedback.nps >= 9 ? 'bg-green-100 text-green-700' :
                          feedback.nps >= 7 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {feedback.nps}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 max-w-xs truncate">{feedback.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}