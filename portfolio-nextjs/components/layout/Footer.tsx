import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-5 mb-4">
          <Link
            href="https://linkedin.com/in/gianlpz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://github.com/gianlpz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="mailto:gianpierrelpz@gmail.com"
            className="text-white/40 hover:text-white/70 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
        </div>
        <p className="text-white/50 text-sm">
          &copy; {currentYear} Gian Pierre Lopez Manzano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
