const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-[#1d1d1f]">Pulse</p>
            <p className="text-sm text-[#6e6e73] mt-1">Технологии. Переосмысленные.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Главная", href: "#hero" },
              { label: "Характеристики", href: "#specs" },
              { label: "Купить", href: "#buy" },
              { label: "О компании", href: "#about" },
              { label: "FAQ", href: "#faq" },
              { label: "Контакты", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#6e6e73]">
            © 2026 Pulse Technology, Inc. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
