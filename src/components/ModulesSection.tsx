import React from "react";

const MODULES = [
  {
    title: "Emoções Básicas",
    description: "Alegria, tristeza, raiva, medo, surpresa e calma.",
  },
  {
    title: "Empatia",
    description: "Ouvir, perceber sentimentos e se colocar no lugar do outro.",
  },
  {
    title: "Amizade e Convivência",
    description: "Compartilhar, esperar a vez e conviver com gentileza.",
  },
  {
    title: "Autocontrole",
    description: "Respirar, pensar antes de agir e lidar melhor com a raiva.",
  },
  {
    title: "Resolução de Conflitos",
    description: "Conversar, ouvir os dois lados e buscar soluções justas.",
  },
  {
    title: "Autoestima",
    description: "Reconhecer qualidades, valorizar esforços e confiar em si.",
  },
  {
    title: "Respeito e Limites",
    description: "Entender combinados, limites e o espaço de cada pessoa.",
  },
  {
    title: "Gratidão e Gentileza",
    description: "Agradecer, ajudar, elogiar e demonstrar carinho.",
  },
];

export const ModulesSection: React.FC = () => {
  return (
    <section
      id="modulos"
      className="bg-transparent px-4 py-12 text-slate-800 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            MÓDULOS DOS ENTREGÁVEIS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
            Conteúdos organizados por temas para facilitar a aplicação no dia a dia.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {MODULES.map((module) => (
            <article
              key={module.title}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md sm:p-5"
            >
              <h3 className="text-base font-black leading-tight text-slate-900 sm:text-lg">
                {module.title}
              </h3>

              <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
                {module.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
