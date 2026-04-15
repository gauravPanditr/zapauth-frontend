import { useNavigate } from "react-router-dom";
import { MoreVertical, Globe, Trash2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { deleteProjectById } from "../api/project.api";

export default function ProjectCard({ id, name }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    navigate(`/console/projects/${id}/authentication`, {
      state: { projectName: name },
    });
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      setLoading(true);
      await deleteProjectById(id);
      setVisible(false);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete project");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  if (!visible) return null;

  const shortId = id?.slice(0, 16) + "…";

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer rounded-xl border border-[#1a2240] bg-[#0b0f19] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/30 group"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-brrom-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-cyan-400/20 bg-linear-to-br from-cyan-400/10 to-purple-500/10 text-cyan-300">
          <Globe size={18} />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-[#1a2240] text-[#5a6890] hover:bg-[#10162a] hover:text-white hover:border-[#2a3460] transition relative z-10"
        >
          <MoreVertical size={15} />
        </button>
      </div>

      {/* Name */}
      <div className="text-[15px] font-semibold text-[#f0f4ff] mb-1">
        {name}
      </div>

      {/* ID */}
      <div className="text-[11px] font-mono text-[#5a6890] mb-4 tracking-wide">
        {shortId}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative z-10">
        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-0.75 rounded-full border border-cyan-400/20 bg-linear-to-r from-cyan-400/10 to-purple-500/10 text-cyan-300">
          <Globe size={11} /> Web
        </span>

        <span className="flex items-center gap-1 text-[11px] font-mono text-[#5a6890] group-hover:text-[#8898c0] transition">
          Open <ExternalLink size={11} />
        </span>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-2 top-14 w-40 rounded-lg border border-[#1a2240] bg-[#0b0f19] p-1 shadow-lg z-50"
        >
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-mono text-red-500 hover:bg-red-500/10 disabled:opacity-50"
          >
            <Trash2 size={13} />
            {loading ? "Deleting..." : "Delete project"}
          </button>
        </div>
      )}
    </div>
  );
}