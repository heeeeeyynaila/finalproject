import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function PatientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const accent = '#006591';
  const accentDark = '#004a6b';

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/patient'), 1200);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      background: 'linear-gradient(-45deg, #f8fafc, #e0f2fe, #bae6fd, #f1f5f9)',
      backgroundSize: '400% 400%',
      animation: 'gradientMove 15s ease infinite',
      position: 'relative', overflow: 'hidden'
    }}>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'float1 12s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'float2 15s ease-in-out infinite reverse' }} />
      <div style={{ position: 'absolute', bottom: '40%', left: '60%', width: '22vw', height: '22vw', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(50px)', animation: 'float1 14s ease-in-out infinite reverse' }} />

      {/* Central Glass Card */}
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', maxWidth: '440px',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '32px', padding: '48px',
        boxShadow: '0 24px 48px -12px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.3)',
        animation: 'cardAppear 0.7s cubic-bezier(0.16,1,0.3,1) forwards'
      }}>
        
        <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#64748b', fontSize: 13, cursor: 'pointer', marginBottom: 32, width: 'fit-content', transition: 'color 0.2s', padding: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
          ← Back to portal selection
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 16px ${accent}40` }}>
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/><path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M12 14v4M10 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>Patient Portal</div>
            <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>Arcio Clinical</div>
          </div>
        </div>

        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 8, color: '#0f172a' }}>Welcome back</h1>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 32 }}>Sign in to access your health records.</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Email address" type="email" value={email} onChange={setEmail} placeholder="you@example.com" accent={accent} required />
          <PasswordField label="Password" value={password} onChange={setPassword} show={showPass} onToggle={() => setShowPass(!showPass)} accent={accent} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569', cursor: 'pointer', fontWeight: 500 }}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} style={{ accentColor: accent }} />
              Remember me
            </label>
            <button type="button" style={{ background: 'none', border: 'none', color: accent, fontSize: 13, cursor: 'pointer', fontWeight: 600, padding: 0 }}>
              Forgot password?
            </button>
          </div>

          <SubmitButton loading={loading} accent={accent} accentDark={accentDark} label="Sign In" />
        </form>
      </div>
    </div>
  );
}

/* ── Shared sub-components ── */
function Field({ label, type, value, onChange, placeholder, accent }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>{label}</label>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder} required
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 14, fontSize: 14,
          background: 'rgba(255,255,255,0.7)', color: '#0f172a',
          border: `1px solid ${focused ? accent : 'rgba(226,232,240,0.8)'}`,
          outline: 'none', transition: 'all 0.2s',
          boxShadow: focused ? `0 0 0 4px ${accent}20` : 'inset 0 2px 4px rgba(0,0,0,0.02)',
        }}
      />
    </div>
  );
}

function PasswordField({ label, value, onChange, show, onToggle, accent }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'} value={value} onChange={e => onChange(e.target.value)}
          placeholder="••••••••" required
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '14px 44px 14px 16px', borderRadius: 14, fontSize: 14,
            background: 'rgba(255,255,255,0.7)', color: '#0f172a',
            border: `1px solid ${focused ? accent : 'rgba(226,232,240,0.8)'}`,
            outline: 'none', transition: 'all 0.2s',
            boxShadow: focused ? `0 0 0 4px ${accent}20` : 'inset 0 2px 4px rgba(0,0,0,0.02)',
          }}
        />
        <button type="button" onClick={onToggle} style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 16, padding: 0
        }}>{show ? '🙈' : '👁'}</button>
      </div>
    </div>
  );
}

function SubmitButton({ loading, accent, accentDark, label }) {
  return (
    <button type="submit" disabled={loading} style={{
      padding: '16px', borderRadius: 14, border: 'none', fontSize: 15, fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
      background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
      color: '#fff', marginTop: 16, transition: 'all 0.2s',
      boxShadow: `0 8px 24px ${accent}40`,
      opacity: loading ? 0.8 : 1,
    }}
    onMouseEnter={e => {
      if (!loading) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 12px 28px ${accent}50`;
      }
    }}
    onMouseLeave={e => {
      if (!loading) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${accent}40`;
      }
    }}
    >
      {loading ? '⏳ Signing in…' : label}
    </button>
  );
}
