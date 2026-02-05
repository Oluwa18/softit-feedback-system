import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Calendar, Clock, Infinity, CheckCircle2 } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface ProgrammeProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Programme({ onNavigate, onLogout }: ProgrammeProps) {
  const [programType, setProgramType] = useState<'permanent' | 'period'>('permanent');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="templates" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Programme</h1>
          <p className="text-sm text-gray-500 mt-1">Configurez la période d'activation de votre template</p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-4xl">
          <div className="space-y-6">
            {/* Active Template Info */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Template Actif</h3>
                  <p className="text-sm text-gray-600">Template par défaut SOFT-IT - Violet Pastel</p>
                  <p className="text-xs text-gray-500 mt-2">Dernière modification: 04 Février 2026, 14:30</p>
                </div>
              </div>
            </div>

            {/* Program Type Selection */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
              <h3 className="font-semibold text-gray-900">Type de Programme</h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Permanent Option */}
                <button
                  onClick={() => setProgramType('permanent')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    programType === 'permanent'
                      ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    programType === 'permanent'
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-500'
                      : 'bg-gray-100'
                  }`}>
                    <Infinity className={`w-6 h-6 ${programType === 'permanent' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <h4 className={`font-semibold mb-1 ${programType === 'permanent' ? 'text-indigo-900' : 'text-gray-900'}`}>
                    Permanent
                  </h4>
                  <p className="text-sm text-gray-600">
                    Active en continu sans limite de temps
                  </p>
                </button>

                {/* Period Option */}
                <button
                  onClick={() => setProgramType('period')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    programType === 'period'
                      ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    programType === 'period'
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-500'
                      : 'bg-gray-100'
                  }`}>
                    <Calendar className={`w-6 h-6 ${programType === 'period' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <h4 className={`font-semibold mb-1 ${programType === 'period' ? 'text-indigo-900' : 'text-gray-900'}`}>
                    Période Définie
                  </h4>
                  <p className="text-sm text-gray-600">
                    Active sur une plage de dates spécifique
                  </p>
                </button>
              </div>
            </div>

            {/* Period Configuration */}
            {programType === 'period' && (
              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 animate-fade-in">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  Configuration de la Période
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Date de Début</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Date de Fin</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-sm text-blue-700">
                    💡 Le template sera automatiquement activé et désactivé aux dates spécifiées
                  </p>
                </div>
              </div>
            )}

            {/* Schedule Overview */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
              <h3 className="font-semibold text-gray-900">Planification Active</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Template Violet Pastel</p>
                      <p className="text-sm text-gray-600">
                        {programType === 'permanent' ? (
                          'Actif en permanence'
                        ) : (
                          startDate && endDate ? (
                            `${new Date(startDate).toLocaleDateString('fr-FR')} - ${new Date(endDate).toLocaleDateString('fr-FR')}`
                          ) : (
                            'Dates non définies'
                          )
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-lg">
                    Actif
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                Annuler
              </button>
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
                Enregistrer la Configuration
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="font-semibold text-gray-900 mb-3">ℹ️ Informations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Un seul template peut être actif à la fois</li>
                <li>• Les templates programmés s'activent automatiquement</li>
                <li>• Les modifications sont synchronisées en temps réel sur les tablettes</li>
                <li>• Vous pouvez programmer plusieurs templates pour différentes périodes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}