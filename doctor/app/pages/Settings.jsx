import { User, Lock, Bell, Shield, Globe, Palette, Database, Mail } from "lucide-react";

export default function Settings() {
  const settingsSections = [
    {
      title: "Profile Settings", icon: User, items: [
        { label: "Personal Information", desc: "Update your name, email, and profile photo" },
        { label: "Professional Details", desc: "Manage your specialty and credentials" },
      ]
    },
    {
      title: "Security", icon: Lock, items: [
        { label: "Change Password", desc: "Update your account password" },
        { label: "Two-Factor Authentication", desc: "Add an extra layer of security" },
        { label: "Active Sessions", desc: "Manage devices logged into your account" },
      ]
    },
    {
      title: "Notifications", icon: Bell, items: [
        { label: "Email Notifications", desc: "Configure email alert preferences" },
        { label: "Push Notifications", desc: "Manage mobile and desktop notifications" },
        { label: "SMS Alerts", desc: "Set up text message notifications" },
      ]
    },
    {
      title: "Privacy", icon: Shield, items: [
        { label: "Data Sharing", desc: "Control who can see your information" },
        { label: "Activity Log", desc: "View your account activity history" },
      ]
    },
    {
      title: "Appearance", icon: Palette, items: [
        { label: "Theme", desc: "Choose between light and dark mode" },
        { label: "Language", desc: "Select your preferred language" },
      ]
    },
    {
      title: "System", icon: Database, items: [
        { label: "Data Export", desc: "Download your account data" },
        { label: "Integrations", desc: "Connect with third-party services" },
        { label: "API Access", desc: "Manage API keys and webhooks" },
      ]
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bold text-[30px] text-[#171c1f] tracking-[-0.75px] leading-[36px] mb-1">Settings</h1>
        <p className="font-medium text-[16px] text-[#40484e] leading-[24px]">Manage your account preferences and system configuration.</p>
      </div>

      <div className="bg-gradient-to-r from-[#006591] to-[#0ea5e9] rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center gap-6">
          <div className="size-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center font-bold text-3xl">DA</div>
          <div>
            <h2 className="font-bold text-2xl mb-2">Dr. Arcio Admin</h2>
            <p className="text-base opacity-90 mb-3">Senior Clinical Lead</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2"><Mail className="size-4" /> <span>arcio.admin@clinicsanctuary.com</span></div>
            </div>
          </div>
          <button className="ml-auto px-6 py-3 bg-white text-[#0369a1] font-semibold rounded-xl hover:bg-[#f8fafc] transition-all">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {settingsSections.map((section, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-[#e0f2fe] rounded-xl flex items-center justify-center">
                <section.icon className="size-5 text-[#0369a1]" />
              </div>
              <h3 className="font-bold text-lg text-[#171c1f]">{section.title}</h3>
            </div>
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center justify-between p-4 rounded-xl hover:bg-[#f8fafc] transition-all cursor-pointer">
                  <div>
                    <div className="font-semibold text-sm text-[#171c1f] mb-1">{item.label}</div>
                    <div className="text-xs text-[#64748b]">{item.desc}</div>
                  </div>
                  <svg className="size-5 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white border border-[#fee2e2] rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-[#dc2626] mb-2">Danger Zone</h3>
            <p className="text-sm text-[#64748b] mb-4">Irreversible actions that affect your account permanently.</p>
            <button className="px-6 py-3 bg-[#fee2e2] text-[#dc2626] font-semibold rounded-xl hover:bg-[#fecaca] transition-all">
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
