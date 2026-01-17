import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import CreateProjectCard from "../components/CreateProjectCard"
import ProjectNavbar from "../components/Project_Navbar"

export default function Projects() {
  // 🔌 API INTEGRATION (leave blank for now)
  const projects = [
    {
      id: "695cf998026f6a860499db79",
      name: "myappedpef",
      type: "Web",
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-[#05070c] via-[#070b14] to-[#04060a] text-white">
      <ProjectNavbar/>

      <main className="px-12 py-12">
        <h1 className="text-3xl font-semibold mb-10">Personal Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
            />
          ))}

          <CreateProjectCard />
        </div>
      </main>

     <footer className="mt-80 px-12 py-6 border-t border-white/10 text-gray-400 text-sm">
        <div className="flex items-center justify-between">
          <span>© 2026 Zap Auth. All Rights Reserved</span>
          <div className="flex gap-6">
            <span>Version 1.0.2</span>
            <span>Docs</span>
            <span>Developer</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
