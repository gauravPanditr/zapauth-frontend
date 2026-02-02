import { useParams } from "react-router-dom";
import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";


function CopyInput({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <input
        value={value}
        disabled
        className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 pr-20"
      />

      <button
        onClick={handleCopy}
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 
                   bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export default function ProjectSettings() {
  const { projectId } = useParams();

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <ProjectSidebar />

      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-3xl font-bold">Settings</h1>
          <span className="bg-blue-500 px-4 py-1 rounded-full text-sm">
            Ecommerce
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-800 mb-10">
          <button className="pb-3 border-b-2 border-white">
            Overview
          </button>
          <button className="text-gray-400">Security</button>
          <button className="text-gray-400">
            Email Templates
            <span className="ml-2 text-xs bg-yellow-500 text-black px-2 rounded">
              Coming Soon
            </span>
          </button>
        </div>

        {/* Project Credentials */}
        <section className="bg-gray-900 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Project Credentials
          </h2>

          <p className="text-gray-400 mb-6">
            All authentication services will use these credentials
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm mb-2">
                Project ID
              </label>

              <CopyInput value={projectId} />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Project Key
              </label>

              <CopyInput value="" />
            </div>
          </div>

          <div className="bg-yellow-900/40 text-yellow-300 p-4 rounded mt-6">
            If you suspect your project is compromised, regenerate the project key immediately.
          </div>

          <button className="mt-6 px-6 py-3 border rounded hover:bg-gray-800">
            Generate New Project Key
          </button>
        </section>

        {/* Details */}
        <section className="bg-gray-900 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold mb-2">Details</h2>

          <p className="text-gray-400 mb-6">
            App name and email are used in authentication emails
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Project name"
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3"
            />

            <input
              placeholder="App name"
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3"
            />

            <input
              placeholder="App email"
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3"
            />
          </div>

          <button className="mt-6 px-6 py-3 border rounded hover:bg-gray-800">
            Update
          </button>
        </section>

        {/* Login Methods */}
        <section className="bg-gray-900 rounded-2xl p-8 mb-14">
          <h2 className="text-xl font-semibold mb-6">
            Login Methods
          </h2>

          <div className="space-y-4">
            <Toggle label="Email & Password" enabled />
            <Toggle label="OTP on Email" />
            <Toggle label="Magic URL on Email" />
          </div>

          <button className="mt-6 px-6 py-3 border rounded hover:bg-gray-800">
            Update
          </button>
        </section>

        {/* Danger Zone */}
        <section className="border border-red-600 rounded-2xl p-8">
          <h2 className="text-red-500 text-xl font-semibold mb-2">
            Danger Zone
          </h2>

          <p className="text-gray-400 mb-6">
            Deleting a project is irreversible and removes all users and data.
          </p>

          <button className="px-8 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-black">
            DELETE PROJECT
          </button>
        </section>
      </main>
    </div>
  );
}

/* ===== TOGGLE COMPONENT ===== */
function Toggle({ label, enabled }) {
  return (
    <div className="flex justify-between items-center">
      <span>{label}</span>

      <div
        className={`w-12 h-6 rounded-full cursor-pointer ${
          enabled ? "bg-blue-500" : "bg-gray-600"
        }`}
      >
        <div
          className={`h-6 w-6 bg-white rounded-full transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </div>
    </div>
  );
}
