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
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#0a0a1a] via-[#1a1030] to-[#0d0d1f] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="GlassBank logo">
              <defs>
                <linearGradient id="pj-face-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#7B3FF2" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="pj-face-dark" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7B3FF2" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="pj-face-mid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#7B3FF2" stopOpacity="0.4"/>
                </linearGradient>
                <linearGradient id="pj-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <filter id="pj-glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="pj-shadow">
                  <feGaussianBlur stdDeviation="5"/>
                </filter>
              </defs>
              <ellipse cx="100" cy="180" rx="45" ry="8" fill="rgba(123,63,242,0.15)" filter="url(#pj-shadow)"/>
              <polygon points="100,28 155,120 100,105" fill="url(#pj-face-dark)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
              <polygon points="100,28 45,120 100,105" fill="url(#pj-face-light)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
              <polygon points="155,120 100,105 130,165" fill="url(#pj-face-mid)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
              <polygon points="45,120 100,105 70,165" fill="url(#pj-face-light)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" opacity="0.7"/>
              <polygon points="100,28 100,105 130,165 100,145 70,165" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              <line x1="100" y1="28" x2="45" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#pj-glow)"/>
              <polygon points="100,28 72,74 100,65" fill="url(#pj-shine)" opacity="0.5"/>
              <circle cx="90" cy="55" r="2" fill="white" opacity="0.7" filter="url(#pj-glow)"/>
              <circle cx="100" cy="30" r="2.5" fill="white" opacity="0.8" filter="url(#pj-glow)"/>
              <line x1="60" y1="155" x2="60" y2="175" stroke="rgba(123,63,242,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="75" y1="160" x2="75" y2="178" stroke="rgba(123,63,242,0.2)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="125" y1="160" x2="125" y2="178" stroke="rgba(236,72,153,0.2)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="140" y1="155" x2="140" y2="175" stroke="rgba(236,72,153,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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

        <Link
          href="/coaching-app"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#8B7355] via-[#A09078] to-[#8A9E82] flex items-center justify-center rounded-t-xl">
            <span className="text-white/90 text-7xl md:text-8xl font-bold">
              C
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              Coaching App
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              An evidence-based coaching platform for career, relationships, and
              personal growth.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">UX Research</span>
              <span className="meta-badge">UI Design</span>
              <span className="meta-badge">Web App</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
