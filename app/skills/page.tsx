const skills = {
    Automation: ["Selenium", "Playwright", "Appium"],
    API: ["REST Assured", "Postman", "Karate"],
    Performance: ["JMeter", "Gatling"],
    DevOps: ["GitHub Actions", "Jenkins", "CI/CD"],
    Languages: ["Java", "JavaScript", "Go"],
  };
  
  export default function Skills() {
    return (
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
  
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  