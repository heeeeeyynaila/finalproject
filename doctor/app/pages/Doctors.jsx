import { Search, Filter, Plus, Mail, Phone, MoreVertical } from "lucide-react";

export default function Doctors() {
  const doctors = [
    { name: "Dr. Sarah Jenkins", specialty: "Cardiology", email: "sarah.jenkins@clinicsanctuary.com", phone: "+1 (555) 123-4567", patients: 342, appointments: 45, status: "Available", avatar: "SJ", color: "#0ea5e9" },
    { name: "Dr. Marcus Chen", specialty: "Neurology", email: "marcus.chen@clinicsanctuary.com", phone: "+1 (555) 234-5678", patients: 218, appointments: 32, status: "In Consultation", avatar: "MC", color: "#8b5cf6" },
    { name: "Dr. Elena Rodriguez", specialty: "Pediatrics", email: "elena.rodriguez@clinicsanctuary.com", phone: "+1 (555) 345-6789", patients: 567, appointments: 89, status: "Available", avatar: "ER", color: "#f59e0b" },
    { name: "Dr. David Kim", specialty: "Orthopedics", email: "david.kim@clinicsanctuary.com", phone: "+1 (555) 456-7890", patients: 423, appointments: 56, status: "In Surgery", avatar: "DK", color: "#10b981" },
    { name: "Dr. Samantha Lee", specialty: "Oncology", email: "samantha.lee@clinicsanctuary.com", phone: "+1 (555) 567-8901", patients: 189, appointments: 28, status: "Available", avatar: "SL", color: "#ef4444" },
    { name: "Dr. Michael Foster", specialty: "Emergency Medicine", email: "michael.foster@clinicsanctuary.com", phone: "+1 (555) 678-9012", patients: 892, appointments: 124, status: "On Call", avatar: "MF", color: "#ec4899" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "bg-[#ecfdf5] text-[#059669]";
      case "In Consultation": return "bg-[#fef3c7] text-[#d97706]";
      case "In Surgery": return "bg-[#fee2e2] text-[#dc2626]";
      case "On Call": return "bg-[#e0e7ff] text-[#4f46e5]";
      default: return "bg-[#f1f5f9] text-[#64748b]";
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Medical Staff</h1>
          <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Manage doctors and medical professionals.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-4 py-3 rounded-xl font-semibold hover:bg-[#f8fafc] transition-all">
            <Filter className="size-5" /> Filter
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8]" />
          <input type="text" placeholder="Search doctors..." className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-12 pr-4 py-3 text-sm text-[#171c1f] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
        </div>
      </div>

      <div className="space-y-4">
        {doctors.map((doctor, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-2xl flex items-center justify-center font-bold text-xl text-white" style={{ backgroundColor: doctor.color }}>
                  {doctor.avatar}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#171c1f]">{doctor.name}</h3>
                  <p className="font-semibold text-sm text-[#64748b]">{doctor.specialty}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-[#64748b]">
                      <Mail className="size-4" /> <span className="text-xs">{doctor.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#64748b]">
                      <Phone className="size-4" /> <span className="text-xs">{doctor.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-bold text-2xl text-[#171c1f]">{doctor.patients}</div>
                  <div className="text-xs text-[#64748b]">Patients</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-[#171c1f]">{doctor.appointments}</div>
                  <div className="text-xs text-[#64748b]">Appointments</div>
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(doctor.status)}`}>
                  {doctor.status}
                </div>
                <button className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors">
                  <MoreVertical className="size-5 text-[#64748b]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
