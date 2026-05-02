import { Link, useLocation } from 'react-router';
import { PlusCircle, Building2, UserPlus, Megaphone, LayoutDashboard, Stethoscope, Users, Calendar, Settings, Activity } from 'lucide-react';
import imgAccountCircle from '../../imports/ArcioDashboardRedesigned/0451c2026263616c0d537799cc29de3ad82d5750.png';
import imgClinicLogo from '../../imports/ArcioDashboardRedesigned/634c264d1793a35ca2abfaccbe62de1de1d4811e.png';

export function Sidebar({ collapsed }) {
  const location = useLocation();

  const navItems = [
    { path: '/admin',               label: 'Dashboard',     icon: LayoutDashboard },
    { path: '/admin/services',      label: 'Services',      icon: Activity },
    { path: '/admin/doctors',       label: 'Doctors List',  icon: Stethoscope },
    { path: '/admin/patients',      label: 'Patients',      icon: Users },
    { path: '/admin/appointments',  label: 'Appointments',  icon: Calendar },
    { path: '/admin/announcements', label: 'Announcements', icon: Megaphone },
    { path: '/admin/settings',      label: 'Settings',      icon: Settings },
  ];

  return (
    <div className={`fixed backdrop-blur-[20px] bg-[rgba(241,245,249,0.8)] h-full left-0 top-0 transition-all duration-300 border-r border-[#e2e8f0] ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-4 mb-4">
          <div className="flex items-center gap-3">
            <img src={imgClinicLogo} alt="Arcio Health" className="size-8 rounded-lg shrink-0" />
            {!collapsed && (
              <span className="font-bold text-lg text-[#0f172a] whitespace-nowrap overflow-hidden">Arcio Health</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-lg shadow-[#006591]/20' 
                    : 'text-[#64748b] hover:bg-white hover:text-[#006591]'
                }`}
              >
                <Icon className={`size-5 shrink-0 ${isActive ? 'text-white' : 'group-hover:text-[#006591]'}`} />
                {!collapsed && (
                  <span className="text-sm font-semibold whitespace-nowrap overflow-hidden">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 border-t border-[#e2e8f0]">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <img src={imgAccountCircle} alt="Admin" className="size-8 rounded-full border border-[#e2e8f0]" />
            {!collapsed && (
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-[#171c1f] truncate">Dr. Arcio Admin</div>
                <div className="text-[10px] text-[#64748b] truncate">admin@arcio.health</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
