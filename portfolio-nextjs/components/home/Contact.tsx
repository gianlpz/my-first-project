import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0f1419] text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Get In Touch
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-8">
          I&apos;m always open to discussing new projects and opportunities.
        </p>
        <Link href="mailto:gianpierrelpz@gmail.com" className="btn btn-primary">
          Say Hello
        </Link>
      </div>
    </section>
  );
}
