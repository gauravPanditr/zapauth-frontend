import ProjectForm from "./ProjectForm";
import ProjectStatusPanel from "./ProjectStatusPanel";

export default function CreateProjectModal() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-lg font-semibold tracking-wide">
          CREATE NEW PROJECT
        </h1>
        <button className="text-2xl opacity-70 hover:opacity-100">×</button>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Left Panel */}
        <ProjectStatusPanel />

        {/* Right Form */}
        <ProjectForm />
      </div>
    </div>
  );
}
