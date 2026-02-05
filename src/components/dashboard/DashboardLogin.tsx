import { useState } from 'react';
import { Building2, Mail, Lock, BarChart3, FileText, Settings } from 'lucide-react';

interface DashboardLoginProps {
  onLogin: () => void;
}

export function DashboardLogin({ onLogin }: DashboardLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        {/* Left Panel - Blue */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-12 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          
          <div className="relative z-10 space-y-8">
            {/* Logo */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold mb-2">SOFT-IT Dashboard</h1>
              <p className="text-blue-100 text-lg">
                Gérez vos feedbacks en temps réel
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-blue-200" />
                <span className="text-blue-50">Statistiques détaillées</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-200" />
                <span className="text-blue-50">Export Excel & PDF</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-blue-200" />
                <span className="text-blue-50">Configuration avancée</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="p-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Connexion Manager</h2>
              <p className="text-gray-600">Accédez au tableau de bord de gestion</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nom d'utilisateur
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="manager@soft-it.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Se connecter
              </button>
            </form>

            <p className="text-xs text-center text-gray-500">
              Note : Les connexions sont différentes de ceux utilisés sur APK-kiosk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
