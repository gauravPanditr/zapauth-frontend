import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../api/admin.api"

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState("")
  const [strength, setStrength] = useState(0)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (name === "password") {
      let s = 0
      if (value.length >= 8) s++
      if (/[A-Z]/.test(value)) s++
      if (/[0-9]/.test(value)) s++
      if (/[^A-Za-z0-9]/.test(value)) s++
      setStrength(s)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signup(form)
      navigate("/login")
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  const strengthColor = ["transparent", "#ef4444", "#f97316", "#eab308", "#00d4b4"]
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"]

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "#07070f" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,180,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none rounded-full" style={{ width: 500, height: 500, top: -120, left: -140, background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ width: 380, height: 380, bottom: -100, right: -100, background: "radial-gradient(circle, rgba(0,212,180,0.08) 0%, transparent 70%)" }} />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl p-8"
        style={{
          background: "rgba(13,13,24,0.88)",
          border: "1px solid rgba(0,212,180,0.14)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Badge */}
        <span
          className="absolute top-4 right-5 text-[9px] tracking-widest uppercase px-2 py-1 rounded"
          style={{ color: "rgba(0,212,180,0.5)", border: "1px solid rgba(0,212,180,0.15)", fontFamily: "'Space Mono', monospace" }}
        >
          FREE
        </span>

        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,212,180,0.1)", border: "1px solid rgba(0,212,180,0.28)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 1L2 9.5H7.5L7 15L14 6.5H8.5L9 1Z" fill="#00d4b4" />
            </svg>
          </div>
          <span className="text-white font-bold text-[17px] tracking-tight" style={{ fontFamily: "'Space Mono', monospace" }}>
            Zap<span style={{ color: "#00d4b4" }}>Auth</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[22px] font-bold text-white mb-1 tracking-tight" style={{ fontFamily: "'Space Mono', monospace" }}>
          Create account.
        </h2>
        <p className="text-[13px] mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
          Start building in seconds
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(0,212,180,0.7)", fontFamily: "'Space Mono', monospace" }}>
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                name="username"
                placeholder="yourname"
                value={form.username}
                onChange={handleChange}
                onFocus={() => setFocused("username")}
                onBlur={() => setFocused("")}
                required
                className="w-full rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: focused === "username" ? "rgba(0,212,180,0.05)" : "rgba(255,255,255,0.04)",
                  border: focused === "username" ? "1px solid rgba(0,212,180,0.45)" : "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(0,212,180,0.7)", fontFamily: "'Space Mono', monospace" }}>
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                required
                className="w-full rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: focused === "email" ? "rgba(0,212,180,0.05)" : "rgba(255,255,255,0.04)",
                  border: focused === "email" ? "1px solid rgba(0,212,180,0.45)" : "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(0,212,180,0.7)", fontFamily: "'Space Mono', monospace" }}>
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                required
                className="w-full rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: focused === "password" ? "rgba(0,212,180,0.05)" : "rgba(255,255,255,0.04)",
                  border: focused === "password" ? "1px solid rgba(0,212,180,0.45)" : "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
            </div>
          </div>

          {/* Password strength */}
          {form.password.length > 0 && (
            <div className="mb-6">
              <div className="flex gap-1.5 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{ background: i <= strength ? strengthColor[strength] : "rgba(255,255,255,0.08)" }}
                  />
                ))}
              </div>
              <p className="text-[11px] mt-1.5" style={{ color: strengthColor[strength] }}>
                {strengthLabel[strength]}
              </p>
            </div>
          )}

          {!form.password.length && <div className="mb-6" />}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            style={{
              background: loading ? "rgba(0,212,180,0.4)" : "linear-gradient(135deg, #00d4b4 0%, #00a896 100%)",
              color: "#041412",
              fontFamily: "'Space Mono', monospace",
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88" }}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            onMouseDown={e => { e.currentTarget.style.transform = "scale(0.98)" }}
            onMouseUp={e => { e.currentTarget.style.transform = "scale(1)" }}
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#041412" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                </svg>
                Creating account...
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M9 1L2 9.5H7.5L7 15L14 6.5H8.5L9 1Z" fill="#041412" />
                </svg>
                Create Account
              </>
            )}
          </button>
        </form>

        {/* Terms */}
        <p className="text-center text-[11px] mt-4" style={{ color: "rgba(255,255,255,0.2)" }}>
          By signing up you agree to our{" "}
          <span style={{ color: "rgba(0,212,180,0.5)", cursor: "pointer" }}>Terms</span>{" "}
          &amp;{" "}
          <span style={{ color: "rgba(0,212,180,0.5)", cursor: "pointer" }}>Privacy</span>
        </p>

        {/* Login link */}
        <p className="mt-5 text-center text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium transition-colors"
            style={{ color: "#00d4b4" }}
            onMouseEnter={e => e.target.style.textDecoration = "underline"}
            onMouseLeave={e => e.target.style.textDecoration = "none"}
          >
            Sign in →
          </Link>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        input::placeholder { color: rgba(255,255,255,0.2); }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(13,13,24,0.9) inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      `}</style>
    </div>
  )
}
