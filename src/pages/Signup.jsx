import { useState } from "react"
import { Link } from "react-router-dom"
import { signup } from "../api/admin.api"
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(form)
     // localStorage.setItem("accessToken", res.data.accessToken)

    navigate("/projects")
      alert("Signup successful")

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Create your account
        </h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full mb-4 bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-6 bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
        />

        <button
          type="submit"
          className="cursor-pointer w-full bg-linear-to-r from-cyan-400 to-blue-500 py-3 rounded text-black font-medium"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
