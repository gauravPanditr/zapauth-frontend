import { NavLink, useParams } from "react-router-dom";

export default function ProjectSidebar() {
  const { projectId } = useParams();

  return (
    <aside className="w-64 border-r border-gray-800 p-6">
      <h2 className="text-xl font-semibold mb-6">Authentication</h2>

      <ul className="space-y-3">
        <NavLink
          to={`/console/projects/${projectId}/authentication`}
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-gray-400"
          }
        >
          Authentication
        </NavLink>

        <NavLink
          to={`/console/projects/${projectId}/settings`}
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-gray-400"
          }
        >
          Settings
        </NavLink>
      </ul>
    </aside>
  );
}
