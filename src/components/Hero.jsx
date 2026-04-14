import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#060810] text-white">

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* Glow orbs */}
        <div className="absolute -top-30 left-1/2 -translate-x-[60%] w-125 h-125 rounded-full bg-blue-600 blur-[90px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 right-[5%] w-75 h-75 rounded-full bg-purple-500 blur-[90px] opacity-18 pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-medium px-4 py-1.5 rounded-full mb-7 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          Now with passkey support
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="bg-linear-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Simplify
          </span>
          <br />
          Secure Authentication
        </h1>

        {/* Subheading */}
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          Write hundreds of lines of code to create exceptional apps —{" "}
          <em className="text-violet-300 font-semibold not-italic">not</em> to
          set up authentication. We handle the hard parts.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-linear-to-r from-blue-500 to-violet-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get Started →
          </button>
          <button className="border border-blue-400/35 text-blue-300 px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
            View Documentation
          </button>
        </div>
      </section>
{/* API Integration Section */}
 <section
      id="features"
      className="bg-gray-950 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-cyan-400">Powerful Features</span> for Modern
          Authentication
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Everything you need to implement secure, scalable authentication
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card */}
        <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3">
            Multiple Authentication Methods
          </h3>
          <p className="text-gray-400 mb-4">
            Flexible login options including email/password, Magic URL, and OTP.
          </p>
          <ul className="space-y-2 text-cyan-400">
            <li>✔ Email / Password</li>
            <li>✔ Passwordless Login</li>
            <li>✔ Email OTP</li>
          </ul>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3">
            Advanced User Management
          </h3>
          <p className="text-gray-400 mb-4">
            Powerful tools for registration, verification, and account security.
          </p>
          <ul className="space-y-2 text-cyan-400">
            <li>✔ Easy Registration</li>
            <li>✔ Email Verification</li>
            <li>✔ Account Controls</li>
          </ul>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3">
            API Security
          </h3>
          <p className="text-gray-400 mb-4">
            Robust API protection for safe and controlled access.
          </p>
          <ul className="space-y-2 text-cyan-400">
            <li>✔ Project Keys</li>
            <li>✔ Key Rotation</li>
            <li>✔ Access Control</li>
          </ul>
        </div>
      </div>
    </section>  </div>
  )
}