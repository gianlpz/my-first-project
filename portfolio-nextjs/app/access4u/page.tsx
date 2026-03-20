import Link from "next/link";

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

        <div className="mb-4 flex justify-center lg:justify-start">
          <svg
            className="w-12 h-12"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Access4U logo"
          >
            <defs>
              <linearGradient id="hero-a4u-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="hero-a4u-shield" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="hero-a4u-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="50%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-a4u-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="120" height="120" rx="28" fill="url(#hero-a4u-bg)" />
            <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)" />
            <g transform="translate(60,60)">
              <path d="M0,-32 L-22,0 L-14,24 L14,24 L22,0 Z" fill="url(#hero-a4u-shield)" />
              <polyline points="-8,2 -2,10 10,-6" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            <polygon points="60,10 35,45 60,38" fill="url(#hero-a4u-shine)" opacity="0.4" />
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.5" filter="url(#hero-a4u-glow)" />
            <circle cx="90" cy="30" r="2.5" fill="white" opacity="0.4" filter="url(#hero-a4u-glow)" />
            <circle cx="30" cy="90" r="2.5" fill="white" opacity="0.3" filter="url(#hero-a4u-glow)" />
            <circle cx="90" cy="90" r="3" fill="white" opacity="0.4" filter="url(#hero-a4u-glow)" />
            <line x1="33" y1="30" x2="48" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
            <line x1="87" y1="30" x2="72" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
            <line x1="33" y1="90" x2="48" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
            <line x1="87" y1="90" x2="72" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          Access4U
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          An accessibility scanner that uses axe-core and AI to detect WCAG
          violations, explain them in plain language, and generate corrected
          code&mdash;with visual diffs and before/after previews.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">Accessibility</span>
          <span className="meta-badge">AI Engineering</span>
          <span className="meta-badge">axe-core</span>
          <span className="meta-badge">WCAG</span>
          <span className="meta-badge">Next.js 16</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://access4u.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/Access4U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Source
          </a>
        </div>
      </div>

      {/* Right side — audit results mockup */}
      <div className="flex-1 mt-8 lg:mt-0 flex items-center justify-center">
        <div className="w-72 md:w-80 rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-2xl overflow-hidden">
          {/* Audit header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-300 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60,28 L38,60 L46,84 L74,84 L82,60 Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium">
              Audit Results
            </span>
            <span className="ml-auto text-xs text-white/40">3 violations</span>
          </div>
          {/* Violation rows */}
          <div className="p-4 space-y-3">
            <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center gap-3">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-red-500/20 text-red-400">
                Critical
              </span>
              <p className="text-white/70 text-xs">
                Images must have alt text
              </p>
            </div>
            <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center gap-3">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-400">
                Serious
              </span>
              <p className="text-white/70 text-xs">
                Color contrast ratio 2.1:1
              </p>
            </div>
            <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center gap-3">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-400">
                Serious
              </span>
              <p className="text-white/70 text-xs">
                Form input missing label
              </p>
            </div>
            <div className="mt-2 bg-indigo-500/10 rounded-xl px-3 py-2">
              <p className="text-indigo-300 text-[10px] mb-1">
                AI generating fixes...
              </p>
              <p className="text-white/50 text-[10px]">
                + &lt;img src=&quot;hero.jpg&quot; alt=&quot;Team meeting&quot;&gt;
              </p>
            </div>
          </div>
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
        "Developers publish inaccessible web content unknowingly. Existing audit tools flag WCAG violations but don't explain what they mean or how to fix them — leaving developers to interpret cryptic error codes on their own.",
    },
    {
      title: "The Solution",
      content:
        "Run axe-core in a hidden iframe (client-side, no server needed), then send violations to Gemini AI with generateObject() to get plain-language explanations and corrected code — displayed as visual diffs with before/after previews.",
    },
    {
      title: "My Role",
      content:
        "Sole developer — designed the iframe audit architecture, built the AI analysis pipeline with structured output, created the contrast engine, visual diff system, PDF/JSON export, and a Chrome browser extension.",
    },
    {
      title: "Key Deliverables",
      content:
        "Accessibility scanner with AI explanations and code fixes, visual before/after diffs, contrast ratio matrix, PDF and JSON report export, URL scanning with screenshots, and a Chrome extension for importing audit data.",
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

// Architecture & Design Decisions Section
function Architecture() {
  const decisions = [
    {
      title: "Client-Side axe-core",
      content:
        "Running axe-core in a hidden iframe (srcdoc, same-origin) means no server-side Puppeteer or headless browser needed — the entire audit happens in the user's browser, keeping the app stateless and fast.",
    },
    {
      title: "generateObject() Over streamText()",
      content:
        "AI fixes need to map back to specific violation IDs. generateObject() returns structured JSON that can be programmatically matched to each violation, while streamText() would require fragile parsing.",
    },
    {
      title: "Hidden + Visible Iframes",
      content:
        "A hidden iframe runs the audit (same-origin for axe-core access), while a visible iframe shows the preview. When AI fixes are available, a split before/after view lets users compare both versions.",
    },
    {
      title: "No Database, No Auth",
      content:
        "Access4U is a stateless tool — paste HTML, get results. No user accounts or stored data means zero privacy concerns and simpler architecture. Every scan is ephemeral.",
    },
    {
      title: "AI Provider Abstraction",
      content:
        "An abstraction layer (ai-provider.ts) lets the app switch between Gemini and Spike.land with a single env var. New providers can be added without touching the core scanning logic.",
    },
  ];

  const principles = [
    {
      title: "Scan First, Explain Second",
      content:
        "Run the deterministic axe-core audit before involving AI — never let the model guess at violations",
    },
    {
      title: "Show, Don't Tell",
      content:
        "Visual diffs and before/after previews communicate fixes better than text descriptions alone",
    },
    {
      title: "Stay Stateless",
      content:
        "No database, no auth, no stored data — every scan is self-contained and ephemeral",
    },
    {
      title: "Structured Output",
      content:
        "Use generateObject() with Zod schemas so AI responses are always valid, parseable JSON",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Architecture & Design Decisions
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Every choice was driven by one goal: make accessibility auditing fast,
          understandable, and actionable — without requiring a server or storing
          any data.
        </p>

        <h3 className="text-white text-xl font-semibold mb-4">
          Key Technical Decisions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {decisions.map((decision) => (
            <div key={decision.title} className="insight-card">
              <h4 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">
                {decision.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {decision.content}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-white text-xl font-semibold mb-4">
          Engineering Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((principle) => (
            <div key={principle.title} className="principle-card">
              <h4 className="text-coral font-semibold mb-2">
                {principle.title}
              </h4>
              <p className="text-white/60 text-sm">{principle.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      label: "Step 1",
      title: "Input",
      description:
        "Paste raw HTML or enter a URL. The URL scanner fetches the page content and captures a screenshot for reference.",
    },
    {
      label: "Step 2",
      title: "Scan",
      description:
        "axe-core runs in a hidden iframe (srcdoc, same-origin) and returns every WCAG violation with severity, affected elements, and rule IDs.",
    },
    {
      label: "Step 3",
      title: "Analyze",
      description:
        "Violations are sent to Gemini AI via generateObject(). The model returns plain-language explanations and corrected code for each violation.",
    },
    {
      label: "Step 4",
      title: "Output",
      description:
        "Results appear as visual diffs (before/after code), a live preview with split view, contrast matrix, and exportable PDF/JSON reports.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Four steps from input to actionable fixes — the entire pipeline runs
          client-side except for the AI analysis call.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.title} className="finding-card">
              <span className="inline-block bg-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                {step.label}
              </span>
              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
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

// Development Process Section
function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Accessibility Engine",
      description:
        "Built the iframe-based axe-core runner. HTML is loaded into a hidden iframe via srcdoc (same-origin), axe-core runs against the DOM, and violations are extracted with severity, selectors, and rule metadata.",
    },
    {
      number: "02",
      title: "AI Pipeline",
      description:
        "Integrated Gemini via AI SDK's generateObject() with Zod schemas. Each violation gets a plain-language explanation and corrected code. Built an abstraction layer so providers (Gemini, Spike.land) are swappable via env var.",
    },
    {
      number: "03",
      title: "Visual Diff & Preview",
      description:
        "Added react-diff-viewer-continued for side-by-side code diffs. Built a split iframe preview (before/after) so users can visually confirm fixes. Created the colour extractor and contrast ratio calculator.",
    },
    {
      number: "04",
      title: "Export & Extension",
      description:
        "Added PDF export via jsPDF and JSON download for CI integration. Built a Chrome browser extension that lets users import audit data directly from any page they're browsing.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Development Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="text-3xl font-bold text-indigo-400 mb-4">
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

// Key Technical Features Section
function TechnicalFeatures() {
  const features = [
    {
      icon: "🛡️",
      title: "Client-Side Auditing",
      description:
        "axe-core runs entirely in the browser via a hidden iframe — no server-side Puppeteer or headless browser needed. Keeps the app stateless and fast.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Explanations",
      description:
        "Gemini AI explains each violation in plain language and generates corrected code using generateObject() for structured, reliable output.",
    },
    {
      icon: "🔀",
      title: "Visual Code Diffs",
      description:
        "react-diff-viewer-continued shows side-by-side before/after diffs for every fix, so developers can see exactly what changed and why.",
    },
    {
      icon: "👁️",
      title: "Live Before/After Preview",
      description:
        "Split iframe view renders the original and fixed HTML side by side, letting users visually confirm that fixes work correctly.",
    },
    {
      icon: "🎨",
      title: "Contrast Matrix",
      description:
        "Extracts colour pairs from rendered HTML and calculates WCAG contrast ratios, flagging combinations that fail AA or AAA thresholds.",
    },
    {
      icon: "📄",
      title: "PDF & JSON Export",
      description:
        "Generate downloadable reports via jsPDF for stakeholders or JSON files for CI/CD pipeline integration.",
    },
    {
      icon: "🧩",
      title: "Chrome Extension",
      description:
        "A browser extension that lets users import audit data from any page directly into Access4U for analysis and AI-powered fixes.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Key Technical Features
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Seven capabilities that make accessibility auditing fast,
          understandable, and actionable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-2xl flex-shrink-0">
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

// Tech Stack Section
function TechStack() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tech Stack & Architecture
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Four layers working together&mdash;from the accessibility engine to
          the export pipeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Frontend</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Next.js 16 App Router
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                React 19
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Tailwind CSS v4
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                react-diff-viewer-continued
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">
              Accessibility Engine
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                axe-core (client-side)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Hidden iframe (srcdoc)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Colour extractor
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Contrast ratio calculator
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">AI Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Google Gemini
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                AI SDK (generateObject)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Zod structured output
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Provider abstraction layer
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Tools & Export</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                jsPDF for PDF reports
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                JSON export for CI/CD
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                Chrome browser extension
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">&bull;</span>
                URL scanner + screenshots
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Learnings & Outcomes Section
function Learnings() {
  const learnings = [
    "Hidden iframes with srcdoc give you same-origin access for DOM auditing without needing a server — a powerful pattern for client-side tools",
    "generateObject() with Zod schemas turns unreliable AI text into structured, typed JSON you can program against",
    "Showing visual diffs alongside plain-language explanations makes accessibility fixes understandable to any developer, not just WCAG experts",
    "Building an AI provider abstraction early paid off when adding Spike.land — the core logic didn't change at all",
    "Contrast ratio calculations require extracting computed styles from rendered HTML, not just parsing CSS — the colour extractor handles inheritance and defaults",
    "Browser extensions need careful message passing design — the import flow from extension to web app taught me about cross-context communication",
  ];

  const skills = [
    "Accessibility (WCAG)",
    "axe-core",
    "AI Engineering",
    "Structured Output",
    "Gemini AI",
    "AI SDK",
    "Next.js 16",
    "Iframe Architecture",
    "Browser Extensions",
    "Zod",
    "PDF Generation",
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
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
          Try Access4U
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Scan any HTML for accessibility violations and get AI-powered fixes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://access4u.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/Access4U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function Access4UPage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Architecture />
      <HowItWorks />
      <DevelopmentProcess />
      <TechnicalFeatures />
      <TechStack />
      <Learnings />
      <CTA />
    </main>
  );
}
