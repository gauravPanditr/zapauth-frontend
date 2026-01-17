
const Login = () => {
      const [form, setForm] = useState({
        email: "",
        password: "",
      })
      const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
 const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(form)
      alert("Login successful")
      console.log(username);
      
    } catch (err) {
      alert(err.response?.data?.message || "Login failed")
    }
  }
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
          className="w-full bg-linear-to-r from-cyan-400 to-blue-500 py-3 rounded text-black font-medium"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
