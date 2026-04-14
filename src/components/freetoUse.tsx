export default function FreeToUse() {
  return (
    <section className="bg-[#111113] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-block bg-[#1e2030] border border-[#2e3150] rounded-full px-5 py-2 mb-8">
          <span className="text-[#7b8cde] text-sm tracking-wide">
            New features coming soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          This MVP is{" "}
          <span className="italic bg-linear-to-r from-[#60c8f5] via-[#7b8cde] to-[#a78bfa] bg-clip-text text-transparent">
            free to use
          </span>{" "}
          for everyone
        </h1>

        {/* Subtext */}
        <p className="text-[#8b8fa8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We are working on more advanced features and will launch a paid plan
          of Auth Wave based on the demand.
        </p>

      </div>
    </section>
  );
}