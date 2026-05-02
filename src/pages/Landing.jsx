import { useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';

const roles = [
  {
    id: 'patient',
    label: 'Patient Portal',
    subtitle: 'Your child\'s health, your way',
    description: 'Book pediatric appointments, view medical records, track vaccinations, and stay connected with your child\'s care team.',
    path: '/login/patient',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 animate-heartbeat text-[#006591]">
        <path d="M24 40.5s-14-9.5-14-18a7 7 0 0114-4.5 7 7 0 0114 4.5c0 8.5-14 18-14 18z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(0,101,145,0.1)"/>
        <path d="M24 18v8M20 22h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#006591',
    bg: 'bg-white/60 backdrop-blur-xl',
    border: 'border-white/50',
  },
  {
    id: 'doctor',
    label: 'Doctor Portal',
    subtitle: 'Pediatric excellence',
    description: 'Manage young patients, review analytics, coordinate with departments, and deliver world-class pediatric healthcare.',
    path: '/login/doctor',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#059669]">
        <path d="M16 8h16v12a8 8 0 01-16 0V8z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(5,150,105,0.1)"/>
        <path d="M10 8h28M24 28v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M18 34.5A10 10 0 008 44M30 34.5A10 10 0 0140 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#059669',
    bg: 'bg-white/60 backdrop-blur-xl',
    border: 'border-white/50',
  },
  {
    id: 'admin',
    label: 'Admin Portal',
    subtitle: 'System control',
    description: 'Oversee operations, manage staff, configure system settings, and access comprehensive reports.',
    path: '/login/admin',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#6d28d9]" style={{ animation: 'spin 8s linear infinite' }}>
        <path d="M24 4l4.5 8.5L40 14l-8 7.5 2 11.5L24 28l-10 5 2-11.5L8 14l11.5-1.5L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(109,40,217,0.1)"/>
        <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
        <path d="M18 36l-4 6h20l-4-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#6d28d9',
    bg: 'bg-white/60 backdrop-blur-xl',
    border: 'border-white/50',
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh', 
      color: '#171c1f', 
      overflowX: 'hidden', 
      fontFamily: 'Inter, sans-serif', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.15); }
          28% { transform: scale(1); }
          42% { transform: scale(1.15); }
          70% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes floatIcon {
          0%   { transform: translateY(0) rotate(0deg); }
          25%  { transform: translateY(-18px) rotate(5deg); }
          50%  { transform: translateY(-6px) rotate(-3deg); }
          75%  { transform: translateY(-22px) rotate(4deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-up-fade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle {
          0%,100% { opacity: 0.25; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-heartbeat { animation: heartbeat 2.5s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animated-bg {
          background: linear-gradient(-45deg, #f0f9ff, #e0f2fe, #f0fdfa, #eff6ff, #fdf4ff);
          background-size: 400% 400%;
          animation: gradientMove 20s ease infinite;
        }
        .bg-icon {
          position: absolute; pointer-events: none; opacity: 0.12;
          animation: floatIcon var(--dur, 8s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
      `}</style>

      {/* ── Children's Hospital Animated Background ── */}
      <div className="animated-bg" style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        {/* Soft color blobs */}
        <div style={{ position: 'absolute', top: '5%', left: '5%', width: '45vw', height: '45vw', maxWidth: 550, background: 'radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'float1 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: '55vw', height: '55vw', maxWidth: 650, background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'float2 15s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '35%', right: '15%', width: '35vw', height: '35vw', maxWidth: 450, background: 'radial-gradient(circle, rgba(134,239,172,0.09) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'float1 18s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', bottom: '25%', left: '20%', width: '30vw', height: '30vw', maxWidth: 350, background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', animation: 'float2 14s ease-in-out infinite reverse' }} />

        {/* Floating kid-friendly medical SVG icons */}
        {/* Teddy Bear */}
        <svg className="bg-icon" style={{ top: '8%', left: '6%', width: 64, '--dur': '9s', '--delay': '0s' }} viewBox="0 0 64 64" fill="#006591">
          <circle cx="20" cy="14" r="8"/><circle cx="44" cy="14" r="8"/><ellipse cx="32" cy="36" rx="18" ry="20"/><circle cx="25" cy="30" r="2.5" fill="#fff"/><circle cx="39" cy="30" r="2.5" fill="#fff"/><ellipse cx="32" cy="36" rx="4" ry="3" fill="#f9a8d4"/>
        </svg>
        {/* Heart with cross */}
        <svg className="bg-icon" style={{ top: '15%', right: '12%', width: 48, '--dur': '7s', '--delay': '1s' }} viewBox="0 0 48 48" fill="#f472b6">
          <path d="M24 42s-16-10-16-20a8 8 0 0116-2 8 8 0 0116 2c0 10-16 20-16 20z"/><rect x="22" y="16" width="4" height="12" rx="1" fill="#fff"/><rect x="18" y="20" width="12" height="4" rx="1" fill="#fff"/>
        </svg>
        {/* Star */}
        <svg className="bg-icon" style={{ top: '55%', left: '3%', width: 40, '--dur': '11s', '--delay': '2s', animation: 'twinkle 4s ease-in-out infinite, floatIcon 11s ease-in-out infinite' }} viewBox="0 0 40 40" fill="#fbbf24">
          <path d="M20 2l5 10 11 2-8 7 2 11-10-5-10 5 2-11-8-7 11-2z"/>
        </svg>
        {/* Bandaid */}
        <svg className="bg-icon" style={{ bottom: '20%', right: '8%', width: 56, '--dur': '10s', '--delay': '0.5s', transform: 'rotate(30deg)' }} viewBox="0 0 56 56" fill="#fb923c">
          <rect x="4" y="18" width="48" height="20" rx="10"/><circle cx="20" cy="28" r="2" fill="#fff"/><circle cx="28" cy="28" r="2" fill="#fff"/><circle cx="36" cy="28" r="2" fill="#fff"/>
        </svg>
        {/* Stethoscope */}
        <svg className="bg-icon" style={{ top: '70%', left: '15%', width: 52, '--dur': '8s', '--delay': '3s' }} viewBox="0 0 52 52" fill="none" stroke="#006591" strokeWidth="3" strokeLinecap="round">
          <path d="M14 8v16a12 12 0 0024 0V8"/><circle cx="38" cy="36" r="4" fill="#006591"/><path d="M10 8a4 4 0 01-4 4M42 8a4 4 0 004 4"/>
        </svg>
        {/* Small star */}
        <svg className="bg-icon" style={{ top: '30%', left: '45%', width: 28, '--dur': '6s', '--delay': '1.5s', animation: 'twinkle 3s ease-in-out infinite 0.5s, floatIcon 6s ease-in-out infinite 1.5s' }} viewBox="0 0 28 28" fill="#a78bfa">
          <path d="M14 1l3.5 7 7.5 1.5-5.5 5 1.5 8L14 19l-7 3.5 1.5-8L3 9.5 10.5 8z"/>
        </svg>
        {/* Syringe */}
        <svg className="bg-icon" style={{ bottom: '35%', right: '25%', width: 44, '--dur': '12s', '--delay': '2s', transform: 'rotate(-30deg)' }} viewBox="0 0 44 44" fill="#38bdf8">
          <rect x="14" y="4" width="8" height="30" rx="3"/><rect x="12" y="14" width="12" height="3" rx="1"/><rect x="12" y="20" width="12" height="3" rx="1"/><path d="M18 34v6" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        {/* Rainbow arc */}
        <svg className="bg-icon" style={{ top: '5%', left: '55%', width: 80, '--dur': '14s', '--delay': '0s', opacity: 0.07 }} viewBox="0 0 80 40" fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M5 40 A35 35 0 0175 40" stroke="#ef4444"/><path d="M12 40 A28 28 0 0168 40" stroke="#f97316"/><path d="M19 40 A21 21 0 0161 40" stroke="#eab308"/><path d="M26 40 A14 14 0 0154 40" stroke="#22c55e"/><path d="M33 40 A7 7 0 0147 40" stroke="#3b82f6"/>
        </svg>
        {/* Small heart */}
        <svg className="bg-icon" style={{ bottom: '10%', left: '40%', width: 32, '--dur': '7s', '--delay': '4s' }} viewBox="0 0 32 32" fill="#f9a8d4">
          <path d="M16 28s-10-7-10-14a5.5 5.5 0 0111-1.5 5.5 5.5 0 0111 1.5c0 7-12 14-12 14z"/>
        </svg>
        {/* Pill */}
        <svg className="bg-icon" style={{ top: '45%', right: '5%', width: 36, '--dur': '9s', '--delay': '1s', transform: 'rotate(45deg)' }} viewBox="0 0 36 18" fill="#34d399">
          <rect width="36" height="18" rx="9"/><rect x="18" width="18" height="18" rx="9" fill="#6ee7b7"/>
        </svg>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', background: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(14,165,233,0.3)',
          }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" opacity="0.3"/>
              <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.3px', color: '#0f172a' }}>Arcio Health</span>
        </div>
      </nav>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>
        {/* ── Hero ── */}
        <section style={{ position: 'relative', zIndex: 5, textAlign: 'center', padding: '40px 20px 32px' }}>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 600, color: '#006591',
              background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)',
              padding: '6px 16px', borderRadius: 20, marginBottom: 16,
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)', backdropFilter: 'blur(10px)'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block' }} />
              Clinical Management Platform
            </span>
          </div>

          <h1 className="animate-slide-up" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-1.5px', opacity: 0,
            color: '#0f172a', marginBottom: 16, animationDelay: '0.2s'
          }}>
            One Platform.<br />
            <span style={{ color: '#0ea5e9' }}>Complete Care.</span>
          </h1>

          <p className="animate-slide-up" style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#475569',
            maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.5, opacity: 0, animationDelay: '0.3s'
          }}>
            Streamlined pediatric healthcare management for parents, doctors, and administrators — keeping every child healthy and happy.
          </p>
        </section>

        {/* ── Role Cards (Glassmorphism) ── */}
        <section style={{ position: 'relative', zIndex: 5, maxWidth: 1000, margin: '0 auto', padding: '0 20px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, width: '100%' }}>
          {roles.map((role, i) => (
            <RoleCard key={role.id} role={role} delay={i * 100} onClick={() => navigate(role.path)} />
          ))}
        </section>
      </div>
    </div>
  );
}

function RoleCard({ role, delay, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`animate-slide-up group ${role.bg}`}
      style={{
        animationDelay: `${0.4 + delay / 1000}s`, opacity: 0,
        border: `1px solid var(--tw-border-opacity, 1)`,
        borderColor: 'rgba(255,255,255,0.6)',
        borderRadius: 24, padding: '24px', textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 4px 24px -1px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)';
        e.currentTarget.style.boxShadow = `0 20px 40px -8px rgba(0,0,0,0.1), 0 0 0 2px ${role.color}30, inset 0 0 0 1px rgba(255,255,255,0.6)`;
        e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
        e.currentTarget.style.boxShadow = '0 4px 24px -1px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: 'rgba(255,255,255,0.9)',
          border: `1px solid ${role.color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 8px 16px ${role.color}15`,
        }}>
          {role.icon}
        </div>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#0f172a' }}>{role.label}</h2>
          <p style={{ fontSize: 13, color: role.color, fontWeight: 600, margin: 0 }}>{role.subtitle}</p>
        </div>
      </div>
      <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.5, margin: 0 }}>{role.description}</p>
    </button>
  );
}
