import { useState } from 'react';
import { LoginConfig } from './components/kiosk/LoginConfig';
import { Questionnaire } from './components/kiosk/Questionnaire';
import { ThankYou } from './components/kiosk/ThankYou';
import { DashboardLogin } from './components/dashboard/DashboardLogin';
import { Dashboard } from './components/dashboard/Dashboard';
import { Content } from './components/dashboard/Content';
import { Templates } from './components/dashboard/Templates';
import { Programme } from './components/dashboard/Programme';
import { Reports } from './components/dashboard/Reports';
import { Users } from './components/dashboard/Users';
import { Backup } from './components/dashboard/Backup';
import { Settings } from './components/dashboard/Settings';
import { CompanyInfo } from './components/dashboard/CompanyInfo';
import { Languages } from './components/dashboard/Languages';

type ViewMode = 'kiosk' | 'dashboard';
type KioskScreen = 'login' | 'questionnaire' | 'thankyou';
type DashboardScreen = 'dashboard' | 'company' | 'users' | 'languages' | 'content' | 'templates' | 'programme' | 'reports' | 'settings' | 'backup';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [kioskScreen, setKioskScreen] = useState<KioskScreen>('login');
  const [dashboardScreen, setDashboardScreen] = useState<DashboardScreen>('dashboard');
  const [isDashboardLoggedIn, setIsDashboardLoggedIn] = useState(false);

  // Mode switcher for demo purposes
  const ModeSwitcher = () => (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setViewMode('kiosk')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          viewMode === 'kiosk'
            ? 'bg-gradient-to-r from-indigo-400 to-purple-400 text-white shadow-lg'
            : 'bg-white text-gray-600 shadow hover:shadow-md'
        }`}
      >
        Mode Kiosk
      </button>
      <button
        onClick={() => setViewMode('dashboard')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          viewMode === 'dashboard'
            ? 'bg-gradient-to-r from-indigo-400 to-purple-400 text-white shadow-lg'
            : 'bg-white text-gray-600 shadow hover:shadow-md'
        }`}
      >
        Mode Dashboard
      </button>
    </div>
  );

  const handleDashboardLogout = () => {
    setIsDashboardLoggedIn(false);
    setDashboardScreen('dashboard');
  };

  if (viewMode === 'kiosk') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <ModeSwitcher />
        <div className="w-full max-w-md">
          {kioskScreen === 'login' && <LoginConfig onLogin={() => setKioskScreen('questionnaire')} />}
          {kioskScreen === 'questionnaire' && <Questionnaire onSubmit={() => setKioskScreen('thankyou')} />}
          {kioskScreen === 'thankyou' && <ThankYou onReset={() => setKioskScreen('questionnaire')} />}
        </div>
      </div>
    );
  }

  // Dashboard mode
  if (!isDashboardLoggedIn) {
    return (
      <>
        <ModeSwitcher />
        <DashboardLogin onLogin={() => setIsDashboardLoggedIn(true)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ModeSwitcher />
      {dashboardScreen === 'dashboard' && <Dashboard onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'company' && <CompanyInfo onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'users' && <Users onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'languages' && <Languages onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'content' && <Content onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'templates' && <Templates onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'programme' && <Programme onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'reports' && <Reports onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'settings' && <Settings onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
      {dashboardScreen === 'backup' && <Backup onNavigate={setDashboardScreen} onLogout={handleDashboardLogout} />}
    </div>
  );
}