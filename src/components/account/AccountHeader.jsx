import { logout } from "../../api/admin.api";
import { useNavigate } from "react-router-dom";
export default function AccountHeader() {
    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Failed to logout. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-between px-10 py-8 bg-[#0b0f16] border-b border-white/10">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Karan Yadav</h1>
        <span className="px-4 py-1 text-sm rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-black">
          Admin
        </span>
      </div>

      <button onClick={handleLogout} className="cursor-pointer  px-6 py-2 border border-white/30 rounded-md hover:bg-white hover:text-black transition">
        LOGOUT
      </button>
    </div>
  )
}
