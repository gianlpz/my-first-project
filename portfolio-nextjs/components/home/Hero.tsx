import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-8 pt-20 overflow-hidden"
    >
      <div className="text-center max-w-3xl z-10 slide-up">
        <p className="text-coral text-xs md:text-sm font-semibold tracking-[3px] mb-4 md:mb-6 uppercase">
          From Healthcare Precision to User-Centered Design
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gradient">
          Gian Pierre
          <br />
          Lopez Manzano
        </h1>

        <h2 className="text-coral text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          UX Designer
        </h2>

        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Blending empathy from healthcare with design thinking to create
          meaningful digital experiences that truly understand users.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>

      {/* Gradient decoration blob */}
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 md:w-[500px] md:h-[500px] opacity-80 blur-[60px] animate-morph pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #e07b67 0%, #f4a261 25%, #e9c46a 50%, #2a9d8f 75%, #264653 100%)",
        }}
      />
    </section>
  );
}
