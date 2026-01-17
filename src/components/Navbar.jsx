
import { Link } from "react-router-dom"


export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 text-white">
      <div className="font-bold text-xl">Zap Auth</div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400">Features</Link>
        <Link to="/" className="hover:text-blue-400">Security</Link>
        <Link to="/" className="hover:text-blue-400">Pricing</Link>
        <Link to="/" className="hover:text-blue-400">Documentation</Link>
      </div>
      <button className="ml-6 bg-linear-to-r from-blue-400 to-purple-500 px-4 py-2 rounded text-white hover:opacity-90">
        Console
      </button>
    </nav>
  )
}
