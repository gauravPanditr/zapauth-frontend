export default function DangerZone() {
  return (
    <>
      <div className="text-center text-red-500 text-xl font-semibold tracking-widest">
        DANGER ZONE
      </div>

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

      <div className="bg-[#0b0f16] rounded-2xl p-10 border-l-4 border-red-600 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Delete Account</h3>
          <p className="text-gray-400 mt-2">
            Your Zap Auth account and all projects will be deleted permanently
          </p>
        </div>

        <button className="px-6 py-2 border border-red-600 text-red-500 rounded-md hover:bg-red-600 hover:text-white transition">
          DELETE ACCOUNT
        </button>
      </div>
    </>
  )
}
