import { 
  Briefcase, Users, Calendar, UserPlus, TrendingUp, Activity, Droplet, Flame, Stethoscope, Brain, CheckCircle
} from "lucide-react";

export default function Dashboard() {
  const metrics = [
    { label: "Total Doctors", value: "23", icon: Briefcase, bgColor: "#e0f2fe", iconColor: "#0369a1" },
    { label: "Total Patients", value: "1,847", icon: Users, bgColor: "#ccfbf1", iconColor: "#0f766e" },
    { label: "Appointments Today", value: "23", icon: Calendar, bgColor: "gradient", iconColor: "#ffffff" },
    { label: "New Registrations", value: "15", icon: UserPlus, bgColor: "#e0e7ff", iconColor: "#4338ca" },
  ];

  const services = [
    { name: "Pulmonologie", desc: "Patient Throughput Optimization", progress: 85, change: "+12.5%", icon: Activity, bgColor: "#f0f9ff", iconColor: "#0284c7", barColor: "#0ea5e9" },
    { name: "Hématologie", desc: "Laboratory Integration Efficiency", progress: 72, change: "+8.2%", icon: Droplet, bgColor: "#fff1f2", iconColor: "#e11d48", barColor: "#f43f5e" },
    { name: "Néphrologie", desc: "Dialysis Unit Resource Load", progress: 45, change: "-2.4%", icon: Flame, bgColor: "#fffbeb", iconColor: "#d97706", barColor: "#f59e0b", negative: true },
    { name: "Gastro-entérologie", desc: "Endoscopy Suite Scheduling", progress: 91, change: "+18.0%", icon: Stethoscope, bgColor: "#eef2ff", iconColor: "#4f46e5", barColor: "#6366f1" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">
          Clinical Sanctuary Overview
        </h1>
        <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">
          Real-time performance metrics and diagnostic insights.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`${metric.bgColor === "gradient" ? "bg-gradient-to-br from-[#006591] to-[#0ea5e9]" : "bg-white/70 backdrop-blur-sm"} border border-white/20 rounded-2xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`font-semibold text-sm uppercase tracking-wide mb-2 ${metric.bgColor === "gradient" ? "text-white/80" : "text-[#64748b]"}`}>
                  {metric.label}
                </div>
                <div className={`font-bold text-4xl ${metric.bgColor === "gradient" ? "text-white" : "text-[#171c1f]"}`}>
                  {metric.value}
                </div>
              </div>
              <div className={`size-14 rounded-2xl flex items-center justify-center ${metric.bgColor === "gradient" ? "bg-white/20 backdrop-blur-sm" : ""}`} style={metric.bgColor !== "gradient" ? { backgroundColor: metric.bgColor } : {}}>
                <metric.icon className="size-6" style={{ color: metric.iconColor }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-xl text-[#171c1f]">Services Performance</h2>
            <button className="font-semibold text-sm text-[#0369a1] hover:underline">View Analytics</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border border-[rgba(226,232,240,0.5)] rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: service.bgColor }}>
                    <service.icon className="size-5" style={{ color: service.iconColor }} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${service.negative ? "bg-[#fff1f2] text-[#e11d48]" : "bg-[#ecfdf5] text-[#059669]"}`}>
                    {service.change}
                  </div>
                </div>
                <h3 className="font-semibold text-base text-[#171c1f] mb-1">{service.name}</h3>
                <p className="text-xs text-[#64748b] mb-4">{service.desc}</p>
                <div className="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${service.progress}%`, backgroundColor: service.barColor }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl text-[#171c1f] mb-6">AI Insights</h2>
          <div className="bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="size-12 bg-white/30 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4">
                <Brain className="size-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-white leading-tight mb-4">Predictive Diagnostic Alert</h3>
              <p className="text-sm text-[#e0f2fe] leading-relaxed mb-8">
                System identified a 14% uptick in respiratory anomalies across the North Sector. Recommend prophylactic resource allocation for Pulmonology.
              </p>
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-3 mb-3 flex items-center gap-3">
                <CheckCircle className="size-5 text-[#6ee7b7]" />
                <span className="font-semibold text-xs text-white">Model Confidence: 98.4%</span>
              </div>
              <button className="w-full bg-white text-[#0369a1] font-semibold text-base py-4 rounded-2xl hover:bg-[#f8fafc] transition-colors">
                Generate Full Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
