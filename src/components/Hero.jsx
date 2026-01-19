import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigator=useNavigate();
  return (
    <section className="bg-gray-950 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        <span className="text-blue-400">Simplify</span> Secure Authentication
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
        Write hundreds of lines of code to create exceptional apps{" "}
        <span className="italic font-medium">not</span> to set up authentication
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button  onClick={()=>navigator("/login")}
         className="cursor-pointer bg-linear-to-rrom-blue-400 to-purple-500 text-white px-6 py-3 rounded hover:opacity-90">
          Get started
        </button>
        <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded hover:bg-gray-900">
          View Documentation
        </button>
      </div>
    </section>
  )
}
