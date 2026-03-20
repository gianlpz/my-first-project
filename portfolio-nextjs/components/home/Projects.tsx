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
          href="/healthbridge"
          className="project-card block hover:scale-[1.02] transition-transform"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#0d9488] via-[#14b8a6] to-[#2dd4bf] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HealthBridge logo">
              <defs>
                <linearGradient id="hb-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#065f5b" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="hb-cross" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.95"/>
                  <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="hb-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <filter id="hb-glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="120" height="120" rx="28" fill="url(#hb-bg)"/>
              <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)"/>
              <g transform="translate(60,60)">
                <circle r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <rect x="-10" y="-30" width="20" height="60" rx="4" fill="url(#hb-cross)"/>
                <rect x="-30" y="-10" width="60" height="20" rx="4" fill="url(#hb-cross)"/>
              </g>
              <polygon points="60,10 35,45 60,38" fill="url(#hb-shine)" opacity="0.4"/>
              <circle cx="30" cy="30" r="3" fill="white" opacity="0.5" filter="url(#hb-glow)"/>
              <circle cx="90" cy="30" r="2.5" fill="white" opacity="0.4" filter="url(#hb-glow)"/>
              <circle cx="30" cy="90" r="2.5" fill="white" opacity="0.3" filter="url(#hb-glow)"/>
              <circle cx="90" cy="90" r="3" fill="white" opacity="0.4" filter="url(#hb-glow)"/>
              <line x1="33" y1="30" x2="50" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="87" y1="30" x2="70" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="33" y1="90" x2="50" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="87" y1="90" x2="70" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              HealthBridge
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              An AI symptom triage assistant powered by RAG, tool use, and
              multi-step reasoning.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">AI Engineering</span>
              <span className="meta-badge">RAG</span>
              <span className="meta-badge">Next.js 16</span>
            </div>
          </div>
        </Link>

        <Link
          href="/access4u"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a5b4fc] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Access4U logo">
              <defs>
                <linearGradient id="a4u-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="a4u-shield" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.95"/>
                  <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="a4u-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <filter id="a4u-glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="120" height="120" rx="28" fill="url(#a4u-bg)"/>
              <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)"/>
              <g transform="translate(60,60)">
                <path d="M0,-32 L-22,0 L-14,24 L14,24 L22,0 Z" fill="url(#a4u-shield)"/>
                <polyline points="-8,2 -2,10 10,-6" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
              <polygon points="60,10 35,45 60,38" fill="url(#a4u-shine)" opacity="0.4"/>
              <circle cx="30" cy="30" r="3" fill="white" opacity="0.5" filter="url(#a4u-glow)"/>
              <circle cx="90" cy="30" r="2.5" fill="white" opacity="0.4" filter="url(#a4u-glow)"/>
              <circle cx="30" cy="90" r="2.5" fill="white" opacity="0.3" filter="url(#a4u-glow)"/>
              <circle cx="90" cy="90" r="3" fill="white" opacity="0.4" filter="url(#a4u-glow)"/>
              <line x1="33" y1="30" x2="48" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="87" y1="30" x2="72" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="33" y1="90" x2="48" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="87" y1="90" x2="72" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              Access4U
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              An accessibility scanner that uses AI to explain WCAG violations
              and generate code fixes with visual diffs.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">Accessibility</span>
              <span className="meta-badge">AI Engineering</span>
              <span className="meta-badge">Next.js 16</span>
            </div>
          </div>
        </Link>

        <Link
          href="/nhs-visualizer"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#005eb8] via-[#0072ce] to-[#41b6e6] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NHS Wait Times logo">
              <defs>
                <linearGradient id="nhs-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#005eb8" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#003d7a" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="nhs-bar" x1="25" y1="40" x2="99" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.95"/>
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.75"/>
                </linearGradient>
                <linearGradient id="nhs-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <filter id="nhs-glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="120" height="120" rx="28" fill="url(#nhs-bg)"/>
              <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)"/>
              <circle cx="60" cy="65" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
              <rect x="25" y="75" width="14" height="25" rx="4" fill="url(#nhs-bar)"/>
              <rect x="45" y="55" width="14" height="45" rx="4" fill="url(#nhs-bar)"/>
              <rect x="65" y="40" width="14" height="60" rx="4" fill="url(#nhs-bar)"/>
              <rect x="85" y="60" width="14" height="40" rx="4" fill="url(#nhs-bar)"/>
              <polygon points="60,8 35,42 60,36" fill="url(#nhs-shine)" opacity="0.4"/>
              <circle cx="32" cy="68" r="3" fill="white" opacity="0.6" filter="url(#nhs-glow)"/>
              <circle cx="52" cy="48" r="3" fill="white" opacity="0.6" filter="url(#nhs-glow)"/>
              <circle cx="72" cy="33" r="3" fill="white" opacity="0.6" filter="url(#nhs-glow)"/>
              <circle cx="92" cy="53" r="3" fill="white" opacity="0.6" filter="url(#nhs-glow)"/>
              <line x1="32" y1="68" x2="52" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#nhs-glow)"/>
              <line x1="52" y1="48" x2="72" y2="33" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#nhs-glow)"/>
              <line x1="72" y1="33" x2="92" y2="53" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#nhs-glow)"/>
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              NHS Wait Times
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              A dashboard visualizing NHS hospital wait times across 500+
              providers using official RTT data.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">Data Visualization</span>
              <span className="meta-badge">Public Data</span>
              <span className="meta-badge">Next.js 16</span>
            </div>
          </div>
        </Link>

        <Link
          href="/ux-research"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#f97316] via-[#f472b6] to-[#ec4899] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="UX Research App logo">
              <defs>
                <linearGradient id="ux-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#be185d" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="ux-glass" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.95"/>
                  <stop offset="100%" stopColor="#fda4af" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="ux-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <filter id="ux-glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="120" height="120" rx="28" fill="url(#ux-bg)"/>
              <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)"/>
              <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
              <circle cx="52" cy="52" r="22" stroke="url(#ux-glass)" strokeWidth="4.5" fill="none"/>
              <line x1="68" y1="68" x2="88" y2="88" stroke="url(#ux-glass)" strokeWidth="5" strokeLinecap="round" filter="url(#ux-glow)"/>
              <circle cx="52" cy="46" r="7" fill="url(#ux-glass)"/>
              <path d="M40 64 Q46 56 52 56 Q58 56 64 64" stroke="url(#ux-glass)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <polygon points="60,8 35,42 60,36" fill="url(#ux-shine)" opacity="0.4"/>
              <circle cx="38" cy="35" r="2" fill="white" opacity="0.6" filter="url(#ux-glow)"/>
              <circle cx="88" cy="88" r="2.5" fill="white" opacity="0.7" filter="url(#ux-glow)"/>
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              UX Research App
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              An AI-powered UX research assistant with 6 tools for personas,
              empathy maps, user flows, and more.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="meta-badge">AI Engineering</span>
              <span className="meta-badge">Tool Use</span>
              <span className="meta-badge">Next.js 16</span>
            </div>
          </div>
        </Link>

        <Link
          href="/coaching-app"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
        >
          <div className="h-56 md:h-64 bg-gradient-to-br from-[#8B7355] via-[#A09078] to-[#8A9E82] flex items-center justify-center rounded-t-xl">
            <svg className="w-28 h-28 md:w-32 md:h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Coaching App logo">
              <defs>
                <linearGradient id="ca-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8B7355"/>
                  <stop offset="100%" stopColor="#6F5B3E"/>
                </linearGradient>
                <linearGradient id="ca-accent" x1="40" y1="30" x2="80" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#B89E8A"/>
                  <stop offset="100%" stopColor="#8A9E82"/>
                </linearGradient>
              </defs>
              <rect width="120" height="120" rx="28" fill="url(#ca-bg)"/>
              <rect x="0" y="0" width="120" height="60" rx="28" fill="rgba(255,255,255,0.12)"/>
              <g transform="translate(60,60)">
                <circle r="32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                <path d="M0,-30 L6,-6 L30,0 L6,6 L0,30 L-6,6 L-30,0 L-6,-6 Z" fill="url(#ca-accent)" opacity="0.9"/>
                <path d="M0,-14 L4,0 L0,14 L-4,0 Z" fill="white" opacity="0.95"/>
                <circle r="3" fill="white"/>
              </g>
              <rect x="8" y="8" width="50" height="24" rx="12" fill="rgba(255,255,255,0.15)"/>
            </svg>
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

        <Link
          href="/glassbank"
          className="project-card block hover:scale-[1.02] transition-transform mt-8"
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
      </div>
    </section>
  );
}
