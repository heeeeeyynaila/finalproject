import { Search, Bell, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "Annual Flu Vaccination Due", time: "2 hours ago", type: "Health Alert", color: "text-[#006591] bg-[#e0f2fe]" },
    { id: 2, title: "Lab Results: Complete Blood Count", time: "Yesterday", type: "Clinical Update", color: "text-[#059669] bg-[#d1fae5]" },
    { id: 3, title: "New Message from Dr. Richardson", time: "2 days ago", type: "Message", color: "text-[#7c3aed] bg-[#ede9fe]" },
  ];

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0] flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b] group-focus-within:text-[#006591] transition-colors" />
          <input 
            type="text" 
            placeholder="Search medical records, appointments, or doctors..." 
            className="w-full pl-12 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl outline-none focus:border-[#006591] focus:ring-4 focus:ring-[#006591]/5 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 hover:bg-[#f8fafc] rounded-xl transition-colors relative"
          >
            <Bell className="size-6 text-[#64748b]" />
            <span className="absolute top-2.5 right-2.5 size-2.5 bg-[#dc2626] border-2 border-white rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
                <h3 className="font-bold text-[#171c1f]">Notifications</h3>
                <span className="text-xs font-semibold text-[#006591] cursor-pointer hover:underline">Mark all as read</span>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-4 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8fafc] transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${n.color}`}>
                        {n.type}
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{n.time}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#171c1f] group-hover:text-[#006591] transition-colors line-clamp-1">{n.title}</h4>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-[#f8fafc] text-center border-t border-[#e2e8f0]">
                <button className="text-xs font-bold text-[#64748b] hover:text-[#006591] transition-colors">
                  View all announcements
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-px bg-[#e2e8f0] mx-2"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <div className="text-sm font-bold text-[#171c1f]">John Smith</div>
            <div className="text-[11px] font-semibold text-[#64748b]">Patient ID: P-2024-147</div>
          </div>
          <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold border-2 border-white shadow-sm cursor-pointer hover:shadow-md transition-all">
            JS
          </div>
        </div>
      </div>
    </header>
  );
}
