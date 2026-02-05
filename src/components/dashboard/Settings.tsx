import { Sidebar } from './Sidebar';
import { Settings as SettingsIcon, Bell, Shield, Wifi, Database, Smartphone } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface SettingsProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Settings({ onNavigate, onLogout }: SettingsProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="settings" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-sm text-gray-500 mt-1">Configuration générale de votre système SOFT-IT</p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-5xl space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center shadow-md">
                <SettingsIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Configuration Générale</h3>
                <p className="text-sm text-gray-500">Paramètres système et préférences</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">Nom de l'organisation</p>
                  <p className="text-sm text-gray-500">SOFT-IT Solutions</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">Fuseau horaire</p>
                  <p className="text-sm text-gray-500">Europe/Paris (UTC+1)</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">Langue par défaut</p>
                  <p className="text-sm text-gray-500">Français</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-md">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Gérez vos préférences de notifications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Nouveau feedback reçu</p>
                  <p className="text-sm text-gray-500">Notification à chaque nouveau feedback</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Rapport quotidien</p>
                  <p className="text-sm text-gray-500">Recevoir un résumé quotidien par email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Alertes système</p>
                  <p className="text-sm text-gray-500">Notifications pour les événements système</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Synchronization */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-md">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Synchronisation</h3>
                <p className="text-sm text-gray-500">Configuration de la synchronisation des données</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Synchronisation automatique</p>
                  <p className="text-sm text-gray-500">Sync auto des tablettes avec le serveur</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Intervalle de synchronisation</p>
                  <p className="text-sm text-gray-500">Toutes les 5 minutes</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start gap-2">
                  <Wifi className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium mb-1">Statut de synchronisation</p>
                    <p>Dernière sync : Il y a 2 minutes • Tous les appareils à jour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sécurité</h3>
                <p className="text-sm text-gray-500">Paramètres de sécurité et confidentialité</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Authentification à deux facteurs</p>
                  <p className="text-sm text-gray-500">Sécurité renforcée pour les connexions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Délai d'inactivité</p>
                  <p className="text-sm text-gray-500">Déconnexion automatique après 30 minutes</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Gestion des sessions</p>
                  <p className="text-sm text-gray-500">2 sessions actives actuellement</p>
                </div>
                <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                  Révoquer tout
                </button>
              </div>
            </div>
          </div>

          {/* Kiosk Settings */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Paramètre Application Kiosk</h3>
                <p className="text-sm text-gray-500">Configuration de l'application tablette</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Mode Kiosk</p>
                  <p className="text-sm text-gray-500">Verrouiller l'application en mode plein écran</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Timeout d'inactivité</p>
                  <p className="text-sm text-gray-500">Retour à l'accueil après 60 secondes</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Déconnexion cachée</p>
                  <p className="text-sm text-gray-500">Appui long sur logo (5 secondes)</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                  Actif
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Mode hors ligne</p>
                  <p className="text-sm text-gray-500">Stockage local des réponses</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center shadow-md">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Gestion des Données</h3>
                <p className="text-sm text-gray-500">Stockage et conservation des données</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Durée de conservation</p>
                  <p className="text-sm text-gray-500">Conserver les feedbacks pendant 2 ans</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                  Modifier
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Espace utilisé</p>
                  <p className="text-sm text-gray-500">148 MB / 5 GB (2.96%)</p>
                </div>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Réinitialiser
            </button>
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
              Enregistrer les Modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}