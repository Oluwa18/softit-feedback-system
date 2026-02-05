import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Languages, 
  FileText, 
  Palette, 
  Calendar, 
  BarChart3, 
  Settings, 
  Code, 
  Smartphone, 
  Database, 
  Info,
  LogOut
} from 'lucide-react';

type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

interface SidebarProps {
  activeScreen: DashboardScreen;
  onNavigate: (screen: DashboardScreen) => void;
  onLogout?: () => void;
}

export function Sidebar({ activeScreen, onNavigate, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: LayoutDashboard },
    { id: 'company', label: 'Information Société', icon: Building2 },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'languages', label: 'Langue', icon: Languages },
    { id: 'content', label: 'Contenu', icon: FileText },
    { id: 'templates', label: 'Programme', icon: Palette },
    { id: 'reports', label: 'Rapport', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings },
    { id: 'backup', label: 'Sauvegarde & Restauration', icon: Database },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SOFT-IT
            </h1>
            <p className="text-xs text-gray-500">Dashboard Manager</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as DashboardScreen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        {onLogout && (
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Déconnexion</span>
          </button>
        )}
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600">Système en ligne</span>
          </div>
          <p className="text-xs text-gray-500">Version 2.0.0</p>
        </div>
      </div>
    </div>
  );
}