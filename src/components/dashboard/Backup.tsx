import { Sidebar } from './Sidebar';
import { Database, Download, Upload, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface BackupProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Backup({ onNavigate, onLogout }: BackupProps) {
  const backupHistory = [
    { id: '1', date: '2026-02-04 10:30', type: 'Manuel', size: '24.5 MB', status: 'success' },
    { id: '2', date: '2026-02-03 00:00', type: 'Automatique', size: '23.8 MB', status: 'success' },
    { id: '3', date: '2026-02-02 00:00', type: 'Automatique', size: '23.2 MB', status: 'success' },
    { id: '4', date: '2026-02-01 15:45', type: 'Manuel', size: '22.9 MB', status: 'success' },
    { id: '5', date: '2026-02-01 00:00', type: 'Automatique', size: '22.7 MB', status: 'success' },
    { id: '6', date: '2026-01-31 00:00', type: 'Automatique', size: '22.1 MB', status: 'success' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="backup" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Sauvegarde & Restauration</h1>
          <p className="text-sm text-gray-500 mt-1">Gérez vos sauvegardes et restaurations de données</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Action Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Create Backup */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Créer une Sauvegarde</h3>
                  <p className="text-sm text-gray-500">Backup manuel de l'APK et des données</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 space-y-2">
                <p className="text-sm text-gray-700">📦 Contenu de la sauvegarde :</p>
                <ul className="text-xs text-gray-600 space-y-1 ml-4">
                  <li>• Configuration de l'entreprise</li>
                  <li>• Templates et personnalisations</li>
                  <li>• Questions et formulaires</li>
                  <li>• Données des utilisateurs</li>
                  <li>• Historique des feedbacks</li>
                </ul>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
                <Download className="w-5 h-5" />
                Créer un Backup APK
              </button>
            </div>

            {/* Restore */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-md">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Restaurer</h3>
                  <p className="text-sm text-gray-500">Restaurer depuis une sauvegarde</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-yellow-700">
                    <p className="font-medium mb-1">⚠️ Attention</p>
                    <p>La restauration écrasera toutes les données actuelles. Cette action est irréversible.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Cliquez pour sélectionner un fichier</p>
                <p className="text-xs text-gray-400">Fichier .backup uniquement</p>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                <Upload className="w-5 h-5" />
                Restaurer
              </button>
            </div>
          </div>

          {/* Automatic Backup Settings */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sauvegarde Automatique</h3>
                  <p className="text-sm text-gray-500">Configuration des backups planifiés</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Fréquence</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Quotidienne</option>
                  <option>Hebdomadaire</option>
                  <option>Mensuelle</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Heure</label>
                <input
                  type="time"
                  defaultValue="00:00"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Rétention</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>7 jours</option>
                  <option>14 jours</option>
                  <option>30 jours</option>
                  <option>90 jours</option>
                </select>
              </div>
            </div>

            <button className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-medium hover:bg-indigo-100 transition-colors">
              Enregistrer la Configuration
            </button>
          </div>

          {/* Backup History */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Historique des Sauvegardes</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Heure</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {backupHistory.map((backup) => (
                    <tr key={backup.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <Clock className="w-4 h-4 text-gray-400" />
                          {backup.date}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-medium ${
                          backup.type === 'Manuel' 
                            ? 'bg-indigo-100 text-indigo-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {backup.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {backup.size}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Réussi
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Upload className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-500">Affichage de 1 à {backupHistory.length} sur {backupHistory.length} sauvegardes</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-semibold text-gray-900 mb-3">💡 Bonnes Pratiques</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Effectuez des sauvegardes manuelles avant toute modification importante</li>
              <li>• Conservez plusieurs versions de sauvegarde pour plus de sécurité</li>
              <li>• Testez vos restaurations périodiquement</li>
              <li>• Stockez les backups critiques sur un support externe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}