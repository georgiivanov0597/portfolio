import { SiJavascript, SiReact, SiNextdotjs, SiTailwindjs, SiTailwindcss, SiNodedotjs, SiGit }
    from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc"
import { FaProjectDiagram } from "react-icons/fa";


export default function TechStack() {
    // Here are all the technologies that I can work with or learning for now
    const skills = [
        { name: "Mendix", icon: <FaProjectDiagram className="text-[#2541F8]"/> },
        { name: "React", icon: <SiReact className="text-cyan-400"/> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white"/> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300"/> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500"/> },
        { name: "Git", icon: <SiGit className="text-orange-500"/> },
        { name: "Javascript", icon: <SiJavascript className="text-yellow-400"/> },
        { name: "SiAzuredevops", icon: <VscAzureDevops className="text-blue-500"/>}
    ];

    return(
        <section className="py-20 bg-slate-950 text-center">
            <h3 className="text-slate-400 uppercase tracking-widest mb-12 text-sm font-semibold">
                With what I can work with
            </h3>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto px-4">
                {skills.map((skill, index) => (
                    <div
                    key={index}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-900 transition duration-300 cursor-pointer"
                    >
                        <div className="text-4xl md:text-5xl group-hover:scale-110 transition duration-300">
                            {skill.icon}
                        </div>

                        <span className="text-slate-500 font-medium group-hover:text-white transition">
                            {skill.name}
                        </span>
            </div>
        ))}

            </div>
        </section>
    );
}