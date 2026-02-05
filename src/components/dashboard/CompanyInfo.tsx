import { Sidebar } from './Sidebar';
import { Building2, MapPin, Phone, Mail, Globe, Save } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface CompanyInfoProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function CompanyInfo({ onNavigate, onLogout }: CompanyInfoProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="company" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Information Société</h1>
          <p className="text-sm text-gray-500 mt-1">Gérez les informations de votre entreprise</p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-4xl space-y-6">
          {/* Company Profile */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">SOFT-IT Solutions</h2>
                <p className="text-sm text-gray-500">Plateforme de gestion de feedback</p>
              </div>
              <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm font-medium transition-colors">
                Changer le logo
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <h3 className="font-semibold text-gray-900">Informations Générales</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
                <input
                  type="text"
                  defaultValue="SOFT-IT Solutions"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Secteur d'activité</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Technologie & SaaS</option>
                  <option>Retail & Commerce</option>
                  <option>Hôtellerie & Restauration</option>
                  <option>Services & Conseil</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SIRET</label>
                <input
                  type="text"
                  defaultValue="123 456 789 00012"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">TVA Intracommunautaire</label>
                <input
                  type="text"
                  defaultValue="FR12345678901"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <h3 className="font-semibold text-gray-900">Coordonnées</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  Adresse
                </label>
                <input
                  type="text"
                  defaultValue="123 Avenue des Champs-Élysées"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Code postal</label>
                  <input
                    type="text"
                    defaultValue="75008"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Ville</label>
                  <input
                    type="text"
                    defaultValue="Paris"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Pays</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+33 1 23 45 67 89"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="contact@soft-it.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  Site web
                </label>
                <input
                  type="url"
                  defaultValue="https://www.soft-it.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <h3 className="font-semibold text-gray-900">Informations Complémentaires</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={4}
                  defaultValue="SOFT-IT est une plateforme innovante de gestion de feedback client, permettant aux entreprises de recueillir et analyser les retours de leurs clients en temps réel."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nombre d'employés</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Année de création</label>
                  <input
                    type="number"
                    defaultValue="2020"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Annuler
            </button>
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Enregistrer les Modifications
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-semibold text-gray-900 mb-2">ℹ️ Information</h3>
            <p className="text-sm text-gray-700">
              Ces informations seront visibles dans les paramètres de votre compte et peuvent être utilisées pour la facturation et la communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}