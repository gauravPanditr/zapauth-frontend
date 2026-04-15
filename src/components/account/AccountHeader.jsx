export default function AccountHeader({ name, onLogout }) {
  const initial = name ? name.slice(0, 2).toUpperCase() : "AD";

  return (
    <div className="flex items-center justify-between px-10 py-5 bg-[#080c14] border-b border-white/7 sticky top-0 z-10">
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm font-bold font-[Syne]">
          {initial}
        </div>

        <h1 className="text-lg font-semibold font-[Syne]">
          {name}
        </h1>

        <span className="px-3 py-1 text-xs rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-white">
          Admin
        </span>
      </div>

      <button
        onClick={onLogout}
        className="px-5 py-2 border border-white/20 rounded-lg text-xs font-bold font-[Syne] tracking-widest text-white/70 hover:bg-white hover:text-[#05070c] transition"
      >
        LOGOUT
      </button>
    </div>
  );
}