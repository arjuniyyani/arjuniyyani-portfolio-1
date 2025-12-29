import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        QA Lead | Automation Architect
      </h1>

      <p className="text-xl text-gray-300 mb-4">
        10+ Years Experience
      </p>

      <p className="max-w-2xl text-gray-400 mb-8">
        I specialize in designing scalable automation frameworks for Web, API,
        and Mobile platforms, enabling high-quality releases through robust
        testing strategy, CI/CD integration, and strong engineering practices.
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
    </main>
  );
}
