import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../../api/admin.api";

export default function DangerZone() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    const ok = window.confirm(
      "Are you sure? This will delete your account and ALL projects permanently!"
    );

    if (!ok) return;

    try {
      setLoading(true);

      await deleteAccount();

     
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

     

      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          err.message ||
          "Failed to delete account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center text-red-500 text-xl font-semibold tracking-widest">
        DANGER ZONE
      </div>

      {/* DELETE ALL PROJECTS – tum baad me API laga dena */}
      <div className="bg-[#0b0f16] rounded-2xl p-10 border-l-4 border-red-600 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Delete All Projects</h3>
          <p className="text-gray-400 mt-2">
            All projects under this Zap Auth account will be deleted permanently
          </p>
        </div>

        <button className="px-6 py-2 border border-red-600 text-red-500 rounded-md hover:bg-red-600 hover:text-white transition">
          DELETE ALL PROJECTS
        </button>
      </div>

      {/* DELETE ACCOUNT */}
      <div className="bg-[#0b0f16] rounded-2xl p-10 border-l-4 border-red-600 flex justify-between items-center mt-6">
        <div>
          <h3 className="text-xl font-semibold">Delete Account</h3>
          <p className="text-gray-400 mt-2">
            Your Zap Auth account and all projects will be deleted permanently
          </p>
        </div>

        <button
          onClick={handleDeleteAccount}
          disabled={loading}
          className="cursor-pointer px-6 py-2 border border-red-600 text-red-500 rounded-md hover:bg-red-600 hover:text-white transition disabled:opacity-50"
        >
          {loading ? "DELETING..." : "DELETE ACCOUNT"}
        </button>
      </div>
    </>
  );
}
