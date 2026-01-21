import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Authentication() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const projectName = location.state?.projectName || "Project";

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-6">
        <h2 className="text-xl font-semibold mb-6">Authentication</h2>
        <ul className="space-y-3">
          <li className="text-blue-400">Authentication</li>
          <li
            onClick={() =>
              navigate(`/console/projects/${projectId}/settings`, {
                state: { projectName },
              })
            }
            className="text-gray-400 cursor-pointer"
          >
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Authentication</h1>
          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
            {projectName}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-800 mb-6">
          <button className="pb-2 border-b-2 border-white">Users</button>
          <button className="text-gray-400">
            Usage{" "}
            <span className="ml-2 text-xs bg-yellow-500 text-black px-2 rounded">
              Coming Soon
            </span>
          </button>
          <button className="text-gray-400">
            Security Logs{" "}
            <span className="ml-2 text-xs bg-yellow-500 text-black px-2 rounded">
              Coming Soon
            </span>
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-4 mb-6">
          <input
            placeholder="Search by User-ID or user name"
            className="flex-1 bg-gray-900 border border-gray-800 rounded px-4 py-3"
          />
          <button className="bg-gray-700 px-6 rounded">Search</button>
        </div>

        {/* Empty State */}
        <div className="bg-gray-900 rounded-xl h-80 flex items-center justify-center text-gray-400">
          No entries found
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between mt-8 px-2 text-gray-400">
          <div className="flex items-center gap-3">
            <div className="bg-gray-900 border border-gray-800 rounded px-3 py-2 text-white">
              5
            </div>
            <span className="text-sm">users per page</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-gray-900 border border-gray-800 rounded p-2 hover:bg-gray-800">
              ←
            </button>
            <button className="bg-gray-900 border border-gray-800 rounded p-2 hover:bg-gray-800">
              →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
