import { Link } from "react-router-dom"

export default function ProjectNavbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-linear-to-br from-cyan-400 to-violet-500" />
        <span className="text-xl font-semibold text-white">Zap Auth</span>
      </div>

      <div className="flex items-center gap-8 text-gray-300">
        <Link to="/docs" className="hover:text-white">Documentation</Link>
        <Link to="/projects" className="text-cyan-400">Projects</Link>
        <Link to="/account" className="hover:text-white">Account</Link>
        <button className="text-xl">⎋</button>
      </div>
    </nav>
  )
}
