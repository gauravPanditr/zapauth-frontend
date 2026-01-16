export default function Features() {
  return (
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
    </section>
  )
}
