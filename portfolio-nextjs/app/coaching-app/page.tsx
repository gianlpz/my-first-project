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

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          Coaching App
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          An evidence-based mobile coaching platform helping people grow in
          career, relationships, and personal development&mdash;with structured
          5-10 minute daily sessions built on proven coaching frameworks.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">UX Research</span>
          <span className="meta-badge">UI Design</span>
          <span className="meta-badge">Web App</span>
          <span className="meta-badge">Next.js</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://coaching-app-mauve.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try the Demo
          </a>
          <Link href="#overview" className="btn btn-outline">
            Explore Process
          </Link>
        </div>
      </div>

      <div className="flex-1 mt-8 lg:mt-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-[#8B7355] via-[#A09078] to-[#8A9E82] flex items-center justify-center shadow-2xl border border-white/10">
          <span className="text-white/90 text-8xl md:text-9xl font-bold">
            C
          </span>
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
        "People seeking personal growth face a gap: free self-help content is generic and lacks accountability, while professional coaching costs $150+ per session. No consumer app addresses career, relationships, and personal growth together in an affordable, evidence-based way.",
    },
    {
      title: "The Solution",
      content:
        "A mobile-first coaching platform delivering structured daily lessons (5-10 min) across 3 life domains, built on 7 evidence-based frameworks (GROW, CBT, ACT, Positive Psychology, etc.), with progress tracking, journaling, and streak-based motivation.",
    },
    {
      title: "My Role",
      content:
        "Sole UX/UI Designer and Developer — responsible for market research, persona development, competitive analysis, content strategy, visual design, and full-stack development.",
    },
    {
      title: "Key Deliverables",
      content:
        "5 user personas, competitive analysis of 7 apps, 7 evidence-based coaching frameworks mapped to exercises, 24 structured lessons across 3 categories, and a deployed production app.",
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
      title: "Market Gap",
      content:
        "$3.5-4.1B coaching market growing at 15.3% CAGR, but no consumer app covers career + relationships + growth together.",
    },
    {
      title: "Session Length Sweet Spot",
      content:
        "Research shows 5-10 min daily mobile sessions (Noom\u2019s gold standard) drive highest engagement and habit formation.",
    },
    {
      title: "Accountability Crisis",
      content:
        "Universal complaint across competitors: users lose motivation without structured accountability systems and progress visibility.",
    },
    {
      title: "Price Sensitivity",
      content:
        "Target users willing to pay $15-40/month, positioned between free self-help and $150+/session professional coaching.",
    },
    {
      title: "Multi-Domain Need",
      content:
        "Life challenges are interconnected; career stress affects relationships, which affects personal growth. Users need holistic support.",
    },
  ];

  const principles = [
    {
      title: "Evidence-Based",
      content:
        "Every exercise backed by proven coaching frameworks (GROW, CBT, ACT)",
    },
    {
      title: "Bite-Sized",
      content: "Complete any interaction in under 10 minutes",
    },
    {
      title: "Progress-Visible",
      content: "Streaks, badges, and radar charts make growth tangible",
    },
    {
      title: "Mobile-First",
      content: "Designed for on-the-go coaching during commutes and breaks",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Research & Discovery
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Through market analysis, competitive audits, and user research, I
          identified critical gaps in how coaching apps serve people seeking
          affordable, multi-domain personal growth support.
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

// Personas Section
function Personas() {
  const personas = [
    {
      name: "Carlos",
      subtitle: "24, Junior Marketing Coordinator",
      emoji: "\ud83d\udc68\u200d\ud83d\udcbc",
      gradient: "from-[#8B7355] to-[#A09078]",
      quote:
        "I want to grow but can\u2019t afford a coach and don\u2019t know where to start.",
      goals: [
        "Get promoted within 2 years",
        "Build confidence and leadership skills",
        "Develop a professional network",
      ],
      painPoints: [
        "No mentor or guidance at work",
        "Overwhelmed by generic self-help advice",
        "Compares himself to peers on social media",
      ],
      implications:
        "Career-focused content, streak motivation for daily habit building, 5-10 min sessions that fit a commute.",
      wtp: "$15-25/month",
    },
    {
      name: "Maya",
      subtitle: "29, UX Designer (Remote)",
      emoji: "\ud83d\udc69\u200d\ud83d\udcbb",
      gradient: "from-[#C4917B] to-[#E8B4A0]",
      quote:
        "I want to improve my relationship but therapy feels too heavy for what I need.",
      goals: [
        "Improve communication with partner",
        "Rebuild social circle after going remote",
        "Reduce loneliness and isolation",
      ],
      painPoints: [
        "Feels awkward bringing up relationship issues",
        "Values privacy highly, dislikes group settings",
        "Therapy feels like overkill for her needs",
      ],
      implications:
        "Relationship coaching with journaling prompts, privacy-first design, evening session optimization.",
      wtp: "$25-35/month",
    },
    {
      name: "Brandon",
      subtitle: "32, Software Engineer",
      emoji: "\ud83d\udc68\u200d\ud83d\udcbb",
      gradient: "from-[#8A9E82] to-[#6B8F5E]",
      quote:
        "I make good money but I\u2019m burned out and my relationship is suffering.",
      goals: [
        "Set healthy work-life boundaries",
        "Reduce stress and prevent burnout",
        "Reconnect with partner",
      ],
      painPoints: [
        "Too exhausted to research self-improvement solutions",
        "Sporadic app user, needs re-engagement hooks",
        "Previous self-help books and apps failed him",
      ],
      implications:
        "Multi-domain content (career + relationships), smart reminders, data visualizations for tracking progress.",
      wtp: "$30-40/month",
    },
    {
      name: "Daniela",
      subtitle: "22, Recent Graduate, Part-time Barista",
      emoji: "\ud83d\udc69\u200d\ud83c\udf93",
      gradient: "from-[#B8860B] to-[#DAA520]",
      quote:
        "I feel behind everyone my age and don\u2019t know what direction to go.",
      goals: [
        "Figure out a career direction",
        "Build financial literacy and confidence",
        "Gain independence and move out",
      ],
      painPoints: [
        "Anxious about the future, imposter syndrome",
        "Can\u2019t afford therapy or professional coaching",
        "Overwhelmed by too many choices and paths",
      ],
      implications:
        "Low-cost/free tier essential, short interactive exercises, community features, TikTok-generation UX patterns.",
      wtp: "$10-15/month MAX",
    },
    {
      name: "Sam",
      subtitle: "38, Operations Manager",
      emoji: "\ud83d\udc68\u200d\ud83d\udcbc",
      gradient: "from-[#6B7B8D] to-[#8B9DAF]",
      quote:
        "I\u2019m stable but unfulfilled \u2014 I want to reinvent myself but I have responsibilities.",
      goals: [
        "Explore a career pivot opportunity",
        "Build dating confidence post-divorce",
        "Become a better co-parent and start a side project",
      ],
      painPoints: [
        "Stuck between responsibilities and personal dreams",
        "Recently divorced, rebuilding self-identity",
        "Needs step-by-step structured guidance",
      ],
      implications:
        "Structured milestone plans, multi-domain support (career + relationships), weekend and lunch session optimization.",
      wtp: "$25-40/month",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          User Personas
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Five primary personas emerged from research, representing distinct
          life stages and overlapping needs that guided all design decisions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personas.map((persona) => (
            <div key={persona.name} className="persona-card">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br ${persona.gradient}`}
                >
                  {persona.emoji}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {persona.name}
                  </h3>
                  <p className="text-white/60 text-sm">{persona.subtitle}</p>
                </div>
              </div>

              <div className="bg-white/5 border-l-2 border-coral p-4 rounded-r-lg mb-6">
                <p className="text-white/80 italic">
                  &ldquo;{persona.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Goals
                  </h4>
                  <ul className="space-y-1">
                    {persona.goals.map((goal) => (
                      <li
                        key={goal}
                        className="text-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-teal">&bull;</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Pain Points
                  </h4>
                  <ul className="space-y-1">
                    {persona.painPoints.map((point) => (
                      <li
                        key={point}
                        className="text-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-teal">&bull;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Design Implications
                  </h4>
                  <p className="text-white/70 text-sm">
                    {persona.implications}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    Willingness to Pay:
                  </span>{" "}
                  <span className="text-teal text-sm font-medium">
                    {persona.wtp}
                  </span>
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
  const competitors = [
    "BetterUp",
    "Marlee",
    "Noom",
    "BetterHelp",
    "Headspace",
    "Fabulous",
    "Coach.me",
  ];

  const findings = [
    {
      label: "Finding 1",
      title: "Enterprise Lock-In",
      description:
        "Major coaching platforms (BetterUp, CoachHub) only serve B2B at $150-300/session.",
      opportunity: "Consumer-first affordable coaching",
      solution: "Direct-to-consumer model at $15-40/month",
    },
    {
      label: "Finding 2",
      title: "Single-Domain Focus",
      description:
        "Competitors focus on one area (Noom = health, Headspace = mindfulness, BetterHelp = therapy).",
      opportunity: "Multi-domain platform",
      solution:
        "Career + Relationships + Personal Growth in one app",
    },
    {
      label: "Finding 3",
      title: "Generic Content",
      description:
        "Universal complaint: content becomes repetitive and impersonal after initial engagement.",
      opportunity: "Framework-based structured progression",
      solution: "7 evidence-based frameworks mapped to 24 lessons",
    },
    {
      label: "Finding 4",
      title: "Accountability Gap",
      description:
        "Users lose motivation without structure; most apps lack meaningful accountability systems.",
      opportunity: "Streak system + milestone badges",
      solution:
        "Daily streaks, 7/14/30-day badges driving 40-60% higher DAU",
    },
    {
      label: "Finding 5",
      title: "Subscription Fatigue",
      description:
        "Users frustrated by dark billing patterns and unclear cancellation processes.",
      opportunity: "Transparent, fair pricing model",
      solution: "Clear pricing with no hidden fees or dark patterns",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Competitive Analysis
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-3xl">
          Analyzed 7 leading coaching and wellness apps to identify gaps and
          opportunities for differentiation.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {competitors.map((name) => (
            <span key={name} className="bank-badge">
              {name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {findings.map((finding) => (
            <div key={finding.title} className="finding-card">
              <span className="inline-block bg-teal/20 text-teal text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                {finding.label}
              </span>
              <h4 className="text-white font-semibold mb-2">
                {finding.title}
              </h4>
              <p className="text-white/60 text-sm mb-4">
                {finding.description}
              </p>
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

// Design Process Section
function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Market analysis of $3.5B coaching industry, competitive audit of 7 apps, identified 5 key market gaps and underserved user segments.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Created 5 user personas, mapped 7 coaching frameworks to exercise types, designed content structure across 3 life domains.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Built mobile-first UI with warm nature-inspired palette, created 24 structured lessons across 6 modules with 6 interactive exercise types.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Full-stack development with Next.js 16, Drizzle ORM, and NextAuth. Deployed to Vercel with complete lesson engine and progress tracking.",
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
      icon: "\ud83d\udcda",
      title: "Structured Daily Lessons",
      description:
        "5-step coaching format (Hook \u2192 Learn \u2192 Do \u2192 Reflect \u2192 Commit) completable in 5-10 minutes, designed for daily habit building.",
    },
    {
      icon: "\ud83c\udfaf",
      title: "6 Interactive Exercise Types",
      description:
        "Ranking, multiple-choice, checklist, scale, card-sort, and freeform exercises that keep sessions engaging and varied.",
    },
    {
      icon: "\ud83d\udcca",
      title: "Life Satisfaction Assessment",
      description:
        "8-dimension spider chart measuring Career, Health, Relationships, Financial, Growth, Fun, Family, and Community satisfaction.",
    },
    {
      icon: "\ud83d\udd25",
      title: "Streak & Badge System",
      description:
        "Daily streaks with milestone badges at 7, 14, and 30 days to drive consistent engagement and habit formation.",
    },
    {
      icon: "\ud83d\udcdd",
      title: "Reflective Journal",
      description:
        "Auto-saved coaching reflections organized by date for tracking personal insights and growth over time.",
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
          research and user persona pain points.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B7355] to-[#8A9E82] flex items-center justify-center text-2xl flex-shrink-0">
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
          A warm, nature-inspired visual language designed to feel calm and
          supportive&mdash;the opposite of anxious productivity apps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Color Palette</h4>
            <div className="flex gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-lg border-2 border-white/10"
                style={{ background: "#FAF8F5" }}
                title="#FAF8F5 Warm Beige"
              />
              <div
                className="w-12 h-12 rounded-lg border-2 border-white/10"
                style={{ background: "#8B7355" }}
                title="#8B7355 Taupe"
              />
              <div
                className="w-12 h-12 rounded-lg border-2 border-white/10"
                style={{ background: "#C4917B" }}
                title="#C4917B Dusty Rose"
              />
              <div
                className="w-12 h-12 rounded-lg border-2 border-white/10"
                style={{ background: "#8A9E82" }}
                title="#8A9E82 Sage Green"
              />
            </div>
            <p className="text-white/60 text-sm">
              Warm beige (#FAF8F5) background with nature-inspired category
              colors: Career (taupe), Relationships (dusty rose), Personal
              Growth (sage green).
            </p>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Typography</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Clean, readable type system
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Optimized for lesson content
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Mobile reading comfort
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                High contrast for accessibility
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Components</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Card-based UI with smooth transitions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Progress bars and step indicators
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Radar charts for life assessment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A9E82]">&bull;</span>
                Interactive exercise components
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Target Device</h4>
            <p className="text-white/60 text-sm">
              Mobile-first responsive design that adapts to phone, tablet, and
              desktop. Bottom navigation on mobile, sidebar on desktop. Multi-column
              grids on wider screens with constrained reading widths for lesson
              content.
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
    "Evidence-based frameworks give coaching content structure and credibility that generic advice lacks",
    "Multi-domain coaching reveals how interconnected life challenges really are",
    "5-10 minute session length is the sweet spot for daily mobile engagement",
    "Streak mechanics need careful calibration to motivate without creating guilt",
    "Building the full stack from research to deployment deepened my understanding of how UX decisions impact development",
  ];

  const skills = [
    "User Research",
    "Persona Development",
    "Competitive Analysis",
    "Content Strategy",
    "Visual Design",
    "Mobile-First Design",
    "Frontend Development",
    "Next.js",
    "React",
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
          Experience the Coaching App
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Try the live demo or return to see more of my work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://coaching-app-mauve.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try the Demo
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
export default function CoachingAppPage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Research />
      <Personas />
      <CompetitiveAnalysis />
      <DesignProcess />
      <MVPFeatures />
      <DesignSystem />
      <Learnings />
      <CTA />
    </main>
  );
}
