import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SettingsIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
  </svg>
);

const PlusIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// ── Sidebar Nav Item ───────────────────────────────────────────────────────
function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-150 text-left
        ${active
          ? "bg-white/5 text-white font-medium"
          : "text-white/40 hover:text-white/70 hover:bg-white/3"
        }`}
    >
      <Icon className={`w-4 h-4 shrink-0 ${active ? "text-violet-400" : ""}`} />
      {label}
    </button>
  );
}

// ── Tab ────────────────────────────────────────────────────────────────────
function Tab({ label, active, soon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-all duration-150 whitespace-nowrap
        ${active
          ? "border-violet-500 text-white font-medium"
          : "border-transparent text-white/40 hover:text-white/70"
        }`}
    >
      {label}
      {soon && (
        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">
          Soon
        </span>
      )}
    </button>
  );
}

// ── Empty State ────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 py-20
      bg-white/2 border border-white/5 rounded-2xl">
      <div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20
        flex items-center justify-center">
        <UsersIcon className="w-5 h-5 text-violet-400" />
      </div>
      <p className="text-sm font-medium text-white/60">No users yet</p>
      <p className="text-xs text-white/25">Users will appear here once they sign up</p>
    </div>
  );
}

// ── User Row ───────────────────────────────────────────────────────────────
function UserRow({ user }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-500/15 border border-violet-500/20
            flex items-center justify-center text-xs font-medium text-violet-300 shrink-0">
            {initials}
          </div>
          <div>
            <p className="text-sm font-medium text-white/90">{user.name}</p>
            <p className="text-xs text-white/35">{user.id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3.5 text-sm text-white/50">{user.email}</td>
      <td className="px-5 py-3.5">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border
          ${user.status === "active"
            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            : "bg-white/5 text-white/30 border-white/10"
          }`}>
          {user.status}
        </span>
      </td>
      <td className="px-5 py-3.5 text-sm text-white/35">{user.createdAt}</td>
    </tr>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
const TABS = ["Users", "Usage", "Security logs"];
const PER_PAGE_OPTIONS = [5, 10, 25, 50];

export default function Authentication() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const projectName = location.state?.projectName || "Project";

  const [activeTab, setActiveTab] = useState("Users");
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // Mock users — replace with real API call
  const [users] = useState([
    { id: "usr_f2cea30c", name: "Alice Johnson", email: "alice@example.com", status: "active", createdAt: "Apr 12, 2025" },
    { id: "usr_7440485a", name: "Bob Martinez", email: "bob@example.com", status: "active", createdAt: "Apr 14, 2025" },
    { id: "usr_9d1b0295", name: "Carol White", email: "carol@example.com", status: "inactive", createdAt: "Apr 16, 2025" },
  ]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => { setPage(1); }, [search, perPage]);

  return (
    <div className="flex min-h-screen bg-[#080808] text-white font-sans">

      {/* ── Sidebar ── */}
      <aside className="w-56 shrink-0 border-r border-white/[0.07] bg-[#0d0d0d] flex flex-col">
        <div className="px-5 py-5 border-b border-white/[0.07]">
          <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-0.5">Project</p>
          <p className="text-sm font-medium text-white/80 truncate">{projectName}</p>
        </div>
        <nav className="flex flex-col gap-0.5 pt-3">
          <NavItem icon={UsersIcon} label="Authentication" active={true} onClick={() => {}} />
          <NavItem
            icon={SettingsIcon}
            label="Settings"
            active={false}
            onClick={() => navigate(`/console/projects/${projectId}/settings`, { state: { projectName } })}
          />
        </nav>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Topbar */}
        <div className="bg-[#0d0d0d] border-b border-white/[0.07] px-8 pt-6 pb-0">
          <div className="flex items-center gap-3 mb-5">
            <h1 className="text-xl font-semibold tracking-tight">Authentication</h1>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full
              bg-violet-500/15 text-violet-300 border border-violet-500/20">
              {projectName}
            </span>
          </div>
          <div className="flex gap-0">
            {TABS.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                active={activeTab === tab}
                soon={tab !== "Users"}
                onClick={() => tab === "Users" && setActiveTab(tab)}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 flex flex-col gap-5">

          {/* Toolbar */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by user ID or name…"
                className="w-full bg-white/3 border border-white/8 rounded-xl pl-10 pr-4 py-2.5
                  text-sm text-white placeholder-white/20
                  focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20
                  transition-all"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
              bg-white/3 border border-white/8 text-white/50
              hover:bg-white/5 hover:text-white/80 hover:border-white/15
              transition-all duration-150">
              <FilterIcon className="w-3.5 h-3.5" />
              Filter
            </button>

            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
              bg-violet-600 hover:bg-violet-500 text-white border border-violet-500/0
              shadow-lg shadow-violet-500/15 transition-all duration-150 ml-auto">
              <PlusIcon className="w-3.5 h-3.5" />
              Add user
            </button>
          </div>

          {/* Table or Empty */}
          {paginated.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="rounded-2xl border border-white/[0.07] bg-white/2 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    {["User", "Email", "Status", "Created"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[11px] font-semibold
                        text-white/30 uppercase tracking-widest">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((user) => (
                    <UserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <div className="flex items-center gap-2.5">
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="bg-white/3 border border-white/8 rounded-lg px-3 py-1.5
                  text-sm text-white/60 focus:outline-none focus:border-white/20 transition-all"
              >
                {PER_PAGE_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <span className="text-sm text-white/30">users per page</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-white/30">
              <span>
                {filtered.length === 0
                  ? "0–0 of 0"
                  : `${(page - 1) * perPage + 1}–${Math.min(page * perPage, filtered.length)} of ${filtered.length}`}
              </span>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg
                  border border-white/8 bg-white/3
                  hover:bg-white/6 hover:border-white/15
                  disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5 text-white/60" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages || filtered.length === 0}
                className="w-8 h-8 flex items-center justify-center rounded-lg
                  border border-white/8 bg-white/3
                  hover:bg-white/6 hover:border-white/15
                  disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRightIcon className="w-3.5 h-3.5 text-white/60" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
