import { Users, PenTool, Smartphone, Palette, Accessibility, Code } from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "User Research",
    description:
      "Conducting interviews, surveys, and usability testing to understand user needs.",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description:
      "Creating low and high-fidelity wireframes to visualize solutions.",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description:
      "Building interactive prototypes using Figma and other design tools.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description:
      "Crafting beautiful interfaces with attention to typography and color.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Designing inclusive experiences that work for users of all abilities.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive interfaces with React, Next.js, and Tailwind CSS.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
