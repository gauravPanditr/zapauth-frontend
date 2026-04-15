export default function ProjectStatusPanel() {
  const steps = [
    { label: "Project name set", done: true },
    { label: "App details configured", done: true },
    { label: "Email verified", done: false },
    { label: "Ready to launch", done: false },
  ];

  return (
    <div className="w-1/2 bg-linear-to-br from-[#080c14] to-[#04060b] border-r border-white/6 flex flex-col items-center justify-center gap-10 px-16 py-16">

      {/* Status icon */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/8 flex items-center justify-center">
          <svg className="w-7 h-7 stroke-emerald-400 fill-none stroke-2" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-emerald-400 tracking-wide">Good to go!</p>
          <p className="text-xs text-[#4a5a80] mt-1 font-mono">All systems operational</p>
        </div>
      </div>

      {/* Step checklist */}
      <div className="flex flex-col gap-3 w-full max-w-55">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full shrink-0 ${step.done ? "bg-cyan-400" : "bg-[#1a2540]"}`} />
            <span className={`text-xs font-mono ${step.done ? "text-slate-400" : "text-[#3a4870]"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative tag */}
      <div className="px-3 py-1.5 rounded-md border border-cyan-400/20 bg-cyan-400/5">
        <span className="text-[11px] font-mono text-cyan-400/70 tracking-wider">zap-auth · v1.0.2</span>
      </div>
    </div>
  );
}