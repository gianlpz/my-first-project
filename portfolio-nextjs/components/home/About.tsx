export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0f1419]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
          About Me
        </h2>

        <div className="space-y-4">
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            I build AI-powered web applications with React and Next.js, bringing
            a deep background in UX research and healthcare to every product I
            work on.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            My case study HealthBridge showcases my AI engineering
            skills&mdash;building a symptom triage assistant powered by RAG,
            tool use, and multi-step reasoning with Next.js. The Coaching App
            demonstrates full-stack capability, from user personas through to a
            working production application.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            I bring both sides together: the technical skills to build
            intelligent features with LLMs and modern frameworks, and the design
            thinking to make sure those features actually serve real users. I
            work in React, Next.js, TypeScript, and Tailwind CSS to turn
            research-driven designs into real, responsive products.
          </p>
        </div>
      </div>
    </section>
  );
}
