import Link from "next/link";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0f1419] to-[#0a0a0f]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
          Projects
        </h2>

        <Link
          href="/glassbank"
          className="project-card block hover:scale-[1.02] transition-transform"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#7B3FF2] via-[#a855f7] to-[#ec4899] flex items-center justify-center rounded-t-xl">
            <span className="text-white/90 text-7xl md:text-8xl font-bold">
              G
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              GlassBank
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              A modern mobile banking experience designed for clarity and trust.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">UX Research</span>
              <span className="meta-badge">UI Design</span>
              <span className="meta-badge">Mobile App</span>
            </div>
          </div>
        </Link>

        <p className="text-white/40 text-sm text-center mt-8">
          More projects coming soon
        </p>
      </div>
    </section>
  );
}
