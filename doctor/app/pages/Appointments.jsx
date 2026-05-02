import { Calendar, Clock, Search, Filter, Plus, Video, MapPin } from "lucide-react";

export default function Appointments() {
  const appointments = [
    { patient: "John Anderson", doctor: "Dr. Sarah Jenkins", time: "09:00 AM", duration: "30 min", type: "In-Person", department: "Cardiology", status: "Confirmed", room: "Room 301" },
    { patient: "Emily Watson", doctor: "Dr. Marcus Chen", time: "09:30 AM", duration: "45 min", type: "Video Call", department: "Neurology", status: "Confirmed", room: "Virtual" },
    { patient: "Michael Brown", doctor: "Dr. Elena Rodriguez", time: "10:00 AM", duration: "30 min", type: "In-Person", department: "Pediatrics", status: "Waiting", room: "Room 205" },
    { patient: "Sarah Davis", doctor: "Dr. David Kim", time: "10:30 AM", duration: "60 min", type: "In-Person", department: "Orthopedics", status: "In Progress", room: "Room 412" },
    { patient: "James Wilson", doctor: "Dr. Samantha Lee", time: "11:00 AM", duration: "45 min", type: "In-Person", department: "Oncology", status: "Confirmed", room: "Room 508" },
    { patient: "Lisa Martinez", doctor: "Dr. Michael Foster", time: "11:30 AM", duration: "30 min", type: "Video Call", department: "Emergency Medicine", status: "Rescheduled", room: "Virtual" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-[#ecfdf5] text-[#059669]";
      case "Waiting": return "bg-[#fef3c7] text-[#d97706]";
      case "In Progress": return "bg-[#dbeafe] text-[#0369a1]";
      case "Rescheduled": return "bg-[#fee2e2] text-[#dc2626]";
      default: return "bg-[#f1f5f9] text-[#64748b]";
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Appointments</h1>
          <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Today's schedule and upcoming appointments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-4 py-3 rounded-xl font-semibold hover:bg-[#f8fafc] transition-all">
            <Calendar className="size-5" /> Select Date
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            <Plus className="size-5" /> New Appointment
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#006591] to-[#0ea5e9] rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm uppercase tracking-wide opacity-80 mb-2">Today's Date</div>
            <div className="font-bold text-3xl">Tuesday, March 24, 2026</div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-bold text-3xl">23</div>
              <div className="text-sm opacity-80">Total</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl">18</div>
              <div className="text-sm opacity-80">Confirmed</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl">5</div>
              <div className="text-sm opacity-80">Pending</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8]" />
          <input type="text" placeholder="Search appointments..." className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-12 pr-4 py-3 text-sm text-[#171c1f] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
        </div>
        <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-4 py-3 rounded-xl font-semibold hover:bg-[#f8fafc] transition-all">
          <Filter className="size-5" /> Filter
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-center min-w-[80px]">
                  <div className="font-bold text-xl text-[#171c1f]">{appointment.time}</div>
                  <div className="text-xs text-[#64748b] flex items-center justify-center gap-1 mt-1">
                    <Clock className="size-3" /> {appointment.duration}
                  </div>
                </div>
                <div className="h-16 w-px bg-[#e2e8f0]"></div>
                <div>
                  <h3 className="font-bold text-lg text-[#171c1f] mb-1">{appointment.patient}</h3>
                  <p className="font-semibold text-sm text-[#64748b] mb-2">with {appointment.doctor} • {appointment.department}</p>
                  <div className="flex items-center gap-4">
                    {appointment.type === "Video Call" ? (
                      <div className="flex items-center gap-1.5 text-[#0369a1] text-xs font-semibold">
                        <Video className="size-4" /> Video Call
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[#64748b] text-xs font-semibold">
                        <MapPin className="size-4" /> {appointment.room}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
