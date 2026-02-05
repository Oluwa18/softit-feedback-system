import { Sidebar } from './Sidebar';
import { Languages as LanguagesIcon, Globe, Check, Plus } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface LanguagesProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Languages({ onNavigate, onLogout }: LanguagesProps) {
  const availableLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', active: true, isDefault: true },
    { code: 'en', name: 'English', flag: '🇬🇧', active: true, isDefault: false },
    { code: 'es', name: 'Español', flag: '🇪🇸', active: false, isDefault: false },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', active: false, isDefault: false },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', active: false, isDefault: false },
    { code: 'pt', name: 'Português', flag: '🇵🇹', active: false, isDefault: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="languages" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Langues</h1>
              <p className="text-sm text-gray-500 mt-1">Gérez les langues disponibles dans votre application</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
              Ajouter une Langue
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-w-5xl space-y-6">
          {/* Current Default */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Langue par Défaut</h3>
                <p className="text-sm text-gray-600">Français 🇫🇷</p>
              </div>
              <span className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium">
                Défaut
              </span>
            </div>
          </div>

          {/* Languages List */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Langues Disponibles</h3>
            </div>

            <div className="divide-y divide-gray-100">
              {availableLanguages.map((language) => (
                <div
                  key={language.code}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Flag & Name */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                        {language.flag}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{language.name}</p>
                        <p className="text-sm text-gray-500">{language.code.toUpperCase()}</p>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-3">
                      {language.isDefault && (
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium">
                          Par défaut
                        </span>
                      )}
                      
                      {/* Active Toggle */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          {language.active ? 'Activée' : 'Désactivée'}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked={language.active} />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-500"></div>
                        </label>
                      </div>

                      {/* Set as Default Button */}
                      {!language.isDefault && language.active && (
                        <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                          Définir par défaut
                        </button>
                      )}

                      {/* Edit Translation */}
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors">
                        Éditer
                      </button>
                    </div>
                  </div>

                  {/* Translation Progress */}
                  {language.active && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Traduction complète</span>
                        <span className="text-gray-900 font-medium">
                          {language.isDefault ? '100%' : language.code === 'en' ? '95%' : '0%'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                          style={{ width: language.isDefault ? '100%' : language.code === 'en' ? '95%' : '0%' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Translation Keys */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Clés de Traduction</h3>
              <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                Exporter
              </button>
            </div>

            <div className="space-y-3">
              {[
                { key: 'welcome.title', fr: 'Bienvenue', en: 'Welcome' },
                { key: 'feedback.satisfaction', fr: 'Comment évaluez-vous votre expérience ?', en: 'How would you rate your experience?' },
                { key: 'feedback.rating', fr: 'Notez notre service', en: 'Rate our service' },
                { key: 'feedback.nps', fr: 'Recommanderiez-vous SOFT-IT ?', en: 'Would you recommend SOFT-IT?' },
                { key: 'form.firstname', fr: 'Prénom', en: 'First Name' },
                { key: 'form.lastname', fr: 'Nom', en: 'Last Name' },
                { key: 'form.email', fr: 'Email', en: 'Email' },
                { key: 'button.submit', fr: 'Envoyer', en: 'Submit' },
                { key: 'thankyou.title', fr: 'Merci !', en: 'Thank you!' }
              ].map((translation, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-2 font-mono">{translation.key}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-600 flex items-center gap-1">
                        🇫🇷 Français
                      </label>
                      <input
                        type="text"
                        defaultValue={translation.fr}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-600 flex items-center gap-1">
                        🇬🇧 English
                      </label>
                      <input
                        type="text"
                        defaultValue={translation.en}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
              Enregistrer les Traductions
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-semibold text-gray-900 mb-3">💡 Conseils</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• La langue par défaut est utilisée lorsqu'aucune autre langue n'est sélectionnée</li>
              <li>• Les traductions sont appliquées en temps réel sur les tablettes</li>
              <li>• Assurez-vous de traduire toutes les clés pour une expérience complète</li>
              <li>• Vous pouvez exporter et importer des fichiers de traduction au format JSON</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}