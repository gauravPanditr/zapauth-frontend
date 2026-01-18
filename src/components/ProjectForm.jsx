export default function ProjectForm() {
  return (
    <div className="w-1/2 px-14 py-12 bg-linear-to-br from-[#0e121a] to-[#090c13]">
      <h2 className="text-2xl font-semibold mb-8">Project Details</h2>

      {/* Project Name */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">
          Project Name
        </label>
        <p className="text-xs text-gray-400 mb-2">
          Project name will be used to identify the project in the console
        </p>
        <input
          type="text"
          placeholder="Enter Project Name"
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
        />
      </div>

      {/* App Name */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">
          App Name
        </label>
        <p className="text-xs text-gray-400 mb-2">
          App name will be used for communication purposes
        </p>
        <input
          type="text"
          placeholder="Enter App Name"
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
        />
      </div>

      {/* App Email */}
      <div className="mb-8">
        <label className="block mb-2 text-sm font-medium">
          App Email
        </label>
        <p className="text-xs text-gray-400 mb-2">
          App email will be used for communication purposes
        </p>
        <input
          type="email"
          placeholder="Enter App Email"
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
        />
      </div>

      <button className="bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-lg font-medium text-black hover:opacity-90 transition">
        Create new project
      </button>
    </div>
  );
}
