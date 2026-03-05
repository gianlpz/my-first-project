import { Brain, Code, PenTool, Accessibility } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Building with LLMs, RAG pipelines, API integration, and agentic workflows. Designing intelligent features that solve real problems.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, and Tailwind CSS. Building responsive, accessible, and performant web applications.",
  },
  {
    icon: PenTool,
    title: "UX/UI Design",
    description:
      "User research, wireframing, prototyping, visual design, and usability testing. Designing inclusive experiences grounded in real user needs.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Designing and building inclusive experiences that work for users of all abilities. WCAG compliance and assistive technology support.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="skill-card">
                <Icon className="text-coral mb-4" size={28} />
                <h3 className="text-coral text-lg md:text-xl font-semibold mb-3">
                  {skill.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
