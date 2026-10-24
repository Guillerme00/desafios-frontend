import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const links = [
    { label: "Clientes", href: "clientes" },
    { label: "Soluções", href: "solucoes" },
    { label: "Preços", href: "precos" },
    { label: "Contato", href: "contato" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#080D1B]/85 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[85%] items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(false);
          }}
          className="flex cursor-pointer items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
            <span className="flex items-center gap-0.5">
              <span className="h-3 w-1 rounded-full bg-white" />
              <span className="h-5 w-1 rounded-full bg-white" />
              <span className="h-2 w-1 rounded-full bg-white" />
              <span className="h-4 w-1 rounded-full bg-white" />
            </span>
          </span>
          CheckSpeech
          <span className="-ml-1 text-blue-400">AI</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="cursor-pointer text-[18px] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden rounded-full bg-blue-500 px-5 py-2.5 text-[18px] font-semibold text-white transition-colors hover:bg-blue-400 md:inline-flex"
        >
          Entre em contato
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 text-white md:hidden"
        >
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-blue/10 backdrop-blur-xl px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Começar agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
