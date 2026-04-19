import { useState } from "react"
import { login } from "../api/admin.api"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await login(form)
      const accessToken = res.data.accessToken || res.data.data?.accessToken
      const refreshToken = res.data.refreshToken || res.data.data?.refreshToken
      if (!accessToken) throw new Error("No access token returned from server")
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      navigate("/projects")
    } catch (err) {
      
      alert(err.response?.data?.message || err.response?.data?.error || err.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#07070f] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,180,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 480,
          height: 480,
          top: -100,
          right: -120,
          background: "radial-gradient(circle, rgba(0,212,180,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 340,
          height: 340,
          bottom: -80,
          left: -100,
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl p-8"
        style={{
          background: "rgba(13,13,24,0.88)",
          border: "1px solid rgba(0,212,180,0.14)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Version badge */}
        <span
          className="absolute top-4 right-5 text-[9px] tracking-widest uppercase px-2 py-1 rounded"
          style={{
            color: "rgba(0,212,180,0.5)",
            border: "1px solid rgba(0,212,180,0.15)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          v2.4.1
        </span>

        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,212,180,0.1)",
              border: "1px solid rgba(0,212,180,0.28)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 1L2 9.5H7.5L7 15L14 6.5H8.5L9 1Z" fill="#00d4b4" />
            </svg>
          </div>
          <span
            className="text-white font-bold text-[17px] tracking-tight"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Zap<span style={{ color: "#00d4b4" }}>Auth</span>
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[22px] font-bold text-white mb-1 tracking-tight"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Welcome back.
        </h2>
        <p className="text-[13px] mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
          Sign in to your workspace
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email field */}
          <div className="mb-4">
            <label
              className="block text-[10px] tracking-widest uppercase mb-1.5"
              style={{ color: "rgba(0,212,180,0.7)", fontFamily: "'Space Mono', monospace" }}
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              required
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
              style={{
                background: focused === "email" ? "rgba(0,212,180,0.05)" : "rgba(255,255,255,0.04)",
                border: focused === "email"
                  ? "1px solid rgba(0,212,180,0.45)"
                  : "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          </div>

          {/* Password field */}
          <div className="mb-2">
            <label
              className="block text-[10px] tracking-widest uppercase mb-1.5"
              style={{ color: "rgba(0,212,180,0.7)", fontFamily: "'Space Mono', monospace" }}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••••••"
              value={form.password}
              onChange={handleChange}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused("")}
              required
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
              style={{
                background: focused === "password" ? "rgba(0,212,180,0.05)" : "rgba(255,255,255,0.04)",
                border: focused === "password"
                  ? "1px solid rgba(0,212,180,0.45)"
                  : "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          </div>

          {/* Forgot password */}
          <div className="text-right mb-7">
            <Link
              to="/forgot-password"
              className="text-[12px] transition-colors"
              style={{ color: "rgba(0,212,180,0.55)" }}
              onMouseEnter={e => e.target.style.color = "#00d4b4"}
              onMouseLeave={e => e.target.style.color = "rgba(0,212,180,0.55)"}
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            style={{
              background: loading ? "rgba(0,212,180,0.4)" : "linear-gradient(135deg, #00d4b4 0%, #00a896 100%)",
              color: "#041412",
              fontFamily: "'Space Mono', monospace",
              transform: loading ? "none" : undefined,
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
                Signing in...
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M9 1L2 9.5H7.5L7 15L14 6.5H8.5L9 1Z" fill="#041412" />
                </svg>
                Sign in
              </>
            )}
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-7 text-center text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          No account?{" "}
          <Link
            to="/signup"
            className="font-medium transition-colors"
            style={{ color: "#00d4b4" }}
            onMouseEnter={e => e.target.style.textDecoration = "underline"}
            onMouseLeave={e => e.target.style.textDecoration = "none"}
          >
            Create one →
          </Link>
        </p>
      </div>

      {/* Google Fonts */}
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

export default Login
