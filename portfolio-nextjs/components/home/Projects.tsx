import Link from "next/link";

const projects = [
  {
    title: "GlassBank",
    description:
      "A modern mobile banking experience designed for clarity and trust.",
    href: "/glassbank",
    gradient: "gradient-glassbank",
  },
  {
    title: "E-commerce Platform",
    description: "Streamlining the shopping experience for better conversions.",
    href: null,
    gradient: "gradient-teal-coral",
  },
  {
    title: "Coming Soon",
    description: "More projects in development.",
    href: null,
    gradient: "gradient-teal-coral",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0f1419] to-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                <div
                  className={`h-48 md:h-52 ${project.gradient}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </>
            );

            if (project.href) {
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="project-card block hover:scale-[1.02] transition-transform"
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={project.title} className="project-card">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
