export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/50 text-sm">
          &copy; {currentYear} Gian Pierre Lopez Manzano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
