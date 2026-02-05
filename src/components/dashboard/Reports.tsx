import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Download, Filter, Calendar, FileSpreadsheet, FileText, Star, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface ReportsProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Reports({ onNavigate, onLogout }: ReportsProps) {
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-02-04');
  const [filterType, setFilterType] = useState('all');

  const weeklyData = [
    { week: 'S1', feedbacks: 145, avg: 8.2 },
    { week: 'S2', feedbacks: 167, avg: 8.5 },
    { week: 'S3', feedbacks: 189, avg: 8.7 },
    { week: 'S4', feedbacks: 203, avg: 8.4 },
    { week: 'S5', feedbacks: 178, avg: 8.9 }
  ];

  const responses = [
    { id: 1, date: '2026-02-04 15:30', client: 'Marie Dupont', email: 'marie.d@email.com', satisfaction: 'Très Satisfait', note: 5, nps: 9, comment: 'Excellent service, équipe très professionnelle' },
    { id: 2, date: '2026-02-04 14:45', client: 'Jean Martin', email: 'j.martin@email.com', satisfaction: 'Satisfait', note: 4, nps: 8, comment: 'Bonne expérience globale' },
    { id: 3, date: '2026-02-04 13:20', client: 'Sophie Bernard', email: 'sophie.b@email.com', satisfaction: 'Très Satisfait', note: 5, nps: 10, comment: 'Parfait, rien à redire !' },
    { id: 4, date: '2026-02-03 18:15', client: 'Pierre Dubois', email: 'p.dubois@email.com', satisfaction: 'Neutre', note: 3, nps: 7, comment: 'Correct mais peut mieux faire' },
    { id: 5, date: '2026-02-03 16:40', client: 'Claire Petit', email: 'claire.p@email.com', satisfaction: 'Satisfait', note: 4, nps: 8, comment: 'Très bien' },
    { id: 6, date: '2026-02-03 15:10', client: 'Luc Moreau', email: 'luc.m@email.com', satisfaction: 'Très Satisfait', note: 5, nps: 9, comment: 'Service impeccable' },
    { id: 7, date: '2026-02-02 17:25', client: 'Emma Laurent', email: 'e.laurent@email.com', satisfaction: 'Satisfait', note: 4, nps: 8, comment: 'Bonne prestation' },
    { id: 8, date: '2026-02-02 14:55', client: 'Thomas Roux', email: 't.roux@email.com', satisfaction: 'Très Satisfait', note: 5, nps: 10, comment: 'Excellent ! Je recommande' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="reports" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Rapports</h1>
              <p className="text-sm text-gray-500 mt-1">Analysez vos feedbacks et exportez vos données</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm">
                <FileSpreadsheet className="w-4 h-4" />
                Export Excel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
                <FileText className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Filter className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">Filtres</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <span className="text-gray-400">à</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="all">Tous les feedbacks</option>
                <option value="satisfied">Satisfaits uniquement</option>
                <option value="neutral">Neutres uniquement</option>
                <option value="unsatisfied">Insatisfaits uniquement</option>
              </select>

              <button className="ml-auto px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                Appliquer
              </button>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            {/* Weekly Feedbacks */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Évolution Hebdomadaire</h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Bar dataKey="feedbacks" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Average Rating Trend */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Note Moyenne</h3>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 10]} />
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
                    dataKey="avg" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Responses Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Toutes les Réponses</h3>
                <span className="text-sm text-gray-500">{responses.length} résultats</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Heure</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">NPS</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Commentaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {responses.map((response) => (
                    <tr key={response.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-sm text-gray-600 whitespace-nowrap">{response.date}</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">{response.client}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{response.email}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
                          response.satisfaction === 'Très Satisfait' ? 'bg-green-100 text-green-700' :
                          response.satisfaction === 'Satisfait' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {response.satisfaction}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < response.note ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium ${
                          response.nps >= 9 ? 'bg-green-100 text-green-700' :
                          response.nps >= 7 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {response.nps}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600 max-w-xs truncate">{response.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-500">Affichage de 1 à {responses.length} sur {responses.length} résultats</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                  Précédent
                </button>
                <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm">
                  1
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}