import { Link, useLocation, useNavigate } from "react-router-dom"

export default function ProjectNavbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const linkClass = (path) =>
    location.pathname === path
      ? "text-cyan-400"
      : "hover:text-white"

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate("/")
  }

  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-white/10 bg-[#0b0f16]">
      {/* Logo */}
      <Link to="/projects" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-linear-to-br from-cyan-400 to-violet-500" />
        <span className="text-xl font-semibold text-white">Zap Auth</span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-gray-300">
        <Link to="/docs" className={linkClass("/docs")}>
          Documentation
        </Link>

        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>

        <Link to="/account" className={linkClass("/account")}>
          Account
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-xl hover:text-red-400 transition"
          title="Logout"
        >
          ⎋
        </button>
      </div>
    </nav>
  )
}
