import { Building2, Plus, MoreVertical } from "lucide-react";

export default function Departments() {
  const departments = [
    { name: "Cardiology", head: "Dr. Sarah Jenkins", doctors: 8, patients: 342, appointments: 45, occupancy: 87, color: "#0ea5e9" },
    { name: "Neurology", head: "Dr. Marcus Chen", doctors: 6, patients: 218, appointments: 32, occupancy: 72, color: "#8b5cf6" },
    { name: "Pediatrics", head: "Dr. Elena Rodriguez", doctors: 12, patients: 567, appointments: 89, occupancy: 94, color: "#f59e0b" },
    { name: "Orthopedics", head: "Dr. David Kim", doctors: 9, patients: 423, appointments: 56, occupancy: 81, color: "#10b981" },
    { name: "Oncology", head: "Dr. Samantha Lee", doctors: 7, patients: 189, appointments: 28, occupancy: 65, color: "#ef4444" },
    { name: "Emergency Medicine", head: "Dr. Michael Foster", doctors: 15, patients: 892, appointments: 124, occupancy: 98, color: "#ec4899" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Departments</h1>
          <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Manage hospital departments and resources.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: dept.color + "20" }}>
                  <Building2 className="size-6" style={{ color: dept.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#171c1f]">{dept.name}</h3>
                  <p className="text-sm text-[#64748b]">{dept.head}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors">
                <MoreVertical className="size-5 text-[#64748b]" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="font-bold text-2xl text-[#171c1f]">{dept.doctors}</div>
                <div className="text-xs text-[#64748b]">Doctors</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-[#171c1f]">{dept.patients}</div>
                <div className="text-xs text-[#64748b]">Patients</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-[#171c1f]">{dept.appointments}</div>
                <div className="text-xs text-[#64748b]">Appointments</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-[#64748b]">Occupancy Rate</span>
                <span className="font-bold text-sm" style={{ color: dept.color }}>{dept.occupancy}%</span>
              </div>
              <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${dept.occupancy}%`, backgroundColor: dept.color }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
