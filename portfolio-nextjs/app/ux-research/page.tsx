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
            aria-label="UX Research App logo"
          >
            <defs>
              <linearGradient
                id="hero-ux-bg"
                x1="0"
                y1="0"
                x2="120"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <rect width="120" height="120" rx="28" fill="url(#hero-ux-bg)" />
            {/* Magnifying glass */}
            <circle
              cx="52"
              cy="52"
              r="22"
              stroke="white"
              strokeWidth="5"
              fill="none"
              opacity="0.9"
            />
            <line
              x1="68"
              y1="68"
              x2="88"
              y2="88"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* User silhouette inside lens */}
            <circle cx="52" cy="46" r="7" fill="white" opacity="0.7" />
            <path
              d="M40 64 Q46 56 52 56 Q58 56 64 64"
              stroke="white"
              strokeWidth="3"
              fill="none"
              opacity="0.7"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          UX Research App
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          An AI-powered UX research assistant with 6 specialized
          tools&mdash;from personas to accessibility audits&mdash;built with
          Next.js 16, Vercel AI SDK, and Google Gemini.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">AI Engineering</span>
          <span className="meta-badge">Tool Use</span>
          <span className="meta-badge">Streaming</span>
          <span className="meta-badge">UX Research</span>
          <span className="meta-badge">Next.js 16</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://ux-research-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/ux-research-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Source
          </a>
        </div>
      </div>

      {/* Right side — chat mockup */}
      <div className="flex-1 mt-8 lg:mt-0 flex items-center justify-center">
        <div className="w-72 md:w-80 rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-2xl overflow-hidden">
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="52"
                  cy="52"
                  r="22"
                  stroke="white"
                  strokeWidth="5"
                  fill="none"
                />
                <line
                  x1="68"
                  y1="68"
                  x2="88"
                  y2="88"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium">
              UX Research Assistant
            </span>
          </div>
          {/* Chat messages */}
          <div className="p-4 space-y-3">
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/70 text-xs">
                Hi! I can help with UX research. Describe your product and
                I&apos;ll generate personas, empathy maps, and more.
              </p>
            </div>
            <div className="bg-orange-500/20 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto">
              <p className="text-orange-200 text-xs">
                Create a persona for a fitness app targeting busy parents
              </p>
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/50 text-[10px] mb-1">
                Calling createPersona...
              </p>
              <p className="text-white/50 text-[10px]">
                Generating structured output...
              </p>
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/70 text-xs font-semibold mb-1">
                Sarah Chen, 34
              </p>
              <p className="text-white/50 text-[10px]">
                Marketing Manager &bull; Denver, CO
              </p>
              <p className="text-white/50 text-[10px] mt-1 italic">
                &quot;I need workouts that fit between school drop-off and my
                first meeting.&quot;
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
        "UX research is expensive and time-consuming. Small teams skip it entirely, leading to products built on assumptions rather than user understanding. Professional research tools cost thousands per year.",
    },
    {
      title: "The Solution",
      content:
        "A chat-based AI assistant with 6 specialized research tools that generates personas, empathy maps, user flows, pain point analyses, accessibility audits, and heuristic evaluations from natural language descriptions.",
    },
    {
      title: "My Role",
      content:
        "Sole AI engineer and frontend developer — designed the system prompt, built 6 research framework functions, implemented tool orchestration with streaming, and created 6 rich card components to visualize results.",
    },
    {
      title: "Key Deliverables",
      content:
        "6 AI tools with Zod-validated schemas, 6 visual card components, a streaming chat interface with tool-aware message routing, and a companion MCP server for IDE integration.",
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
      title: "Pure Functions Over API Calls",
      content:
        "Each research tool is a pure TypeScript function that takes structured input and returns structured output. No external API calls — the AI model does the creative work, the framework enforces the structure.",
    },
    {
      title: "Tool Orchestration",
      content:
        "The AI decides which tool(s) to call based on the user's message. It can chain tools naturally — a persona leads to an empathy map, which reveals pain points to analyze.",
    },
    {
      title: "Streaming with Rich Cards",
      content:
        "Tool results render as visual cards (not raw JSON) while text streams token-by-token. The polymorphic message router matches tool names to card components in real-time.",
    },
    {
      title: "Polymorphic Message Routing",
      content:
        "A TOOL_CARDS record maps each tool name to its React component. When a tool result arrives, the router looks up the component and renders the correct card — no switch statements needed.",
    },
    {
      title: "Zod Schema Contracts",
      content:
        "Every tool has a Zod-validated input schema that constrains what the AI can pass. This creates a type-safe contract between the AI model and the framework functions.",
    },
  ];

  const principles = [
    {
      title: "Let the AI Create",
      content:
        "The model generates creative content (names, bios, insights); the framework enforces structure",
    },
    {
      title: "Show, Don't Tell",
      content:
        "Rich visual cards communicate research findings more effectively than walls of text",
    },
    {
      title: "Chain Naturally",
      content:
        "Tools suggest logical next steps — a persona leads to a user flow, pain points lead to an accessibility audit",
    },
    {
      title: "Validate at Boundaries",
      content:
        "Zod schemas at the tool boundary ensure type safety between the AI model and framework code",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Architecture & Design Decisions
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Every decision was driven by one goal: make professional UX research
          accessible through a simple chat interface.
        </p>

        <h3 className="text-white text-xl font-semibold mb-4">
          Key Technical Decisions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {decisions.map((decision) => (
            <div key={decision.title} className="insight-card">
              <h4 className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
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

// Research Tools Section
function ResearchTools() {
  const tools = [
    {
      icon: "👤",
      name: "createPersona",
      subtitle: "User Persona Generator",
      gradient: "from-orange-600 to-orange-400",
      quote: 'createPersona({ product: "fitness app", targetUser: "busy parent", goals: [...], frustrations: [...] })',
      inputs: [
        "product — the product or service name",
        "targetUser — type of user (e.g., 'busy parent')",
        "goals — what the user wants to achieve (2-4)",
        "frustrations — what frustrates them (2-4)",
      ],
      returns:
        "Full persona with name, age, occupation, bio, quote, goals, frustrations, behaviors, motivations, and tech comfort level",
      whenUsed:
        "When a user describes a product and target audience. The AI extracts goals and frustrations from natural language to populate the input.",
    },
    {
      icon: "💭",
      name: "createEmpathyMap",
      subtitle: "Says/Thinks/Does/Feels Mapper",
      gradient: "from-pink-600 to-pink-400",
      quote: 'createEmpathyMap({ userType: "new user", context: "onboarding flow", observations: [...] })',
      inputs: [
        "userType — the type of user being studied",
        "context — scenario being mapped",
        "observations — user quotes, behaviors, thoughts (6-10 items)",
      ],
      returns:
        "Empathy map with categorized Says, Thinks, Does, Feels quadrants plus actionable insights and user needs",
      whenUsed:
        "After a persona is created or when a user describes observed behaviors. Often chained after createPersona.",
    },
    {
      icon: "🗺️",
      name: "mapUserFlow",
      subtitle: "User Journey Mapper",
      gradient: "from-amber-600 to-amber-400",
      quote: 'mapUserFlow({ userGoal: "complete checkout", startingPoint: "product page" })',
      inputs: [
        "userGoal — what the user is trying to accomplish",
        "startingPoint — where the journey begins",
        "steps — specific steps in the flow (optional)",
      ],
      returns:
        "Journey map with touchpoints, emotional states (positive/neutral/frustrated/confused/anxious), pain points, and opportunities per step",
      whenUsed:
        "When mapping a specific user task or workflow. Steps are auto-generated if not provided, making it easy to use with minimal input.",
    },
    {
      icon: "⚡",
      name: "analyzePainPoints",
      subtitle: "Pain Point Prioritizer",
      gradient: "from-red-600 to-red-400",
      quote: 'analyzePainPoints({ painPoints: [...], product: "e-commerce site" })',
      inputs: [
        "painPoints — list of pain points from research",
        "product — the product being analyzed",
      ],
      returns:
        "Prioritized list with severity x frequency matrix, category breakdown, impact descriptions, and top recommendation",
      whenUsed:
        "After user flows reveal pain points or when a user lists known issues. Categories include usability, performance, accessibility, trust, content, navigation, onboarding, and pricing.",
    },
    {
      icon: "♿",
      name: "auditAccessibility",
      subtitle: "WCAG 2.2 Accessibility Auditor",
      gradient: "from-blue-600 to-blue-400",
      quote: 'auditAccessibility({ uiDescription: "...", userGroups: [...], features: [...] })',
      inputs: [
        "uiDescription — description of the UI layout and elements",
        "userGroups — groups to consider (e.g., 'screen reader users')",
        "features — UI features to audit (e.g., 'navigation menu')",
      ],
      returns:
        "Issues mapped to WCAG criteria with severity, compliance checklist (perceivable/operable/understandable/robust), inclusive design suggestions, and overall score",
      whenUsed:
        "When evaluating a design for accessibility. Covers visual, motor, cognitive, and auditory disability types with A/AA/AAA level compliance.",
    },
    {
      icon: "📋",
      name: "evaluateHeuristics",
      subtitle: "Nielsen's 10 Heuristics Evaluator",
      gradient: "from-violet-600 to-violet-400",
      quote: 'evaluateHeuristics({ uiDescription: "...", evaluationFocus: ["navigation", "error handling"] })',
      inputs: [
        "uiDescription — description of the UI being evaluated",
        "systemContext — context about the product type (optional)",
        "evaluationFocus — specific areas to focus on (optional)",
      ],
      returns:
        "Score for each of Nielsen's 10 heuristics, violation details with severity (cosmetic/minor/major/critical), and top recommendations",
      whenUsed:
        "For expert UX review of a design or prototype. Evaluates visibility of system status, error prevention, consistency, and 7 more heuristics.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The 6 Research Tools
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Six specialized tools the AI calls based on your description —
          converting natural language into structured UX research artifacts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((t) => (
            <div key={t.name} className="persona-card">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br ${t.gradient}`}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {t.name}
                  </h3>
                  <p className="text-white/60 text-sm">{t.subtitle}</p>
                </div>
              </div>

              <div className="bg-white/5 border-l-2 border-coral p-4 rounded-r-lg mb-6">
                <p className="text-white/80 italic font-mono text-sm break-all">
                  {t.quote}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Inputs
                  </h4>
                  <ul className="space-y-1">
                    {t.inputs.map((input) => (
                      <li
                        key={input}
                        className="text-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-teal">&bull;</span>
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Returns
                  </h4>
                  <p className="text-white/70 text-sm">{t.returns}</p>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    When Used
                  </h4>
                  <p className="text-white/70 text-sm">{t.whenUsed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tool Frameworks Section
function ToolFrameworks() {
  const frameworks = [
    "create-persona.ts",
    "create-empathy-map.ts",
    "map-user-flow.ts",
    "analyze-pain-points.ts",
    "audit-accessibility.ts",
    "evaluate-heuristics.ts",
  ];

  const steps = [
    {
      label: "Step 1",
      title: "User Describes",
      description:
        "The user describes a product, user type, or design in natural language. No forms, no structured input required.",
      detail:
        "Natural language lowers the barrier — you don't need to know UX methodology to use the tools.",
    },
    {
      label: "Step 2",
      title: "AI Interprets",
      description:
        "The AI reads the description and decides which tool(s) to call. It extracts goals, frustrations, and context to build the tool input.",
      detail:
        "The system prompt guides the AI to pick the right tool and ask clarifying questions if needed.",
    },
    {
      label: "Step 3",
      title: "Framework Executes",
      description:
        "The pure TypeScript framework function takes the Zod-validated input and produces structured output — a persona, empathy map, or audit report.",
      detail:
        "Pure functions make each tool independently testable with Vitest.",
    },
    {
      label: "Step 4",
      title: "Structured Output",
      description:
        "Each tool returns a typed object (PersonaOutput, EmpathyMap, UserFlow, etc.) that matches the card component's expected props.",
      detail:
        "TypeScript interfaces ensure the framework output always matches what the card expects.",
    },
    {
      label: "Step 5",
      title: "Card Renders",
      description:
        "The TOOL_CARDS router maps the tool name to its React component, rendering a rich visual card with the structured data.",
      detail:
        "Polymorphic routing means adding a new tool only requires adding one entry to the record.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The Tool Pipeline
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-3xl">
          From natural language to visual research artifacts in 5 steps — each
          tool follows the same pipeline.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {frameworks.map((doc) => (
            <span key={doc} className="bank-badge">
              {doc}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.title} className="finding-card">
              <span className="inline-block bg-teal/20 text-teal text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                {step.label}
              </span>
              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
              <p className="text-white/60 text-sm mb-4">{step.description}</p>
              <p>
                <span className="text-coral font-medium text-sm">Why:</span>{" "}
                <span className="text-white/70 text-sm">{step.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tool in Action Section
function ToolInAction() {
  const scenarios = [
    {
      title: "Single Tool Call",
      description:
        "A straightforward request — the AI picks the right tool, extracts structured inputs from natural language, and renders a persona card.",
      trace: `User: "Create a persona for a meditation app
       targeting stressed college students"

Step 1 → createPersona({
   product: "meditation app",
   targetUser: "stressed college student",
   goals: ["reduce anxiety", "build consistency",
           "improve sleep"],
   frustrations: ["no time", "apps feel generic",
                   "hard to stay motivated"]
})

Step 2 → Persona Card renders:
   "Alex Rivera, 21 — Psychology Student"
   "I know meditation helps, but I can never
    stick with it past day 3."`,
    },
    {
      title: "Tool Chaining",
      description:
        "The AI chains two tools in sequence — generating a persona first, then using its details to create a matching empathy map.",
      trace: `User: "Help me understand users of a budget
       tracking app for freelancers"

Step 1 → createPersona({
   product: "budget tracking app",
   targetUser: "freelancer",
   goals: ["track irregular income", ...],
   frustrations: ["unpredictable cash flow", ...]
})
   → Persona Card: "Jordan Kim, 28"

Step 2 → createEmpathyMap({
   userType: "freelance designer",
   context: "managing irregular income",
   observations: [extracted from persona...]
})
   → Empathy Map Card renders

Step 3 → "Want me to map the user flow for
   how Jordan tracks a new payment?"`,
    },
    {
      title: "Clarification Before Action",
      description:
        "When the request is too vague, the AI asks 1-2 clarifying questions before calling a tool — following the system prompt's instructions.",
      trace: `User: "Audit my app"

Step 1 → Response (NO tools called):
   "I'd love to help! To run a useful audit,
    could you tell me:
    • What kind of app is it?
    • Which part of the UI should I focus on?
    • Are there specific user groups you're
      concerned about (e.g., elderly users,
      screen reader users)?"

User: "It's an e-commerce checkout page,
  worried about screen reader users"

Step 2 → auditAccessibility({
   uiDescription: "e-commerce checkout page",
   userGroups: ["screen reader users"],
   features: ["form fields", "payment flow",
              "order summary"]
})`,
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tools in Action
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Three scenarios showing how the AI reasons through
          requests&mdash;from single tool calls to multi-tool chaining.
        </p>

        <div className="space-y-16">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-coral text-xl font-semibold mb-3">
                  {scenario.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {scenario.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <pre className="bg-[#0a0a0f] border border-white/10 rounded-xl p-6 font-mono text-sm text-white/70 overflow-x-auto whitespace-pre-wrap">
                  {scenario.trace}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Development Process
function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "System Prompt Design",
      description:
        "Designed the system prompt with tool descriptions, behavior rules (when to call tools vs. ask questions), chaining guidance, and tone instructions. Iterated to balance helpfulness with precision.",
    },
    {
      number: "02",
      title: "Framework Engineering",
      description:
        "Built 6 pure TypeScript framework functions with typed inputs and outputs. Each function enforces structure (e.g., severity x frequency matrix for pain points, WCAG criteria for accessibility) while letting the AI fill in creative content.",
    },
    {
      number: "03",
      title: "Tool Orchestration",
      description:
        "Defined 6 Vercel AI SDK tools with Zod input schemas. Connected each to its framework function via execute callbacks. Configured streamText with Google Gemini for real-time tool calling.",
    },
    {
      number: "04",
      title: "Card Components & UI",
      description:
        "Built 6 specialized card components (PersonaCard, EmpathyMapCard, etc.) with the TOOL_CARDS polymorphic router. Added streaming chat with useChat from @ai-sdk/react and deployed to Vercel.",
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

// Key Technical Features
function TechnicalFeatures() {
  const features = [
    {
      icon: "🛠️",
      title: "6-Tool Orchestration",
      description:
        "The AI dynamically selects from 6 specialized tools based on the user's message. It can chain tools in sequence — a persona naturally leads to an empathy map or user flow.",
    },
    {
      icon: "🎨",
      title: "Rich Visual Cards",
      description:
        "Each tool renders a dedicated React card component with structured data. The TOOL_CARDS polymorphic router maps tool names to components without switch statements.",
    },
    {
      icon: "⚡",
      title: "Streaming Chat",
      description:
        "Text streams token-by-token while tool results render as complete cards. Built with Vercel AI SDK's streamText and useChat for real-time interaction.",
    },
    {
      icon: "🔒",
      title: "Type-Safe Pipeline",
      description:
        "Zod schemas validate tool inputs at the AI boundary. TypeScript interfaces enforce the contract between framework functions and card components — no runtime type errors.",
    },
    {
      icon: "🔌",
      title: "MCP Server Companion",
      description:
        "A companion MCP server (ux-research-mcp) exposes the same 5 core tools to any MCP client — bringing the research capabilities to IDEs and other AI agents.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Key Technical Features
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Five capabilities that make the system extensible, type-safe, and
          visually rich.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-pink-400 flex items-center justify-center text-2xl flex-shrink-0">
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

// Tech Stack & Architecture
function TechStack() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tech Stack & Architecture
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Four layers working together&mdash;from the AI model to the visual
          output.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">
              AI / Model Layer
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Google Gemini 2.5 Flash
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Vercel AI SDK v6 (streamText)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                System prompt with tool guidance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Natural language to structured input
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Tool Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                6 typed tools with Zod schemas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Pure function frameworks
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Typed inputs and outputs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Independently testable with Vitest
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Component Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                6 visual card components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                TOOL_CARDS polymorphic router
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Structured data visualization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Tool-aware message rendering
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Frontend Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Next.js 16 App Router
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                useChat from @ai-sdk/react
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Tailwind CSS styling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Deployed on Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Learnings & Outcomes
function Learnings() {
  const learnings = [
    "Tool orchestration is the core skill — deciding which tool to call and how to chain them is more important than any single tool's implementation",
    "Pure framework functions make AI tools testable — separating structure from creativity lets you unit test the framework independently",
    "Zod schemas at the boundary between AI and code eliminate an entire class of runtime errors and make the contract explicit",
    "Visual cards communicate research findings 10x better than text — showing a persona card is more impactful than describing one",
    "System prompt design is iterative — getting the AI to chain tools naturally took multiple rounds of prompt refinement",
    "Building both the web app and MCP server showed me how the same tool logic can serve different interfaces and contexts",
  ];

  const skills = [
    "Prompt Engineering",
    "Tool Use",
    "Tool Orchestration",
    "Streaming",
    "Vercel AI SDK",
    "Next.js 16",
    "Zod",
    "TypeScript",
    "MCP Servers",
    "UX Research",
    "Component Design",
    "AI Engineering",
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
          Explore the UX Research App
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Chat with the AI research assistant or explore the source code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://ux-research-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/ux-research-app"
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
export default function UxResearchPage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Architecture />
      <ResearchTools />
      <ToolFrameworks />
      <ToolInAction />
      <DevelopmentProcess />
      <TechnicalFeatures />
      <TechStack />
      <Learnings />
      <CTA />
    </main>
  );
}
