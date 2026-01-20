import { useEffect, useState } from "react";
import ProjectNavbar from "../components/Project_Navbar";
import ProjectCard from "../components/ProjectCard";
import CreateProjectCard from "../components/CreateProjectCard";
import { getProjects } from "../api/project.api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await getProjects(); // API call
        setProjects(res.data);           // set projects array
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#05070c] via-[#070b14] to-[#04060a] text-white">
      <ProjectNavbar />

      <main className="px-12 py-12">
        <h1 className="text-3xl font-semibold mb-10">Personal Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              id={p.id}
               name={p.appName} // only name and id exist
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
  );
}
