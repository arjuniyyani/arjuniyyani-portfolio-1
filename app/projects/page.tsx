const projects = [
    {
      title: "Hybrid Automation Framework",
      description:
        "Unified automation framework covering Web, API, and Mobile platforms with CI/CD integration.",
      tech: ["Java", "Selenium", "Appium", "REST Assured"],
    },
    {
      title: "API Automation Framework (Go)",
      description:
        "Lightweight API automation framework built using Go for high-performance testing.",
      tech: ["Go", "REST", "JSON"],
    },
  ];
  
  export default function Projects() {
    return (
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
  
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition"

            >
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-gray-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  