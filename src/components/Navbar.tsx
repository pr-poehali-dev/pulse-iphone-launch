import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Главная", href: "#hero" },
    { label: "Характеристики", href: "#specs" },
    { label: "О компании", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
          Pulse
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#buy"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors duration-200"
        >
          Купить
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <div className="w-5 h-px bg-[#1d1d1f] mb-1.5 transition-all" />
          <div className="w-5 h-px bg-[#1d1d1f] mb-1.5 transition-all" />
          <div className="w-5 h-px bg-[#1d1d1f] transition-all" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#1d1d1f]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-[#0071e3] text-white text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Купить
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
