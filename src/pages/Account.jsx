import { useEffect, useState } from "react";
import AccountHeader from "../components/account/AccountHeader";
import AccountSection from "../components/account/AccountSection";
import DangerZone from "../components/account/DangerZone";
import { getAdminProfile } from "../api/admin.api";

export default function Account() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

 useEffect(() => {
  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await getAdminProfile();   // ✅ axios response
      console.log("PROFILE RESPONSE:", res.data); // 🔥 debug
      setAdmin(res.data);              // ✅ FIX
    } catch (err) {
      console.error("Error fetching admin profile:", err);
      setError("Failed to load account data. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);



 
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading account...
      </div>
    );
  }

  // Show error if fetch failed
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070c] text-white overflow-y-auto scroll-smooth">
      <AccountHeader />

      <div className="max-w-6xl mx-auto px-10 py-14 space-y-10">
        {/* Name */}
        <AccountSection
          title="Name"
          description="Do not change your name frequently"
          value={ admin?.username|| ""}
          type="text"
          button="Update"
        />

        {/* Email */}
        <AccountSection
          title="Email"
          description="Do not change your email frequently"
          value={admin?.email || ""}
          type="email"
          button="Update"
        />

        {/* Password */}
        <AccountSection
          title="Password"
          description="Change your password frequently to keep your account secure"
          value="************"
          type="password"
          button="Update"
        />

        <DangerZone />
      </div>

      <footer className="border-t border-white/10 px-10 py-6 text-sm text-gray-400 flex justify-between">
        <span>© 2026 Zap Auth. All Rights Reserved</span>
        <span>Version 1.0.2</span>
      </footer>
    </div>
  );
}
