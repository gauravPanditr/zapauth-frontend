import { Link, useLocation, useNavigate } from "react-router-dom"

export default function ProjectNavbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const linkClass = (path) =>
    `text-sm tracking-wide transition-colors duration-150 ${
      location.pathname === path
        ? "text-cyan-400"
        : "text-[#6b7a9e] hover:text-slate-100"
    }`

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate("/")
  }

  return (
    <nav className="flex items-center justify-between px-10 h-16 border-b border-white/8 bg-[#0b0f16]">

      {/* Logo */}
      <Link to="/projects" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-lg bg-linear-to-br from-cyan-400 to-violet-500 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 stroke-white fill-none stroke-[2.5]"
            viewBox="0 0 24 24"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <span className="text-[17px] font-semibold text-slate-50 tracking-tight">
          Zap Auth
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <Link to="/docs" className={linkClass("/docs")}>
          Documentation
        </Link>

        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>

        <Link to="/account" className={linkClass("/account")}>
          Account
        </Link>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          title="Logout"
          className="p-1.5 rounded-md text-[#6b7a9e] hover:text-red-400 hover:bg-red-400/8 transition-all duration-150"
        >
          <svg
            className="w-4.5 h-4.5 stroke-current fill-none stroke-2"
            viewBox="0 0 24 24"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>

    </nav>
  )
}