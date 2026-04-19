import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectSidebar from "../components/ProjectSidebar";

import { getProjectById, updateProject } from "../api/project.api"; 


// ─── COPY INPUT ──────────────────────────────────────────────────────────────
function CopyInput({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative group">
      <input
        value={value || ""}
        readOnly
        className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-3 pr-24 text-sm text-white/70 font-mono tracking-wide focus:outline-none focus:border-violet-500/50 transition-all"
      />
      <button
        onClick={handleCopy}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
          bg-white/5 hover:bg-violet-500/20 hover:text-violet-300 border border-white/10 hover:border-violet-500/40 text-white/50"
      >
        {copied ? (
          <span className="flex items-center gap-1 text-emerald-400">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            Done
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            Copy
          </span>
        )}
      </button>
    </div>
  );
}

// ─── TOGGLE ──────────────────────────────────────────────────────────────────
function Toggle({ label, description, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between py-4 px-5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 transition-all group">
      <div>
        <p className="text-sm font-medium text-white/80">{label}</p>
        {description && <p className="text-xs text-white/30 mt-0.5">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-11 h-6 rounded-full transition-all duration-300 focus:outline-none ${
          enabled ? "bg-violet-500" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/[0.07] bg-white/3 backdrop-blur-sm p-7 ${className}`}>
      {children}
    </div>
  );
}

// ─── FIELD INPUT ─────────────────────────────────────────────────────────────
function Field({ label, placeholder, value, onChange, type = "text", icon }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20">{icon}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-[#0d0d0d] border border-white/10 rounded-xl py-3 text-sm text-white placeholder-white/20
            focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all
            ${icon ? "pl-10 pr-4" : "px-4"}`}
        />
      </div>
    </div>
  );
}

// ─── SAVE BUTTON ─────────────────────────────────────────────────────────────
function SaveButton({ onClick, loading, label = "Save Changes" }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 
        disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 text-white
        shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 flex items-center gap-2"
    >
      {loading ? (
        <>
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          Saving...
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          {label}
        </>
      )}
    </button>
  );
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function Toast({ message, type, visible }) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-medium border
        ${type === "success" ? "bg-emerald-950 border-emerald-500/30 text-emerald-300" : "bg-red-950 border-red-500/30 text-red-300"}`}>
        {type === "success"
          ? <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          : <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        }
        {message}
      </div>
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────
const TABS = ["Overview", "Security", "Email Templates"];

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function ProjectSettings() {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [projectKey, setProjectKey] = useState("");

  // Details form state
  const [projectName, setProjectName] = useState("");
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");

  // Login methods
  const [emailPassword, setEmailPassword] = useState(true);
  const [otpEmail, setOtpEmail] = useState(false);
  const [magicUrl, setMagicUrl] = useState(false);

  // Toast
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  };

  // ── Fetch project on mount ──────────────────────────────────────────────
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const res = await getProjectById(projectId);

        console.log("FULL RESPONSE:", res.data);

        const projectData = res.data.data || res.data;

        setProjectName(projectData.projectName || "");
        setAppName(projectData.appName || "");
        setAppEmail(projectData.appEmail || "");
        setProjectKey(projectData.projectKey || "");

      } catch (err) {
        console.log(err);
        showToast("Failed to load project.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  // ── Update project details ──────────────────────────────────────────────
const handleUpdate = async () => {
  try {
    setUpdateLoading(true);
    await updateProject(
      {
        id: projectId,
        projectName,
        appName,
        appEmail,
        loginMethods: { emailPassword, otpEmail, magicUrl },
      },
      projectId,   // from useParams() — already available
      projectKey   // from useState — already set when project loads
    );
    showToast("Project updated successfully!", "success");
  } catch (err) {
    showToast(err.message || "Update failed.", "error");
  } finally {
    setUpdateLoading(false);
  }
};

  return (
    <div className="flex min-h-screen bg-[#080808] text-white font-sans">
      <ProjectSidebar />

      {/* ── Main ── */}
      <main className="flex-1 px-8 py-10 max-w-4xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Project</p>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/20">
                {appName || "Ecommerce"}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white/3 border border-white/6 rounded-xl p-1 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${activeTab === tab
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-white/40 hover:text-white/70"
                }`}
            >
              {tab}
              {tab === "Email Templates" && (
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/20 px-1.5 rounded-md font-semibold">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="flex flex-col items-center gap-3">
              <svg className="animate-spin w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              <p className="text-sm text-white/30">Loading project...</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">

            {/* ── Project Credentials ── */}
            <Section>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-white/90">Project Credentials</h2>
                  <p className="text-xs text-white/35 mt-1">Used by all authentication services in this project</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">Project ID</label>
                  <CopyInput value={projectId} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">Project Key</label>
                  <CopyInput value={projectKey} />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 px-4 py-3.5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <p className="text-xs text-amber-300/80 leading-relaxed">
                  If you suspect your project is compromised, regenerate the project key immediately to revoke all existing sessions.
                </p>
              </div>

              <button className="mt-4 px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-white/50 hover:border-white/20 hover:text-white/80 transition-all duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Regenerate Project Key
              </button>
            </Section>

            {/* ── Details ── */}
            <Section>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-white/90">Details</h2>
                  <p className="text-xs text-white/35 mt-1">App name and email appear in all authentication emails sent to users</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field
                  label="Project Name"
                  placeholder="My awesome project"
                  value={projectName}
                  onChange={setProjectName}
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>}
                />
                <Field
                  label="App Name"
                  placeholder="Acme Inc."
                  value={appName}
                  onChange={setAppName}
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                />
                <Field
                  label="App Email"
                  placeholder="hello@acme.com"
                  value={appEmail}
                  onChange={setAppEmail}
                  type="email"
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                />
              </div>

              <SaveButton onClick={handleUpdate} loading={updateLoading} label="Update Details" />
            </Section>

            {/* ── Login Methods ── */}
            <Section>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-white/90">Login Methods</h2>
                  <p className="text-xs text-white/35 mt-1">Choose how users can sign in to your application</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Toggle
                  label="Email & Password"
                  description="Classic sign-in with email and password"
                  enabled={emailPassword}
                  onChange={setEmailPassword}
                />
                <Toggle
                  label="OTP on Email"
                  description="One-time password sent to user's inbox"
                  enabled={otpEmail}
                  onChange={setOtpEmail}
                />
                <Toggle
                  label="Magic URL on Email"
                  description="Passwordless login via a secure link"
                  enabled={magicUrl}
                  onChange={setMagicUrl}
                />
              </div>

              <SaveButton onClick={handleUpdate} loading={updateLoading} label="Update Methods" />
            </Section>

            {/* ── Danger Zone ── */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/3 p-7">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <div>
                  <h2 className="text-base font-semibold text-red-400">Danger Zone</h2>
                  <p className="text-xs text-white/35 mt-1">
                    Deleting a project is permanent and irreversible — all users, sessions, and data will be erased.
                  </p>
                </div>
              </div>

              <button className="px-6 py-2.5 rounded-xl text-sm font-semibold border border-red-500/40 text-red-400
                hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 shadow-lg shadow-red-500/5 hover:shadow-red-500/20">
                Delete Project
              </button>
            </div>

          </div>
        )}
      </main>

      <Toast {...toast} />
    </div>
  );
}
