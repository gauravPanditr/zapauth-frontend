export default function ProjectCard({ id, name }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition">
      <p className="text-xs text-gray-400 mb-2">{id}</p>
      <h3 className="text-xl font-semibold text-white mb-6">{name}</h3>

      <button className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-black text-sm font-medium">
        Web
      </button>
    </div>
  );
}
