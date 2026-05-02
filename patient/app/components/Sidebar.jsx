import { NavLink } from "react-router";
import { LayoutDashboard, Calendar, User, FileText, Syringe, HeartPulse, Bell, Settings, LogOut } from "lucide-react";

export function Sidebar({ collapsed }) {
  const navItems = [
    { name: "Dashboard", path: "/patient", icon: LayoutDashboard },
    { name: "Appointments", path: "/patient/appointments", icon: Calendar },
    { name: "Medical File", path: "/patient/medical-file", icon: HeartPulse },
    { name: "Documents", path: "/patient/documents", icon: FileText },
    { name: "Vaccinations", path: "/patient/vaccinations", icon: Syringe },
  ];

  const bottomItems = [
    { name: "Profile", path: "/patient/profile", icon: User },
    { name: "Settings", path: "/patient/settings", icon: Settings },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} bg-white border-r border-[#e2e8f0] flex flex-col z-50`}>
      <div className={`p-4 ${collapsed ? 'px-2' : 'p-6'}`}>
        <div className={`flex items-center gap-3 mb-8 ${collapsed ? 'justify-center' : ''}`}>
          <div className="size-8 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">AC</span>
          </div>
          {!collapsed && <span className="font-bold text-xl text-[#171c1f] whitespace-nowrap overflow-hidden">Arcio Patient</span>}
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/patient'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${collapsed ? 'justify-center px-0' : ''} ${
                  isActive
                    ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-md'
                    : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]'
                }`
              }
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-[#e2e8f0]">
        <nav className="flex flex-col gap-2 mb-6">
          {bottomItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${collapsed ? 'justify-center px-0' : ''} ${
                  isActive
                    ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-md'
                    : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]'
                }`
              }
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
        
        {!collapsed ? (
          <div className="bg-[#f8fafc] rounded-2xl p-4 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold border-2 border-[#e0f2fe]">
                JS
              </div>
              <div>
                <div className="font-bold text-sm text-[#171c1f]">John Smith</div>
                <div className="text-xs text-[#64748b]">Patient ID: P-2024-147</div>
              </div>
            </div>
            <NavLink
              to="/"
              className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-[#dc2626] bg-[#fee2e2] rounded-xl hover:bg-[#fecaca] transition-colors"
            >
              <LogOut className="size-4" /> Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink to="/" className="flex items-center justify-center size-10 rounded-xl bg-[#fee2e2] text-[#dc2626] hover:bg-[#fecaca] transition-colors mx-auto">
            <LogOut className="size-5" />
          </NavLink>
        )}
      </div>
    </div>
  );
}
