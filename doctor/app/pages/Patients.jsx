import { Search, Filter, Plus, Phone, Mail, FileText } from "lucide-react";

export default function Patients() {
  const patients = [
    { name: "John Anderson", id: "P-2024-001", age: 45, gender: "Male", bloodType: "A+", phone: "+1 (555) 111-2222", email: "john.anderson@email.com", lastVisit: "Mar 20, 2026", nextAppointment: "Mar 28, 2026", doctor: "Dr. Sarah Jenkins", status: "Active", avatar: "JA", color: "#0ea5e9" },
    { name: "Emily Watson", id: "P-2024-002", age: 32, gender: "Female", bloodType: "O-", phone: "+1 (555) 222-3333", email: "emily.watson@email.com", lastVisit: "Mar 22, 2026", nextAppointment: "Apr 05, 2026", doctor: "Dr. Marcus Chen", status: "Active", avatar: "EW", color: "#8b5cf6" },
    { name: "Michael Brown", id: "P-2024-003", age: 8, gender: "Male", bloodType: "B+", phone: "+1 (555) 333-4444", email: "parent.brown@email.com", lastVisit: "Mar 15, 2026", nextAppointment: "Today", doctor: "Dr. Elena Rodriguez", status: "Active", avatar: "MB", color: "#f59e0b" },
    { name: "Sarah Davis", id: "P-2024-004", age: 58, gender: "Female", bloodType: "AB+", phone: "+1 (555) 444-5555", email: "sarah.davis@email.com", lastVisit: "Mar 18, 2026", nextAppointment: "Tomorrow", doctor: "Dr. David Kim", status: "In Treatment", avatar: "SD", color: "#10b981" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-[#ecfdf5] text-[#059669]";
      case "In Treatment": return "bg-[#dbeafe] text-[#0369a1]";
      case "Discharged": return "bg-[#f1f5f9] text-[#64748b]";
      default: return "bg-[#f1f5f9] text-[#64748b]";
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Patients</h1>
          <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Manage patient records and information.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-4 py-3 rounded-xl font-semibold hover:bg-[#f8fafc] transition-all">
            <Filter className="size-5" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            <Plus className="size-5" /> Register Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Total Patients</div>
          <div className="font-bold text-4xl text-[#171c1f]">1,847</div>
          <div className="text-xs text-[#059669] mt-2">+23 this week</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">New This Month</div>
          <div className="font-bold text-4xl text-[#171c1f]">156</div>
          <div className="text-xs text-[#059669] mt-2">+12% growth</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">In Treatment</div>
          <div className="font-bold text-4xl text-[#171c1f]">342</div>
          <div className="text-xs text-[#0369a1] mt-2">Active cases</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Discharged</div>
          <div className="font-bold text-4xl text-[#171c1f]">1,349</div>
          <div className="text-xs text-[#64748b] mt-2">Total recovered</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8]" />
          <input type="text" placeholder="Search patients by name, ID, or email..." className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-12 pr-4 py-3 text-sm text-[#171c1f] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
        </div>
      </div>

      <div className="space-y-4">
        {patients.map((patient, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-2xl flex items-center justify-center font-bold text-xl text-white" style={{ backgroundColor: patient.color }}>
                  {patient.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-[#171c1f]">{patient.name}</h3>
                    <span className="text-xs text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full">{patient.id}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#64748b] mb-2">
                    <span className="font-semibold">{patient.age} years • {patient.gender}</span>
                    <span className="font-semibold">Blood Type: {patient.bloodType}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#64748b]">
                      <Phone className="size-3.5" /> <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#64748b]">
                      <Mail className="size-3.5" /> <span>{patient.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="font-semibold text-xs text-[#64748b] mb-1">Last Visit</div>
                  <div className="font-semibold text-sm text-[#171c1f]">{patient.lastVisit}</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-[#64748b] mb-1">Next Appointment</div>
                  <div className="font-semibold text-sm text-[#171c1f]">{patient.nextAppointment}</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-[#64748b] mb-1">Primary Doctor</div>
                  <div className="font-semibold text-sm text-[#171c1f]">{patient.doctor}</div>
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(patient.status)}`}>
                  {patient.status}
                </div>
                <button className="p-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl hover:shadow-lg transition-all">
                  <FileText className="size-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
