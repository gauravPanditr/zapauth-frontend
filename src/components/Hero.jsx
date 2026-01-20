import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-950 text-white">
      
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-blue-400">Simplify</span> Secure Authentication
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
          Write hundreds of lines of code to create exceptional apps{" "}
          <span className="italic font-medium">not</span> to set up authentication
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-black px-6 py-3 rounded font-medium hover:opacity-90"
          >
            Get started
          </button>

          <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded hover:bg-gray-900">
            View Documentation
          </button>
        </div>
      </section>

    
      <section className="py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Simple <span className="text-blue-400">API Integration</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Integrate secure authentication into your applications with just a few
          lines of code
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-blue-400 font-semibold mb-3">
              1 Install SDK
            </p>
            <pre className="bg-black/40 p-4 rounded text-sm text-gray-200 overflow-x-auto">
              npm install zap-auth
            </pre>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-blue-400 font-semibold mb-3">
              2 Initialize Project
            </p>
            <pre className="bg-black/40 p-4 rounded text-sm text-gray-200 overflow-x-auto">
{`import { AuthService } from "authwave-sdk";

const authService = new AuthService({
  projectId: "your-project-id",
  projectKey: "your-project-key",
});`}
            </pre>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-blue-400 font-semibold mb-3">
              3 Implement Authentication
            </p>
            <pre className="bg-black/40 p-4 rounded text-sm text-gray-200 overflow-x-auto">
{`try {
  const res = await authService.createUser(
    "john doe",
    "johndoe@gmail.com",
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
