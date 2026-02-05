import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Plus, Edit2, Trash2, Shield, User, Mail, Calendar } from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface UsersProps {
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  createdAt: string;
  status: 'active' | 'inactive';
}

export function Users({ onNavigate, onLogout }: UsersProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [users] = useState<UserData[]>([
    { id: '1', name: 'Admin SOFT-IT', email: 'admin@soft-it.com', role: 'admin', createdAt: '2025-01-15', status: 'active' },
    { id: '2', name: 'Manager Principal', email: 'manager@soft-it.com', role: 'manager', createdAt: '2025-02-01', status: 'active' },
    { id: '3', name: 'Utilisateur Test', email: 'user@soft-it.com', role: 'user', createdAt: '2026-01-10', status: 'active' },
    { id: '4', name: 'Sophie Martin', email: 's.martin@soft-it.com', role: 'manager', createdAt: '2026-01-20', status: 'active' },
    { id: '5', name: 'Pierre Dubois', email: 'p.dubois@soft-it.com', role: 'user', createdAt: '2026-02-01', status: 'inactive' }
  ]);

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200';
      case 'manager':
        return 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200';
      case 'user':
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrateur';
      case 'manager': return 'Manager';
      case 'user': return 'Utilisateur';
      default: return role;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Shield;
      case 'manager': return User;
      case 'user': return User;
      default: return User;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen="users" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Utilisateurs</h1>
              <p className="text-sm text-gray-500 mt-1">Gérez les accès et les rôles de votre équipe</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Ajouter un Utilisateur
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Utilisateurs</p>
                  <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Actifs</p>
                  <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.status === 'active').length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Administrateurs</p>
                  <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'admin').length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Liste des Utilisateurs</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date de création</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user) => {
                    const RoleIcon = getRoleIcon(user.role);
                    
                    return (
                      <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-medium">
                              {user.name.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4 text-gray-400" />
                            {user.email}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium border ${getRoleBadge(user.role)}`}>
                            <RoleIcon className="w-3 h-3" />
                            {getRoleLabel(user.role)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            {new Date(user.createdAt).toLocaleDateString('fr-FR')}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {user.status === 'active' ? 'Actif' : 'Inactif'}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Roles Info */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-semibold text-gray-900 mb-4">👥 Rôles et Permissions</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-gray-900">Administrateur</span>
                </div>
                <p className="text-sm text-gray-600">Accès complet à toutes les fonctionnalités</p>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-900">Manager</span>
                </div>
                <p className="text-sm text-gray-600">Gestion des rapports et du contenu</p>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Utilisateur</span>
                </div>
                <p className="text-sm text-gray-600">Consultation des rapports uniquement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Ajouter un Utilisateur</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="jean.dupont@soft-it.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rôle</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option value="user">Utilisateur</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Administrateur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
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