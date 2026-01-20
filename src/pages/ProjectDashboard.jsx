import { useParams } from "react-router-dom";
import ProjectSidebar from "../components/ProjectSidebar";
import ProjectTopbar from "../components/ProjectTopbar";
import ProjectTabs from "../components/ProjectTabs";

export default function ProjectDashboard() {
  const { projectId } = useParams();

  return (
    <div className="flex min-h-screen bg-[#05070c] text-white">
      {/* Left Sidebar */}
      <ProjectSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <ProjectTopbar />
        <ProjectTabs projectId={projectId} />
      </div>
    </div>
  );
}
