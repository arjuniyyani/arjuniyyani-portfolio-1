import Section from "@/components/section";

const skills = {
  Automation: ["Selenium", "Playwright", "Appium"],
  API: ["REST Assured", "Postman", "Karate"],
  Performance: ["JMeter", "Gatling"],
  DevOps: ["GitHub Actions", "Jenkins", "CI/CD"],
  Languages: ["Java", "JavaScript", "Go"],
};

export default function Skills() {
  return (
    <Section
      title="Skills"
      subtitle="Tools and technologies I use to build scalable and reliable quality engineering systems."
    >
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-medium mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-800 rounded-md"
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
