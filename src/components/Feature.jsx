export default function Features() {
  return (
    <div className="bg-[#060810] text-white">
      {/* API Integration Section */}
      <section className="py-28 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Simple{" "}
          <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            API Integration
          </span>
        </h2>
        <p className="text-slate-500 text-center max-w-xl mx-auto mb-16">
          Integrate secure authentication into your applications with just a few lines of code
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Card 1 */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-blue-400/30 transition-colors flex flex-col min-h-105">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3 block">
              01 — Install SDK
            </span>
            <pre className="bg-black/50 border border-white/6 p-4 rounded-xl text-sm text-slate-300 overflow-x-auto flex-1">
              npm install zap-auth
            </pre>
          </div>

          {/* Card 2 */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-violet-400/30 transition-colors flex flex-col min-h-105">
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">
              02 — Initialize
            </span>
            <pre className="bg-black/50 border border-white/6 p-4 rounded-xl text-sm text-slate-300 overflow-x-auto flex-1">
{`import { AuthService } from "zap-auth";

const auth = new AuthService({
  projectId: "your-project-id",
  projectKey: "your-project-key",
});`}
            </pre>
          </div>

          {/* Card 3 */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-pink-400/30 transition-colors flex flex-col min-h-105">
            <span className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3 block">
              03 — Authenticate
            </span>
            <pre className="bg-black/50 border border-white/6 p-4 rounded-xl text-sm text-slate-300 overflow-x-auto flex-1">
{`try {
  const res = await auth.createUser(
    "john doe",
    "john@gmail.com",
    "Test123456@"
  );
  console.log("Account created");
} catch (err) {
  console.error(err);
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}