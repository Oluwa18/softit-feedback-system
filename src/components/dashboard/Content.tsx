import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Plus, GripVertical, Trash2, Edit2, Star, Smile, Type, MessageSquare, ToggleLeft, ToggleRight } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface ContentProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

interface Question {
  id: string;
  type: 'emoji' | 'stars' | 'nps' | 'text' | 'textarea';
  label: string;
  required: boolean;
}

export function Content({ onNavigate, onLogout }: ContentProps) {
  const [questions, setQuestions] = useState<Question[]>([
    { id: '1', type: 'emoji', label: 'Comment évaluez-vous votre expérience ?', required: true },
    { id: '2', type: 'stars', label: 'Notez notre service', required: true },
    { id: '3', type: 'nps', label: 'Recommanderiez-vous SOFT-IT ?', required: true },
    { id: '4', type: 'text', label: 'Prénom', required: true },
    { id: '5', type: 'text', label: 'Nom', required: true },
    { id: '6', type: 'text', label: 'Email', required: true },
    { id: '7', type: 'text', label: 'Téléphone', required: false },
    { id: '8', type: 'textarea', label: 'Commentaire', required: false }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const toggleRequired = (id: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, required: !q.required } : q
    ));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const getQuestionIcon = (type: string) => {
    switch (type) {
      case 'emoji': return Smile;
      case 'stars': return Star;
      case 'nps': return ToggleRight;
      case 'text': return Type;
      case 'textarea': return MessageSquare;
      default: return Type;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'emoji': return 'Emoji Satisfaction';
      case 'stars': return 'Notation Étoiles';
      case 'nps': return 'Score NPS';
      case 'text': return 'Champ Texte';
      case 'textarea': return 'Zone de Texte';
      default: return type;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="content" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contenu / Questions</h1>
              <p className="text-sm text-gray-500 mt-1">Gérez les questions de votre questionnaire</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Ajouter une Question
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Questions List */}
            <div className="divide-y divide-gray-100">
              {questions.map((question, index) => {
                const Icon = getQuestionIcon(question.type);
                
                return (
                  <div
                    key={question.id}
                    className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors group"
                  >
                    {/* Drag Handle */}
                    <button className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
                      <GripVertical className="w-5 h-5" />
                    </button>

                    {/* Order Number */}
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-600">{index + 1}</span>
                    </div>

                    {/* Question Icon & Type */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{question.label}</p>
                        <p className="text-sm text-gray-500">{getQuestionTypeLabel(question.type)}</p>
                      </div>
                    </div>

                    {/* Required Toggle */}
                    <button
                      onClick={() => toggleRequired(question.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        question.required
                          ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {question.required ? (
                        <>
                          <ToggleRight className="w-5 h-5" />
                          <span>Obligatoire</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-5 h-5" />
                          <span>Facultatif</span>
                        </>
                      )}
                    </button>

                    {/* Actions */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {questions.length === 0 && (
              <div className="py-16 text-center">
                <MessageSquare className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Aucune question configurée</p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                  Ajouter votre première question
                </button>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Conseils</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Utilisez le glisser-déposer pour réorganiser l'ordre des questions</li>
              <li>• Les questions obligatoires sont marquées d'un astérisque (*) sur la tablette</li>
              <li>• Limitez le nombre de questions pour optimiser le taux de réponse</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Question Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Ajouter une Question</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de Question</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Emoji Satisfaction</option>
                  <option>Notation Étoiles</option>
                  <option>Score NPS</option>
                  <option>Champ Texte</option>
                  <option>Zone de Texte</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Libellé</label>
                <input
                  type="text"
                  placeholder="Entrez le libellé de la question"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="required" className="w-4 h-4 text-indigo-600 rounded" />
                <label htmlFor="required" className="text-sm text-gray-700">Question obligatoire</label>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}