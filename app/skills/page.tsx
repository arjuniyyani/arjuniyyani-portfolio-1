import Section from "@/components/section";

const skills = {
  "Automation & Testing": [
    "Selenium",
    "Cypress",
    "Appium",
    "Manual Testing",
    "Regression Testing",
    "UAT",
    "Test Planning & Execution",
  ],
  "API & Backend": [
    "RESTful APIs",
    "Postman",
    "Charles Proxy",
    "API Automation",
    "Microservices Testing",
    "Kafka",
  ],
  Performance: [
    "JMeter",
    "Artillery",
    "Load Testing",
    "Stress Testing",
    "Scalability Testing",
  ],
  "Programming & Scripting": [
    "Java",
    "JavaScript (5+ years)",
    "Go",
    "Shell Scripting",
  ],
  "DevOps & Tooling": [
    "Jenkins",
    "CI/CD Pipelines",
    "Git",
    "Docker",
    "JIRA",
    "Redmine",
    "TestLink",
  ],
  "Databases & Data": [
    "SQL",
    "Data Validation",
    "Database Migration (DynamoDB → PostgreSQL)",
  ],
};

export default function Skills() {
  return (
    <Section
      title="Skills"
      subtitle="Tools, technologies, and practices I use to deliver reliable and scalable software quality."
    >
      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-gray-100 mb-5">
              {category}
            </h3>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm font-medium
                             bg-gray-800 text-gray-100
                             border border-gray-700
                             rounded-full
                             hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
