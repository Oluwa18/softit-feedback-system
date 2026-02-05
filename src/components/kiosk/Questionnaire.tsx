import { useState } from 'react';
import { Smile, Meh, Frown, Star, Send, Building2 } from 'lucide-react';

interface QuestionnaireProps {
  onSubmit: () => void;
}

export function Questionnaire({ onSubmit }: QuestionnaireProps) {
  const [satisfaction, setSatisfaction] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [nps, setNps] = useState<number | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const calculateProgress = () => {
    let filled = 0;
    if (satisfaction) filled += 1;
    if (rating > 0) filled += 1;
    if (nps !== null) filled += 1;
    if (firstName) filled += 1;
    if (lastName) filled += 1;
    if (email) filled += 1;
    return (filled / 6) * 100;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header with Logo */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-center relative">
        <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg mb-3">
          <Building2 className="w-6 h-6 text-indigo-600" />
        </div>
        <h2 className="text-xl font-bold text-white">SOFT-IT</h2>
        <p className="text-indigo-100 text-sm mt-1">Votre avis compte pour nous</p>
        
        {/* Progress Bar */}
        <div className="mt-4 bg-white/20 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <form onSubmit={handleSubmit} className="max-h-[calc(100vh-300px)] overflow-y-auto p-6 space-y-6">
        {/* Emoji Satisfaction Question */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-700">
            Comment évaluez-vous votre expérience ? 
            <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'happy', icon: Smile, label: 'Satisfait', color: 'from-green-400 to-emerald-400' },
              { value: 'neutral', icon: Meh, label: 'Neutre', color: 'from-yellow-400 to-orange-400' },
              { value: 'sad', icon: Frown, label: 'Insatisfait', color: 'from-red-400 to-pink-400' }
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setSatisfaction(item.value)}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  satisfaction === item.value
                    ? `bg-gradient-to-br ${item.color} border-transparent shadow-lg scale-105`
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:scale-102'
                }`}
              >
                <item.icon className={`w-8 h-8 mx-auto mb-2 ${satisfaction === item.value ? 'text-white' : 'text-gray-400'}`} />
                <p className={`text-xs font-medium ${satisfaction === item.value ? 'text-white' : 'text-gray-600'}`}>
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-700">
            Notez notre service
            <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  className={`w-10 h-10 ${
                    star <= rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* NPS Scale */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-700">
            Recommanderiez-vous SOFT-IT ? (0 = Non, 10 = Oui)
            <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="grid grid-cols-11 gap-1">
            {Array.from({ length: 11 }, (_, i) => i).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setNps(num)}
                className={`aspect-square rounded-xl text-sm font-medium transition-all ${
                  nps === num
                    ? num <= 6
                      ? 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-md scale-110'
                      : num <= 8
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white shadow-md scale-110'
                      : 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md scale-110'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="pt-4 border-t border-gray-200 space-y-4">
          <h3 className="font-medium text-gray-700">Informations personnelles</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Prénom <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">
              Téléphone <span className="text-gray-400 text-xs">(facultatif)</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+33 6 12 34 56 78"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">
              Commentaire <span className="text-gray-400 text-xs">(facultatif)</span>
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Partagez-nous vos suggestions..."
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Envoyer mon feedback
        </button>

        <p className="text-xs text-center text-gray-500">
          Les champs marqués d'un <span className="text-red-400">*</span> sont obligatoires
        </p>
      </form>
    </div>
  );
}