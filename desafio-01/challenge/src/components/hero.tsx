export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden
      bg-[#03051c] text-white"
    >
      {/* fundo PC */}
      <img
        src="/background_3.png"
        alt=""
        className="absolute inset-0 hidden h-full w-full
        object-cover object-center md:block"
      />

      {/* fundo mobile */}
      <img
        src="/background.png"
        alt=""
        className="absolute inset-0 h-full w-full
        object-cover object-center md:hidden"
      />

      {/* Conteudo */}
      <div
        className="relative z-10 mx-auto flex min-h-screen
        max-w-7xl items-center px-6 py-32"
      >
        <div className="w-full max-w-xl">
          <span
            className="inline-block rounded-full border
          border-blue-400/30 bg-blue-500/10 px-4 py-2
          text-sm text-blue-300"
          >
            ✦ Inteligência artificial para áudio
          </span>

          <h1
            className="mt-6 text-4xl font-bold leading-tight
          tracking-tight sm:text-5xl lg:text-6xl"
          >
            Transforme falas em{" "}
            <   span className="text-blue-400">insights reais</span>
          </h1>

          <p
            className="mt-6 max-w-lg text-base leading-relaxed
          text-slate-300 sm:text-lg"
          >
            Transcrição, interpretação e análise de falas com Inteligência
            Artificial. Mais produtividade, precisão e decisões mais
            inteligentes para o seu negócio.
          </p>

          <div
            className="mt-8 flex flex-col gap-4
          sm:flex-row"
          >
            <a
              href="#contato"
              className="rounded-full bg-blue-500 px-7 py-3.5
              text-center font-semibold transition
              hover:bg-blue-400"
            >
              Começar agora →
            </a>

            <a
              href="#solucoes"
              className="rounded-full border border-white/20
              px-7 py-3.5 text-center font-semibold
              transition hover:bg-white/20 bg-white/10 backdrop-blur-xl"
            >
              Conhecer soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
