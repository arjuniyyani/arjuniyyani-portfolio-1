import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          QA Lead <span className="text-gray-400">|</span> Automation Architect
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          10+ Years of Experience
        </p>

        <p className="max-w-2xl text-gray-400 leading-relaxed mb-10">
        QA Lead and Automation Architect with 10+ years of experience driving quality across Android, iOS, Web, and API platforms. Proven expertise in building scalable automation frameworks, leading large migration initiatives, and improving release quality in high-traffic, Agile environments.
        </p>

        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
          >
            Contact Me
          </Link>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-600 rounded-md hover:border-gray-400 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
