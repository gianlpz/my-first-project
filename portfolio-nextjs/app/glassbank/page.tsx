import Link from "next/link";
import Image from "next/image";

// Case Hero Section
function CaseHero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 md:px-8 lg:px-16 pt-24 pb-8 max-w-7xl mx-auto">
      <div className="flex-1 max-w-xl text-center lg:text-left">
        <Link
          href="/#projects"
          className="inline-block text-white/60 text-sm mb-6 hover:text-coral transition-colors"
        >
          &larr; Back to Projects
        </Link>

        <svg className="w-14 h-14 mb-4 mx-auto lg:mx-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="GlassBank logo">
          <defs>
            <linearGradient id="cs-face-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#7B3FF2" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="cs-face-dark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7B3FF2" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="cs-face-mid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#7B3FF2" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="cs-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <filter id="cs-glow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="100,28 155,120 100,105" fill="url(#cs-face-dark)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <polygon points="100,28 45,120 100,105" fill="url(#cs-face-light)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
          <polygon points="155,120 100,105 130,165" fill="url(#cs-face-mid)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
          <polygon points="45,120 100,105 70,165" fill="url(#cs-face-light)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" opacity="0.7"/>
          <polygon points="100,28 100,105 130,165 100,145 70,165" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          <line x1="100" y1="28" x2="45" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#cs-glow)"/>
          <polygon points="100,28 72,74 100,65" fill="url(#cs-shine)" opacity="0.5"/>
          <circle cx="90" cy="55" r="2" fill="white" opacity="0.7" filter="url(#cs-glow)"/>
          <circle cx="100" cy="30" r="2.5" fill="white" opacity="0.8" filter="url(#cs-glow)"/>
        </svg>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          GlassBank
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          An inclusive mobile banking experience designed with accessibility and
          clarity at its core&mdash;featuring dual-mode interface, multilingual
          support, and transparent transactions.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">UX Research</span>
          <span className="meta-badge">UI Design</span>
          <span className="meta-badge">Mobile App</span>
          <span className="meta-badge">Figma</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="https://glassbank-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Try Demo
          </a>
          <Link href="#overview" className="btn btn-outline">
            Explore Process
          </Link>
        </div>
      </div>

      <div className="flex-1 mt-8 lg:mt-0 w-full overflow-hidden lg:overflow-visible">
        {/* Horizontal slide carousel */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory no-scrollbar lg:justify-center lg:overflow-x-visible">
          {[
            { src: "/images/wireframe-welcome.png", alt: "Welcome screen - Onboarding start" },
            { src: "/images/wireframe-language.png", alt: "Language selection screen" },
            { src: "/images/wireframe-dashboard-simplified.png", alt: "Simplified dashboard for accessibility" },
            { src: "/images/wireframe-dashboard-standard.png", alt: "Standard dashboard - Main experience" },
            { src: "/images/wireframe-transactions.png", alt: "Transaction details screen" },
            { src: "/images/wireframe-automation.png", alt: "Task automation screen" },
          ].map((screen, index) => (
            <div
              key={screen.src}
              className="relative flex-shrink-0 w-[120px] sm:w-[130px] md:w-[140px] lg:w-[130px] aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0f] snap-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                className="object-cover object-top"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Overview Section
function Overview() {
  const items = [
    {
      title: "The Problem",
      content:
        "Banking apps often exclude users with accessibility needs or language barriers. Research shows 4.5 million UK residents need multilingual banking support, yet most apps offer limited accessibility modes and cryptic transaction descriptions that create anxiety and confusion.",
    },
    {
      title: "The Solution",
      content:
        "GlassBank provides an inclusive banking experience with a dual-mode interface (Standard & Simplified), instant multilingual onboarding, clear merchant identification, and transparent transaction flows—making banking accessible to everyone.",
    },
    {
      title: "My Role",
      content:
        "Sole UX/UI Designer responsible for user research, persona development, competitive analysis, wireframing, visual design system, and interactive prototyping.",
    },
    {
      title: "Key Deliverables",
      content:
        "2 user personas, competitive analysis of 6 banks, 5 MVP feature flows, wireframe variations, high-fidelity designs, and a deployed prototype demonstrating the complete experience.",
    },
  ];

  return (
    <section id="overview" className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-coral text-sm font-semibold uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Research Section
function Research() {
  const insights = [
    {
      title: "Language Gap",
      content:
        "4.5 million UK residents need multilingual banking support, yet most apps only offer basic language switching post-onboarding.",
    },
    {
      title: "Accessibility Barriers",
      content:
        "Users with visual or cognitive needs must rely on device-level settings rather than in-app simplified modes designed for banking tasks.",
    },
    {
      title: "Transaction Anxiety",
      content:
        "Cryptic merchant codes and unclear transaction descriptions create confusion and erode trust in the banking relationship.",
    },
    {
      title: "Automation Friction",
      content:
        "Setting up recurring payments and standing orders involves too many steps, discouraging users from automating their finances.",
    },
    {
      title: "Update Confusion",
      content:
        "After app updates, users struggle to find familiar features, leading to frustration and support calls.",
    },
  ];

  const principles = [
    { title: "Inclusion First", content: "Design for diverse abilities and backgrounds from the start" },
    { title: "Clarity Over Density", content: "Prioritize clear information over feature-packed screens" },
    { title: "Trust Through Transparency", content: "Every transaction should be immediately understandable" },
    { title: "Respect for Time", content: "Minimize steps and cognitive load for common tasks" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Research & Discovery
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Through competitive analysis and user research, I identified critical
          gaps in how banking apps serve diverse user needs—particularly
          around accessibility, language support, and transaction clarity.
        </p>

        <h3 className="text-white text-xl font-semibold mb-4">
          Key Research Insights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {insights.map((insight) => (
            <div key={insight.title} className="insight-card">
              <h4 className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
                {insight.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {insight.content}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-white text-xl font-semibold mb-4">
          Core Design Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((principle) => (
            <div key={principle.title} className="principle-card">
              <h4 className="text-coral font-semibold mb-2">{principle.title}</h4>
              <p className="text-white/60 text-sm">{principle.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Personas Section
function Personas() {
  const personas = [
    {
      name: "Lorraine",
      subtitle: "34, Marketing Manager, London",
      avatar: "lorraine",
      quote:
        "I need to see where my money went without decoding cryptic merchant names.",
      goals: [
        "Quick access to balances and recent activity",
        "Efficient payments with minimal steps",
        "Clear spending insights at a glance",
      ],
      painPoints: [
        "Confusing merchant names in transactions",
        "Too many steps for simple transfers",
        "Difficulty tracking subscriptions",
      ],
      implications:
        "Clear merchant identification, streamlined payment flows, and visible spending categories.",
    },
    {
      name: "Javier",
      subtitle: "58, Spanish-speaking, Moderate tech comfort",
      avatar: "javier",
      quote:
        "I want to bank independently without asking my children for help.",
      goals: [
        "Bank independently in preferred language",
        "Understand all actions before confirming",
        "Feel confident navigating the app",
      ],
      needs: [
        "Larger text and high contrast options",
        "Native language throughout experience",
        "Simplified mode for essential tasks",
      ],
      implications:
        "Dual-mode interface, instant language selection at onboarding, and clear visual hierarchy.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          User Personas
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Two primary personas emerged from research, representing distinct but
          overlapping needs that guided all design decisions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personas.map((persona) => (
            <div key={persona.name} className="persona-card">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                    persona.avatar === "lorraine"
                      ? "bg-gradient-to-br from-coral to-[#f4a261]"
                      : "bg-gradient-to-br from-teal to-[#2a9d8f]"
                  }`}
                >
                  {persona.avatar === "lorraine" ? "\ud83d\udc69\u200d\ud83d\udcbc" : "\ud83d\udc68\u200d\ud83e\uddb3"}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {persona.name}
                  </h3>
                  <p className="text-white/60 text-sm">{persona.subtitle}</p>
                </div>
              </div>

              <div className="bg-white/5 border-l-2 border-coral p-4 rounded-r-lg mb-6">
                <p className="text-white/80 italic">&ldquo;{persona.quote}&rdquo;</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Goals
                  </h4>
                  <ul className="space-y-1">
                    {persona.goals.map((goal) => (
                      <li key={goal} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-teal">&bull;</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    {persona.painPoints ? "Pain Points" : "Needs"}
                  </h4>
                  <ul className="space-y-1">
                    {(persona.painPoints || persona.needs)?.map((item) => (
                      <li key={item} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-teal">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Design Implications
                  </h4>
                  <p className="text-white/70 text-sm">{persona.implications}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Competitive Analysis Section
function CompetitiveAnalysis() {
  const banks = ["Monzo", "Starling", "Revolut", "Barclays", "Lloyds", "NatWest"];
  const findings = [
    {
      label: "Finding 1",
      title: "Language Support Gap",
      description: "Most apps only offer language switching after account creation.",
      opportunity: "Instant multilingual onboarding",
      solution: "Language selection as first screen",
    },
    {
      label: "Finding 2",
      title: "Accessibility Mode Limitations",
      description: "No in-app simplified modes—users rely on device settings.",
      opportunity: "Banking-specific accessibility mode",
      solution: "Dual dashboard (Standard & Simplified)",
    },
    {
      label: "Finding 3",
      title: "Transaction Clarity Issues",
      description: "Cryptic merchant codes create confusion and mistrust.",
      opportunity: "Human-readable transaction info",
      solution: "Merchant Clarity 360 feature",
    },
    {
      label: "Finding 4",
      title: "Automation Friction",
      description: "Setting up recurring payments requires too many steps.",
      opportunity: "Streamlined automation setup",
      solution: "One-tap task automation",
    },
    {
      label: "Finding 5",
      title: "Update Anxiety",
      description: "Users get lost after app updates change familiar layouts.",
      opportunity: "Guided post-update experience",
      solution: "Post-Update Safety Net feature",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Competitive Analysis
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-3xl">
          Analyzed 6 leading UK banking apps to identify gaps and opportunities
          for differentiation.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {banks.map((bank) => (
            <span key={bank} className="bank-badge">
              {bank}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {findings.map((finding) => (
            <div key={finding.title} className="finding-card">
              <span className="inline-block bg-teal/20 text-teal text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                {finding.label}
              </span>
              <h4 className="text-white font-semibold mb-2">{finding.title}</h4>
              <p className="text-white/60 text-sm mb-4">{finding.description}</p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-coral font-medium">Opportunity:</span>{" "}
                  <span className="text-white/70">{finding.opportunity}</span>
                </p>
                <p>
                  <span className="text-coral font-medium">Solution:</span>{" "}
                  <span className="text-white/70">{finding.solution}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Design Showcase Section
function DesignShowcase() {
  const groups = [
    {
      title: "Onboarding Flow",
      description:
        "Language selection comes first—before account creation or any other step. This ensures non-English speakers can navigate the entire onboarding journey in their preferred language from the very first interaction.",
      images: [
        { src: "/images/wireframe-welcome.png", alt: "Welcome screen" },
        { src: "/images/wireframe-language.png", alt: "Language selection" },
      ],
    },
    {
      title: "Dashboard Modes",
      description:
        "Two distinct dashboard experiences: Standard mode for full-feature access, and Simplified mode with larger touch targets and essential actions only. Users can switch between modes with a single tap, giving them control over complexity.",
      images: [
        { src: "/images/wireframe-dashboard-standard.png", alt: "Standard dashboard" },
        { src: "/images/wireframe-dashboard-simplified.png", alt: "Simplified dashboard" },
      ],
    },
    {
      title: "Core Features",
      description:
        "Transactions show real merchant names and logos instead of cryptic codes, reducing confusion and building trust. The automation screen simplifies recurring payments to just a few taps, removing a major friction point identified in research.",
      images: [
        { src: "/images/wireframe-transactions.png", alt: "Transactions screen" },
        { src: "/images/wireframe-automation.png", alt: "Automation screen" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Design Showcase
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Key screens that demonstrate how research insights translated into
          design decisions.
        </p>

        <div className="space-y-16">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-coral text-xl font-semibold mb-3">
                  {group.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex-1 flex gap-4 justify-center">
                {group.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative w-[140px] sm:w-[160px] md:w-[180px] aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0f]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Design Process Section
function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Competitive analysis of 6 banks, identified 5 key gaps, developed design principles based on accessibility and inclusion research.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Created 2 user personas (Lorraine & Javier), mapped their journeys, and defined 5 MVP features to address discovered pain points.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Explored wireframe variations for each flow, established glassmorphism design system, created high-fidelity screens for all features.",
    },
    {
      number: "04",
      title: "Prototype",
      description:
        "Built interactive Figma prototype, deployed functional demo app, documented design decisions and accessibility considerations.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Design Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="text-3xl font-bold text-teal mb-4">
                {step.number}
              </div>
              <h3 className="text-white font-semibold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// MVP Features Section
function MVPFeatures() {
  const features = [
    {
      icon: "\ud83c\udf10",
      title: "Multilingual Instant Onboarding",
      description:
        "Choose your language before anything else. Complete the entire onboarding journey in your preferred language from the first tap.",
    },
    {
      icon: "\ud83d\udd04",
      title: "Adaptive Dashboard",
      description:
        "Standard mode for full features, Simplified mode for essential actions with larger touch targets. Switch anytime with one tap.",
    },
    {
      icon: "\ud83c\udfea",
      title: "Merchant Clarity 360",
      description:
        "No more cryptic codes. See merchant logos, readable names, and spending categories for every transaction.",
    },
    {
      icon: "\u26a1",
      title: "Task Automation",
      description:
        "Set up recurring payments in 3 taps. Schedule transfers, manage standing orders, and automate your finances effortlessly.",
    },
    {
      icon: "\ud83d\udee1\ufe0f",
      title: "Post-Update Safety Net",
      description:
        "After updates, a friendly guide shows you what changed and where to find moved features—never feel lost again.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          5 MVP Features
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Each feature directly addresses a gap identified in competitive
          research and user pain points.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-2xl flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Design System Section
function DesignSystem() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Design System
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          A glassmorphism-based visual language that balances modern aesthetics
          with accessibility requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Color Palette</h4>
            <div className="flex gap-3 mb-4">
              <div className="color-swatch primary" title="#7B3FF2" />
              <div className="color-swatch gradient" title="Purple to Pink" />
              <div className="color-swatch glass" title="Glass Effect" />
              <div className="color-swatch dark" title="#0a0a0f" />
            </div>
            <p className="text-white/60 text-sm">
              Primary purple (#7B3FF2) with purple-to-pink gradients. Dark
              backgrounds for reduced eye strain and modern aesthetic.
            </p>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Glassmorphism</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                15% opacity white backgrounds
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Backdrop blur for depth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Subtle borders for definition
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Layered card hierarchy
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Accessibility</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                WCAG 2.1 AA contrast ratios
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Touch targets min 44x44px
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Clear focus states
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7B3FF2]">&bull;</span>
                Simplified mode typography 20% larger
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Target Device</h4>
            <p className="text-white/60 text-sm">
              Designed for iPhone 14/15 Pro (393px width). Responsive layouts
              ensure compatibility across device sizes while maintaining optimal
              touch interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Learnings Section
function Learnings() {
  const learnings = [
    "Accessibility features benefit all users, not just those with specific needs",
    "Competitive analysis reveals opportunities that user interviews might miss",
    "Dual-mode interfaces require careful information architecture",
    "Language-first onboarding dramatically improves completion rates",
    "Glassmorphism can be accessible when contrast is carefully managed",
  ];

  const skills = [
    "User Research",
    "Persona Development",
    "Competitive Analysis",
    "User Flows",
    "Wireframing",
    "Visual Design",
    "Design Systems",
    "Accessibility",
    "Prototyping",
    "Figma",
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Learnings & Outcomes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-coral text-xl font-semibold mb-4">
              What I Learned
            </h3>
            <ul className="space-y-3">
              {learnings.map((learning) => (
                <li
                  key={learning}
                  className="text-white/70 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-coral text-xl font-semibold mb-4">
              Skills Demonstrated
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 text-center bg-gradient-to-b from-[#0a0a0f] to-[#0f1419]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experience GlassBank
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Explore the live prototype or return to see more of my work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://glassbank-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Try Demo
          </a>
          <Link href="/#projects" className="btn btn-outline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function GlassBankPage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Research />
      <Personas />
      <CompetitiveAnalysis />
      <DesignShowcase />
      <DesignProcess />
      <MVPFeatures />
      <DesignSystem />
      <Learnings />
      <CTA />
    </main>
  );
}
