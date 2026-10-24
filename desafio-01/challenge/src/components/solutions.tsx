type Solution = {
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
};

const solutions: Solution[] = [
  {
    number: "01",
    title: "Transcrição assíncrona",
    description:
      "Transforme áudios pré-gravados em texto para extrair informações, documentar conversas e automatizar processos.",
    tag: "Áudio pré-gravado",
    icon: "/logos/icons/sound.svg",
  },
  {
    number: "02",
    title: "Transcrição em tempo real",
    description:
      "Converta falas em texto durante reuniões, palestras e treinamentos, com suporte a aplicações de streaming.",
    tag: "Fala para texto ao vivo",
    icon: "/logos/icons/recorder.svg",
  },
  {
    number: "03",
    title: "Identificação de idiomas",
    description:
      "Identifique idiomas presentes nos áudios e desenvolva experiências para públicos de diferentes regiões do mundo.",
    tag: "52 idiomas",
    icon: "/logos/icons/earth.svg",
  },
  {
    number: "04",
    title: "Análise de sentimentos",
    description:
      "Identifique sentimentos positivos e negativos na fala e transforme conversas em insights úteis para o negócio.",
    tag: "Inteligência artificial",
    icon: "/logos/icons/smile_heart.svg",
  },
];

export default function Solutions() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden py-24 text-white sm:py-32"
    >
      {/* efeitos de luz */}
      <div
        className="pointer-events-none absolute -left-40 top-20
  h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0
  h-96 w-96 rounded-full bg-purple-600/15 blur-[140px]"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-24
        h-64 w-64 -translate-x-1/2 rounded-full
        bg-blue-600/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center rounded-full
            border border-blue-400/20 bg-blue-500/10
            px-4 py-2 text-xs font-medium uppercase
            tracking-[0.2em] text-blue-300 sm:text-sm"
          >
            Nossas soluções
          </span>

          <h2
            className="mt-6 text-3xl font-bold tracking-tight
            sm:text-4xl lg:text-5xl"
          >
            Toda a inteligência da fala.
            <span className="block text-blue-400">Em uma única API.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-base
            leading-relaxed text-slate-400 sm:text-lg"
          >
            Da conversão de áudio em texto à análise de sentimentos. Transforme
            conversas em dados que ajudam seu negócio a tomar decisões melhores.
          </p>
        </div>

        {/* cards das solucoes */}
        <div
          className="mt-14 grid grid-cols-1 gap-5
          sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group relative flex min-h-72 flex-col
                overflow-hidden rounded-2xl border border-white/10
                bg-[#080D1B]/60 p-6 backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1 hover:border-blue-400/40
                hover:bg-[#10182d]/80
                hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12
                  -top-12 h-32 w-32 rounded-full
                  bg-blue-500/0 blur-3xl transition-colors
                  duration-300 group-hover:bg-blue-500/20"
              />

              <div
                className="relative flex items-center
                justify-between"
              >
                <div
                  className="flex h-12 w-12 items-center
                  justify-center rounded-xl border
                  border-blue-400/20 bg-blue-500/10
                  text-blue-400 transition-all duration-300
                  group-hover:border-blue-400/40
                  group-hover:bg-blue-500/20"
                >
                  <img
                    src={solution.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <span
                  className="text-sm font-medium
                  tracking-wider text-slate-600"
                >
                  {solution.number}
                </span>
              </div>

              <h3
                className="relative mt-7 text-xl font-semibold
                leading-snug text-white"
              >
                {solution.title}
              </h3>

              <p
                className="relative mt-3 flex-1 text-sm
                leading-6 text-slate-400"
              >
                {solution.description}
              </p>

              <div
                className="relative mt-6 border-t
                border-white/10 pt-4"
              >
                <span
                  className="inline-flex rounded-full
                  bg-white/5 px-3 py-1.5 text-xs
                  font-medium text-blue-300"
                >
                  {solution.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col items-center
          justify-between gap-5 rounded-2xl border
          border-white/10 bg-white/[0.03] p-6
          sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Pronto para transformar suas aplicações?
            </h3>

            <p
              className="mt-2 text-sm leading-relaxed
              text-slate-400"
            >
              Descubra como integrar inteligência de voz aos seus produtos.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex w-full shrink-0 items-center
              justify-center gap-2 rounded-full
              bg-blue-500 px-6 py-3 font-semibold
              text-white transition hover:bg-blue-400
              sm:w-auto"
          >
            Falar com nossa equipe
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
