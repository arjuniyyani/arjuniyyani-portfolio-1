const experiences = [
    {
      role: "Lead QA Engineer",
      company: "Xoriant",
      period: "Apr 2025 – Present",
      points: [
        "Leading automation and performance testing for Web and API platforms",
        "Executing load and stress testing using Artillery",
        "Developing automation scripts using Jest framework",
        "Driving defect prevention through proactive monitoring and RCA",
      ],
    },
    {
      role: "SDET II",
      company: "Zomato (District)",
      period: "Aug 2024 – Feb 2025",
      points: [
        "Led end-to-end migration testing from Paytm Movies to Zomato District",
        "Owned testing across Android, iOS, Web, and Mobile Web",
        "Automated data validation and reconciliation checks",
        "Worked extensively with Postman, Jenkins, Charles Proxy, and CI pipelines",
      ],
    },
    {
      role: "Senior QA Engineer",
      company: "Paytm",
      period: "Feb 2022 – Aug 2024",
      points: [
        "Owned QA for Paytm Movies platform",
        "Reduced post-release defects by ~20%",
        "Led backend API and mobile testing initiatives",
        "Built and maintained automation frameworks",
      ],
    },
    {
      role: "Senior QA Engineer",
      company: "QBurst Technologies",
      period: "Oct 2015 – Feb 2022",
      points: [
        "Tested large-scale e-commerce platforms (Order History, Wishlist)",
        "Performed manual, API, and performance testing",
        "Managed database migration from DynamoDB to PostgreSQL",
        "Acted as liaison between business, QA, and engineering teams",
      ],
    },
  ];
  
  export default function ExperienceTimeline() {
    return (
      <div className="relative border-l border-gray-800 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 mt-2" />
  
            <h3 className="text-xl font-semibold">
              {exp.role} — {exp.company}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
  
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  