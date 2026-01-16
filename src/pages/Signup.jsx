export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Create your account
        </h2>

        <p className="text-gray-400 mb-6">
          Get started with Zap Auth
        </p>

        <form className="space-y-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-400 to-blue-500 py-3 rounded text-black font-medium hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
