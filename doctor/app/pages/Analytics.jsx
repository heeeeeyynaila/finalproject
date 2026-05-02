import { TrendingUp, TrendingDown, Users, Calendar, DollarSign, Activity } from "lucide-react";

export default function Analytics() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Analytics & Reports</h1>
        <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Comprehensive insights and performance metrics.</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-[#e0f2fe] rounded-xl flex items-center justify-center"><Users className="size-6 text-[#0369a1]" /></div>
            <div className="flex items-center gap-1 text-[#059669] text-sm font-semibold"><TrendingUp className="size-4" />+12.5%</div>
          </div>
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Total Visitors</div>
          <div className="font-bold text-3xl text-[#171c1f]">8,547</div>
          <div className="text-xs text-[#64748b] mt-2">vs last month</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center"><Calendar className="size-6 text-[#059669]" /></div>
            <div className="flex items-center gap-1 text-[#059669] text-sm font-semibold"><TrendingUp className="size-4" />+8.2%</div>
          </div>
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Appointments</div>
          <div className="font-bold text-3xl text-[#171c1f]">2,341</div>
          <div className="text-xs text-[#64748b] mt-2">vs last month</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-[#fef3c7] rounded-xl flex items-center justify-center"><DollarSign className="size-6 text-[#d97706]" /></div>
            <div className="flex items-center gap-1 text-[#dc2626] text-sm font-semibold"><TrendingDown className="size-4" />-3.1%</div>
          </div>
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Revenue</div>
          <div className="font-bold text-3xl text-[#171c1f]">$547K</div>
          <div className="text-xs text-[#64748b] mt-2">vs last month</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-[#e0e7ff] rounded-xl flex items-center justify-center"><Activity className="size-6 text-[#4f46e5]" /></div>
            <div className="flex items-center gap-1 text-[#059669] text-sm font-semibold"><TrendingUp className="size-4" />+15.3%</div>
          </div>
          <div className="font-semibold text-sm text-[#64748b] uppercase tracking-wide mb-2">Satisfaction</div>
          <div className="font-bold text-3xl text-[#171c1f]">94.6%</div>
          <div className="text-xs text-[#64748b] mt-2">vs last month</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <h3 className="font-bold text-lg text-[#171c1f] mb-6">Patient Flow Trends</h3>
          <div className="h-64 flex items-end justify-between gap-3">
            {[65, 82, 78, 90, 75, 88, 95, 85, 92, 87, 93, 89].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-[#006591] to-[#0ea5e9] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${height}%` }}></div>
                <span className="text-xs text-[#64748b]">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][idx]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
          <h3 className="font-bold text-lg text-[#171c1f] mb-6">Department Distribution</h3>
          <div className="space-y-4">
            {[
              { name: "Cardiology", percent: 28, color: "#0ea5e9" },
              { name: "Neurology", percent: 18, color: "#8b5cf6" },
              { name: "Pediatrics", percent: 24, color: "#f59e0b" },
              { name: "Orthopedics", percent: 15, color: "#10b981" },
              { name: "Oncology", percent: 15, color: "#ef4444" },
            ].map((dept, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-[#171c1f]">{dept.name}</span>
                  <span className="font-bold text-sm" style={{ color: dept.color }}>{dept.percent}%</span>
                </div>
                <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${dept.percent}%`, backgroundColor: dept.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
        <h3 className="font-bold text-lg text-[#171c1f] mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-6 gap-6">
          {[
            { label: "Avg Wait Time", value: "12 min", change: "-15%", positive: true },
            { label: "Bed Occupancy", value: "87%", change: "+5%", positive: true },
            { label: "Staff Utilization", value: "92%", change: "+8%", positive: true },
            { label: "Patient Turnover", value: "4.2 days", change: "-12%", positive: true },
            { label: "Readmission Rate", value: "3.8%", change: "-22%", positive: true },
            { label: "Response Time", value: "8 min", change: "-18%", positive: true },
          ].map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="font-semibold text-xs text-[#64748b] uppercase tracking-wide mb-2">{metric.label}</div>
              <div className="font-bold text-2xl text-[#171c1f] mb-1">{metric.value}</div>
              <div className={`font-semibold text-xs ${metric.positive ? "text-[#059669]" : "text-[#dc2626]"}`}>{metric.change}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
