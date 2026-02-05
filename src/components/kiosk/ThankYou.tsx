import { useEffect } from 'react';
import { CheckCircle2, Building2 } from 'lucide-react';

interface ThankYouProps {
  onReset: () => void;
}

export function ThankYou({ onReset }: ThankYouProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 animate-fade-in">
      {/* Success Icon */}
      <div className="relative">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-ping opacity-20" />
      </div>

      {/* Thank You Message */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-gray-800">Merci !</h2>
        <p className="text-gray-600">
          Votre feedback a été envoyé avec succès
        </p>
      </div>

      {/* SOFT-IT Branding */}
      <div className="pt-6 space-y-3">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          SOFT-IT
        </p>
        <p className="text-sm text-gray-500">
          Votre avis nous aide à améliorer nos services
        </p>
      </div>

      {/* Auto-redirect indicator */}
      <div className="pt-4">
        <div className="inline-flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span>Retour automatique dans quelques secondes...</span>
        </div>
      </div>
    </div>
  );
}