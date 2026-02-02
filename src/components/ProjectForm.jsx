import { useState } from "react";
import { createProject } from "../api/project.api";
import { useNavigate } from "react-router-dom";

export default function ProjectForm() {
  const navigate=useNavigate();
  const [projectName, setProjectName] = useState("");
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

     const payload = {
        projectName,
        appName,
        appEmail,
        
      };

      await createProject(payload);

      
 navigate(`/console/projects/${id}/settings`)
      setProjectName("");
      setAppName("");
      setAppEmail("");
    } catch (err) {
      console.error(err);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 px-14 py-12 bg-linear-to-br from-[#0e121a] to-[#090c13]">
      <h2 className="text-2xl font-semibold mb-8">Project Details</h2>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Project Name</label>
        <input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">App Name</label>
        <input
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3"
        />
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-sm font-medium">App Email</label>
        <input
          type="email"
          value={appEmail}
          onChange={(e) => setAppEmail(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-lg font-medium text-black"
      >
        {loading ? "Creating..." : "Create new project"}
      </button>
    </div>
  );
}
