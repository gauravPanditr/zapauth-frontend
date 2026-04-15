import { useEffect, useState } from "react";
import AccountHeader from "../components/account/AccountHeader";
import AccountSection from "../components/account/AccountSection";
import DangerZone from "../components/account/DangerZone";
import { getAdminProfile, updateAccount } from "../api/admin.api";

export default function Account() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await getAdminProfile();
        console.log("PROFILE RESPONSE:", res.data);
        setAdmin(res?.data ?? null);
      } catch (err) {
        console.error("Error fetching admin profile:", err);
        setError("Failed to load account data. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (field, value) => {
    if (!value || value.trim() === "") return;

   
    if (field === "password" && value.trim().length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await updateAccount({ [field]: value });

      setAdmin((prev) =>
        prev ? { ...prev, [field]: value } : prev
      );

      setError(null);
    } catch (err) {
      console.error("Update failed:", err);
      setError("Update failed. Try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // adjust if needed
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#04060b] flex flex-col items-center justify-center gap-4">
        <div className="w-9 h-9 border-2 border-[#1a2240] border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-xs font-mono text-[#5a6890] tracking-wider">
          loading Account…
        </span>
      </div>
    );
  }

  if (error && !admin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070c] text-white overflow-y-auto scroll-smooth">
      <AccountHeader
        name={admin?.username}
        onLogout={handleLogout}
      />

      <div className="max-w-6xl mx-auto px-10 py-14 space-y-10">

        <AccountSection
          title="Name"
          description="Do not change your name frequently"
          value={admin?.username || ""}
          field="username"
          type="text"
          button="Update"
          onUpdate={handleUpdate}
        />

        <AccountSection
          title="Email"
          description="Do not change your email frequently"
          value={admin?.email || ""}
          field="email"
          type="email"
          button="Update"
          onUpdate={handleUpdate}
        />

        <AccountSection
          title="Password"
          description="Change your password frequently to keep your account secure"
          value=""
          field="password"
          type="password"
          button="Update"
          onUpdate={handleUpdate}
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