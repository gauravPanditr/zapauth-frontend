export default function CreateProjectCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:border-violet-400/40 transition cursor-pointer">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-3xl text-white mb-4">
        +
      </div>
      <p className="text-gray-300">Create a new project</p>
    </div>
  )
}
