import { Bell, Calendar, UserPlus, AlertCircle, CheckCircle, Clock, Trash2, Settings as SettingsIcon } from "lucide-react";

export default function Notifications() {
  const notifications = [
    { type: "appointment", icon: Calendar, iconColor: "#0ea5e9", iconBg: "#e0f2fe", title: "New Appointment Scheduled", message: "Sarah Davis has booked an appointment with Dr. David Kim for tomorrow at 10:30 AM.", time: "5 minutes ago", unread: true },
    { type: "registration", icon: UserPlus, iconColor: "#10b981", iconBg: "#ecfdf5", title: "New Patient Registration", message: "James Wilson has completed the registration process and assigned to Dr. Samantha Lee.", time: "15 minutes ago", unread: true },
    { type: "alert", icon: AlertCircle, iconColor: "#f59e0b", iconBg: "#fef3c7", title: "System Alert", message: "High patient volume detected in Emergency Department. Consider allocating additional resources.", time: "1 hour ago", unread: true },
    { type: "success", icon: CheckCircle, iconColor: "#059669", iconBg: "#ecfdf5", title: "Lab Results Ready", message: "Laboratory results for Patient ID P-2024-147 are now available for review.", time: "2 hours ago", unread: false },
    { type: "reminder", icon: Clock, iconColor: "#8b5cf6", iconBg: "#ede9fe", title: "Appointment Reminder", message: "Dr. Marcus Chen has 3 appointments scheduled for this afternoon starting at 2:00 PM.", time: "3 hours ago", unread: false },
    { type: "appointment", icon: Calendar, iconColor: "#0ea5e9", iconBg: "#e0f2fe", title: "Appointment Rescheduled", message: "Lisa Martinez rescheduled her appointment from today to next Monday at 11:00 AM.", time: "4 hours ago", unread: false },
    { type: "success", icon: CheckCircle, iconColor: "#059669", iconBg: "#ecfdf5", title: "Payment Received", message: "Payment confirmation received for Patient ID P-2024-089. Amount: $450.00", time: "Yesterday", unread: false },
    { type: "alert", icon: AlertCircle, iconColor: "#ef4444", iconBg: "#fee2e2", title: "Medication Stock Alert", message: "Critical: Amoxicillin stock levels below threshold. Reorder required immediately.", time: "Yesterday", unread: false },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Notifications</h1>
          <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Stay updated with important alerts and messages.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-4 py-3 rounded-xl font-semibold hover:bg-[#f8fafc] transition-all">
            <SettingsIcon className="size-5" /> Preferences
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            <CheckCircle className="size-5" /> Mark All as Read
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-[#e0f2fe] rounded-xl flex items-center justify-center"><Bell className="size-5 text-[#0369a1]" /></div>
            <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide">Total</div>
          </div>
          <div className="font-bold text-3xl text-[#171c1f]">48</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-[#fef3c7] rounded-xl flex items-center justify-center"><AlertCircle className="size-5 text-[#d97706]" /></div>
            <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide">Unread</div>
          </div>
          <div className="font-bold text-3xl text-[#171c1f]">3</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-[#fee2e2] rounded-xl flex items-center justify-center"><AlertCircle className="size-5 text-[#dc2626]" /></div>
            <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide">Urgent</div>
          </div>
          <div className="font-bold text-3xl text-[#171c1f]">2</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-[#ecfdf5] rounded-xl flex items-center justify-center"><CheckCircle className="size-5 text-[#059669]" /></div>
            <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide">Today</div>
          </div>
          <div className="font-bold text-3xl text-[#171c1f]">12</div>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notification, idx) => (
          <div key={idx} className={`bg-white border rounded-2xl p-6 hover:shadow-lg transition-all ${notification.unread ? "border-[#0ea5e9] bg-[#f0f9ff]" : "border-[#e2e8f0]"}`}>
            <div className="flex items-start gap-6">
              <div className="size-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: notification.iconBg }}>
                <notification.icon className="size-6" style={{ color: notification.iconColor }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base text-[#171c1f]">{notification.title}</h3>
                  {notification.unread && <div className="size-2 bg-[#0ea5e9] rounded-full"></div>}
                </div>
                <p className="text-sm text-[#64748b] mb-3">{notification.message}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94a3b8]">{notification.time}</span>
                  <div className="flex items-center gap-2">
                    {notification.unread && (
                      <button className="px-3 py-1.5 bg-[#e0f2fe] text-[#0369a1] text-xs font-semibold rounded-lg hover:bg-[#bae6fd] transition-all">Mark as Read</button>
                    )}
                    <button className="p-1.5 hover:bg-[#fee2e2] rounded-lg transition-all"><Trash2 className="size-4 text-[#dc2626]" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-white border border-[#e2e8f0] text-[#64748b] font-semibold rounded-xl hover:bg-[#f8fafc] transition-all">
          Load More Notifications
        </button>
      </div>
    </div>
  );
}
