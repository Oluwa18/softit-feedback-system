import { useState } from 'react';
import { Lock, Building2 } from 'lucide-react';

interface LoginConfigProps {
  onLogin: () => void;
}

export function LoginConfig({ onLogin }: LoginConfigProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8 animate-fade-in">
      {/* Logo */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
          <Building2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          SOFT-IT
        </h1>
        <p className="text-gray-500 text-sm">Configuration Entreprise</p>
      </div>

      {/* Configuration Message */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100">
        <p className="text-sm text-indigo-700 text-center">
          Veuillez configurer votre terminal avec vos identifiants
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Identifiant
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Entrez votre identifiant"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-700"
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
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-700"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Configurer
        </button>
      </form>

      {/* Status Indicator */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>En ligne</span>
      </div>
    </div>
  );
}