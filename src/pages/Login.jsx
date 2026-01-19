import { useState } from "react"
import { login } from "../api/admin.api"
import { useNavigate ,Link} from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
      const [form, setForm] = useState({
        email: "",
        password: "",
      })
      const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await login(form); 

    // Check what the response looks like
    console.log("Login response:", res.data);

    // Adjust this based on backend response shape
    const accessToken = res.data.accessToken || res.data.data?.accessToken;
    const refreshToken = res.data.refreshToken || res.data.data?.refreshToken;

    if (!accessToken) {
      throw new Error("No access token returned from server");
    }

    // Save tokens to localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    alert("Login successful");
    navigate("/projects");

    console.log("Logged in user:", form.email);
  } catch (err) {
    console.error(err);
    alert(
      err.response?.data?.message || err.response?.data?.error || err.message || "Login failed"
    );
  }
};


  return (
     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Login your account
        </h2>

        
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
          className="w-full bg-linear-to-r from-cyan-400 to-blue-500 py-3 rounded text-black font-medium cursor-pointer"
        >
          Login
        </button>
       
  <p className="mt-6 text-center text-gray-400">
    Do not have an account?{" "}
    <Link
      to="/signup"
      className="text-white font-semibold hover:underline"
    >
      Sign up
    </Link>
  </p>
      </form>
    </div>
  )
}

export default Login;
