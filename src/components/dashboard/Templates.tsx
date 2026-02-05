import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Upload, Palette, Eye, Check, Smartphone } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface TemplatesProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Templates({ onNavigate, onLogout }: TemplatesProps) {
  const [primaryColor, setPrimaryColor] = useState('#8b5cf6');
  const [secondaryColor, setSecondaryColor] = useState('#a78bfa');
  const [backgroundColor, setBackgroundColor] = useState('#f8f9ff');
  const [activeTemplate, setActiveTemplate] = useState(true);

  const colorPresets = [
    { name: 'Violet Pastel', primary: '#8b5cf6', secondary: '#a78bfa', bg: '#f8f9ff' },
    { name: 'Bleu Clair', primary: '#3b82f6', secondary: '#60a5fa', bg: '#eff6ff' },
    { name: 'Vert Menthe', primary: '#10b981', secondary: '#34d399', bg: '#ecfdf5' },
    { name: 'Rose Doux', primary: '#ec4899', secondary: '#f472b6', bg: '#fdf2f8' },
    { name: 'Orange Pastel', primary: '#f97316', secondary: '#fb923c', bg: '#fff7ed' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="templates" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Programme / Templates</h1>
              <p className="text-sm text-gray-500 mt-1">Personnalisez l'apparence de votre kiosk</p>
            </div>
            {activeTemplate && (
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-xl border border-green-200">
                <Check className="w-5 h-5" />
                <span className="font-medium">Template Actif</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div className="space-y-6">
              {/* Logo Upload */}
              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Logo de l'Entreprise</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Cliquez pour uploader votre logo</p>
                  <p className="text-xs text-gray-400">PNG, JPG, SVG (max. 2MB)</p>
                </div>
              </div>

              {/* Color Customization */}
              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  Personnalisation des Couleurs
                </h3>

                {/* Color Pickers */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Couleur Primaire</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-16 h-12 rounded-xl border border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Couleur Secondaire</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-16 h-12 rounded-xl border border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Arrière-plan</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-16 h-12 rounded-xl border border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Color Presets */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Thèmes Prédéfinis</label>
                  <div className="grid grid-cols-5 gap-2">
                    {colorPresets.map((preset, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setPrimaryColor(preset.primary);
                          setSecondaryColor(preset.secondary);
                          setBackgroundColor(preset.bg);
                        }}
                        className="group relative aspect-square rounded-xl overflow-hidden border-2 border-gray-200 hover:border-indigo-400 transition-all hover:scale-105"
                        title={preset.name}
                      >
                        <div className="absolute inset-0 flex">
                          <div className="flex-1" style={{ backgroundColor: preset.primary }} />
                          <div className="flex-1" style={{ backgroundColor: preset.secondary }} />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  Réinitialiser
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Activer Template
                </button>
              </div>
            </div>

            {/* Live Preview */}
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-indigo-600" />
                    Aperçu en Direct
                  </h3>
                  <Smartphone className="w-5 h-5 text-gray-400" />
                </div>

                {/* Tablet Preview */}
                <div 
                  className="rounded-3xl p-6 shadow-2xl border-8 border-gray-800"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                    {/* Preview Logo */}
                    <div className="text-center space-y-3">
                      <div 
                        className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                        }}
                      >
                        <span className="text-2xl text-white font-bold">S</span>
                      </div>
                      <h2 
                        className="text-xl font-bold"
                        style={{ color: primaryColor }}
                      >
                        SOFT-IT
                      </h2>
                    </div>

                    {/* Preview Form Elements */}
                    <div className="space-y-3">
                      <div className="h-12 bg-gray-50 rounded-xl border border-gray-200" />
                      <div className="h-12 bg-gray-50 rounded-xl border border-gray-200" />
                      
                      <button 
                        className="w-full h-12 rounded-xl text-white font-medium shadow-md"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                        }}
                      >
                        Bouton d'Action
                      </button>
                    </div>

                    {/* Preview Elements */}
                    <div className="flex gap-2 justify-center">
                      <div 
                        className="w-12 h-12 rounded-xl shadow-sm"
                        style={{ backgroundColor: primaryColor, opacity: 0.2 }}
                      />
                      <div 
                        className="w-12 h-12 rounded-xl shadow-sm"
                        style={{ backgroundColor: secondaryColor, opacity: 0.2 }}
                      />
                      <div 
                        className="w-12 h-12 rounded-xl shadow-sm"
                        style={{ backgroundColor: primaryColor, opacity: 0.2 }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Les modifications sont appliquées en temps réel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}