import { FaChartLine, FaAward, FaBuilding, FaServer } from "react-icons/fa";

export default function Achievements() {
 
  const items = [
    {
      id: 1,
      title: "Business Impact",
      value: "High ROI", // Вместо цифри
      description: "Delivering significant return on investment through process digitalization and workflow optimization.",
      icon: <FaChartLine className="text-green-400" />,
    },
    {
      id: 2,
      title: "Expertise",
      value: "Advanced",
      description: "Mendix Advanced Certified Developer. Deep understanding of Low-Code architecture.",
      icon: <FaAward className="text-yellow-400" />,
    },
    {
      id: 3,
      title: "Enterprise Scale",
      value: "Critical Systems",
      description: "Developing and maintaining mission-critical internal applications for a leading retail giant (LIDL).",
      icon: <FaBuilding className="text-cyan-400" />,
    },
     {
      id: 4,
      title: "DevOps Culture",
      value: "CI/CD",
      description: "End-to-end Application Lifecycle Management using Azure DevOps and automated pipelines.",
      icon: <FaServer className="text-purple-400" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Milestones
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My work focuses on building scalable enterprise solutions.
            Here is a glimpse of my current professional scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 transition duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4 text-4xl p-3 bg-slate-900 w-fit rounded-lg group-hover:bg-slate-800 transition">
                {item.icon}
              </div>
             
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.value}
              </h3>
             
              <p className="text-cyan-400 font-medium uppercase text-sm tracking-wider mb-3">
                {item.title}
              </p>
             
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
