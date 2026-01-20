import { NavLink, Routes, Route } from "react-router-dom";

import SettingsTab from "./SettingsTab";

export default function ProjectTabs() {
  return (
    <div className="px-10 py-6">
      <div className="flex gap-6 border-b border-white/10 mb-8">
        <NavLink to="" end className="pb-2 border-b-2 border-white">
          Users
        </NavLink>
        <NavLink to="settings" className="text-gray-400">
          Settings
        </NavLink>
      </div>

      <Routes>
       
        <Route path="settings" element={<SettingsTab />} />
      </Routes>
    </div>
  );
}
