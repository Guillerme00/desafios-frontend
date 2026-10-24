type ClientLogo = {
  name: string;
  src: string;
};

const logos: ClientLogo[] = [
  { name: "logo 1", src: "/logos/logo1.png" },
  { name: "logo 2", src: "/logos/logo2.png" },
  { name: "logo 3", src: "/logos/logo3.png" },
  { name: "logo 4", src: "/logos/logo4.png" },
  { name: "logo 5", src: "/logos/logo5.png" },
  { name: "logo 6", src: "/logos/logo6.png" },
  { name: "logo 7", src: "/logos/logo7.png" },
];

export default function LogoBar() {
  return (
    <section
      id="clientes"
      className="relative border-y border-white/10 bg-[#080D1B]/70 py-8 backdrop-blur-xl sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-9 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
          Empresas que confiam na nossa tecnologia
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:justify-between lg:gap-x-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-h-12 w-auto max-w-32 object-contain opacity-80 transition duration-300 hover:opacity-100 sm:max-w-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
