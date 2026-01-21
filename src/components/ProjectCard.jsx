import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ id, name }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
const handleClick = () => {
    navigate(`/console/projects/${id}/authentication`, { state: { projectName: name } });
  };
  return (
    <div
      onClick={handleClick}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition cursor-pointer"
    >
        <h2 className="text-xl font-semibold">{name}</h2>
      {/* 3-dot menu */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-12 right-4 bg-[#0b0f16] border border-white/10 rounded-lg z-20"
        >
          <button className="px-4 py-2 text-sm text-red-500 hover:bg-white/10 w-full text-left">
            Delete Project
          </button>
        </div>
      )}

      <p className="text-xs text-gray-400 mb-2">{id}</p>
      <h3 className="text-xl font-semibold text-white mb-6">{name}</h3>

      <span className="px-4 py-1 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-black text-sm font-medium">
        Web
      </span>
    </div>
  );
}
