import { useState } from "react";

type BillingCycle = "monthly" | "annual";

type Feature = {
  name: string;
  minutes?: number;
  overage?: string;
};

type Plan = {
  name: string;
  description: string;
  monthlyPrice?: number;
  annualPrice?: number;
  features: Feature[];
  highlighted?: boolean;
  enterprise?: boolean;
};

const plans: Plan[] = [
  {
    name: "Iniciante",
    description: "Para começar a explorar o potencial da IA.",
    monthlyPrice: 29,
    annualPrice: 328,
    features: [
      {
        name: "Transcrição assíncrona",
        minutes: 120,
        overage: "R$ 0,20/min excedente",
      },
      {
        name: "Transcrição em tempo real",
        minutes: 90,
        overage: "R$ 0,40/min excedente",
      },
      {
        name: "Identificação de idiomas",
        minutes: 200,
        overage: "R$ 0,05/min excedente",
      },
      {
        name: "Análise de sentimentos",
        minutes: 120,
        overage: "R$ 0,40/min excedente",
      },
    ],
  },
  {
    name: "Business",
    description: "Mais capacidade para expandir seu negócio.",
    monthlyPrice: 44,
    annualPrice: 499,
    highlighted: true,
    features: [
      {
        name: "Transcrição assíncrona",
        minutes: 200,
        overage: "R$ 0,15/min excedente",
      },
      {
        name: "Transcrição em tempo real",
        minutes: 120,
        overage: "R$ 0,40/min excedente",
      },
      {
        name: "Identificação de idiomas",
        minutes: 500,
        overage: "R$ 0,03/min excedente",
      },
      {
        name: "Análise de sentimentos",
        minutes: 200,
        overage: "R$ 0,35/min excedente",
      },
    ],
  },
  {
    name: "Enterprise",
    description: "Uma solução adaptada à sua operação.",
    enterprise: true,
    features: [
      {
        name: "Preços especiais para grandes volumes",
      },
      {
        name: "Prioridade no suporte técnico",
      },
      {
        name: "Gestor de conta dedicado",
      },
    ],
  },
];

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section
      id="precos"
      className="relative overflow-hidden py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-32
        h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0
        h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <span
            className="inline-flex rounded-full border border-blue-400/20
            bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase
            tracking-[0.2em] text-blue-300 sm:text-sm"
          >
            Planos e preços
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            O plano ideal para o seu negócio.
            <span className="mt-2 block text-blue-400">Simples assim.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Escolha seu plano e transforme áudio em informações valiosas para
            suas aplicações.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-[#080D1B]/80 p-1.5 backdrop-blur-xl">
            <button
              type="button"
              aria-pressed={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Mensal
            </button>

            <button
              type="button"
              aria-pressed={billingCycle === "annual"}
              onClick={() => setBillingCycle("annual")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                billingCycle === "annual"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Anual
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            {billingCycle === "annual"
              ? "Valores para contratação anual."
              : "Valores para contratação mensal."}
          </p>
        </div>

        {/* Cards dos planos */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.highlighted
                    ? "border-blue-400/50 bg-[#0A1530]/90 shadow-lg shadow-blue-950/30"
                    : "border-white/10 bg-[#080D1B]/60 hover:border-blue-400/30"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 self-start rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                    Mais popular
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-10 text-sm leading-relaxed text-slate-400">
                  {plan.description}
                </p>

                {/* Preço */}
                <div className="mt-7 min-h-[92px]">
                  {plan.enterprise ? (
                    <>
                      <p className="text-3xl font-bold tracking-tight text-white">
                        Sob consulta
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Entre em contato com nossa equipe
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight text-white">
                          R$ {formatPrice(price!)}
                        </span>

                        <span className="text-sm text-slate-400">
                          /{billingCycle === "monthly" ? "mês" : "ano"}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-slate-500">
                        {billingCycle === "annual"
                          ? "Pagamento anual"
                          : "Pagamento mensal"}
                      </p>
                    </>
                  )}
                </div>

                <div className="my-7 border-t border-white/10" />

                <p className="mb-4 text-sm font-semibold text-slate-200">
                  {plan.enterprise
                    ? "Benefícios incluídos"
                    : "Recursos incluídos"}
                </p>

                {/* Recursos e excedentes */}
                <ul className="flex-1 space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-300">
                        ✓
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-relaxed text-slate-200">
                          {feature.name}
                        </p>

                        {feature.minutes !== undefined && (
                          <p className="mt-1 text-sm text-slate-400">
                            {feature.minutes} minutos incluídos
                          </p>
                        )}

                        {feature.overage && (
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">
                            Excedente: {feature.overage}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contato"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                      : "border border-white/15 bg-white/[0.03] text-white hover:border-blue-400/40 hover:bg-blue-500/10"
                  }`}
                >
                  {plan.enterprise ? "Falar com nossa equipe" : "Começar agora"}

                  <span>→</span>
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
          Os minutos são contabilizados por recurso. O uso excedente é cobrado
          conforme os valores apresentados em cada plano.
        </p>
      </div>
    </section>
  );
}
