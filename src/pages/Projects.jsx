import { useEffect, useState } from "react";
import ProjectNavbar from "../components/Project_Navbar";
import ProjectCard from "../components/ProjectCard";

import { getProjects } from "../api/project.api";
import { useNavigate } from "react-router-dom";


export default function Projects() {
  const navigate=useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await getProjects();
        setProjects(res?.data ?? []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please login again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-[#04060b] flex flex-col items-center justify-center gap-4">
        <div className="w-9 h-9 border-2 border-[#1a2240] border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-xs font-mono text-[#5a6890] tracking-wider">
          loading projects…
        </span>
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="min-h-screen bg-[#04060b] flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-lg">
          ⚠
        </div>
        <span className="text-sm font-mono text-red-500">
          {error}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#04060b] text-[#f0f4ff]">
      
      <ProjectNavbar />

      {/* MAIN grows to push footer down */}
      <main className="flex-1 px-10 py-10 max-w-300 w-full mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Personal Projects
            </h1>
            <p className="text-xs font-mono text-[#5a6890] mt-1">
              {projects.length} project{projects.length !== 1 ? "s" : ""} · last synced just now
            </p>
          </div>

          <button
          onClick={()=>{
             navigate('/create')
          }}
          className="px-4 py-2 rounded-md bg-linear-to-r from-cyan-400 to-purple-500 text-black text-sm font-bold hover:opacity-90 transition">
            + New Project
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">

          {projects.length === 0 && (
            <div className="col-span-full flex flex-col items-center py-16 text-[#5a6890] font-mono text-sm">
              no projects yet
            </div>
          )}

          {projects.map((p) => (
            <ProjectCard key={p.id} id={p.id} name={p.appName} />
          ))}

        </div>
      </main>
     

      {/* ✅ Footer stays at bottom */}
      <footer className="border-t border-[#1a2240] px-10 py-5 flex items-center justify-between">
        <span className="text-xs font-mono text-[#5a6890]">
          © 2026 Zap Auth. All rights reserved.
        </span>

        <div className="flex gap-6 items-center">
          <span className="text-xs font-mono text-[#3a4870]">v1.0.2</span>

          <span className="text-xs font-mono text-[#8898c0] hover:text-cyan-400 cursor-pointer transition">
            Docs
          </span>

          <span className="text-xs font-mono text-[#8898c0] hover:text-cyan-400 cursor-pointer transition">
            Developer
          </span>
        </div>
      </footer>
    </div>
  );
}