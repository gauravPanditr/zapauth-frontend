export default function SettingsTab() {
  return (
    <div className="space-y-10">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Project Credentials</h2>
        <p className="text-gray-400 text-sm">
          All authentication services on your web app will use these credentials
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Login Methods</h2>
      </div>
    </div>
  );
}
