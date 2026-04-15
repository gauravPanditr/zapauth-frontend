import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import ProjectStatusPanel from "./ProjectStatusPanel";

export default function CreateProjectModal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#04060b] text-white">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/[0.07] bg-[#080c14]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-5 rounded-full bg-linear-to-b from-cyan-400 to-violet-500" />
          <h1 className="text-xs font-semibold tracking-[0.15em] text-slate-300 uppercase">
            Create New Project
          </h1>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5a80] hover:text-slate-200 hover:bg-white/6 transition-all duration-150"
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        <ProjectStatusPanel />
        <ProjectForm />
      </div>
    </div>
  );
}