export function About() {
  const highlights = [
    { label: "Case Study", value: "1" },
    { label: "Banks Analyzed", value: "6" },
    { label: "User Personas", value: "2" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0f1419]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
          About Me
        </h2>

        <div className="space-y-4 mb-10">
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            I&apos;m a UX Designer making a career transition from healthcare,
            where I spent years developing the empathy, attention to detail, and
            problem-solving skills that now drive my design work. Working
            directly with patients taught me how to listen deeply and design for
            real human needs.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            That experience shaped how I approach design: I start with research,
            focus on accessibility, and always keep the end user at the center of
            every decision. My first case study, GlassBank, reflects
            this&mdash;an inclusive banking app built from competitive analysis
            and user personas.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            I&apos;m currently expanding my skills in frontend development with
            React and Next.js, combining design thinking with the ability to
            build and ship real products.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-coral mb-1">
                {item.value}
              </div>
              <div className="text-white/50 text-xs md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
