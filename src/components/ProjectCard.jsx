import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
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
    }
  };

  if (!visible) return null;

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
          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 text-sm text-red-500 hover:bg-white/10 w-full text-left disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete Project"}
          </button>
        </div>
      )}

      <p className="text-xs text-gray-400 mb-2">{id}</p>

      <span className="px-4 py-1 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-black text-sm font-medium">
        Web
      </span>
    </div>
  );
}
