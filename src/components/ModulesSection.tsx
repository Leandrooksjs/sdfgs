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
            CONHEÇA OS MÓDULOS
          </h2>
        </div>

        <div className="mx-auto mt-6 grid max-w-3xl grid-flow-col grid-cols-2 grid-rows-4 gap-x-3 gap-y-2 sm:mt-7 sm:gap-x-4 sm:gap-y-2.5">
          {MODULES.map((module) => (
            <article
              key={module.title}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md sm:px-3.5 sm:py-3"
            >
              <h3 className="text-sm font-black leading-tight text-slate-900 sm:text-base">
                {module.title}
              </h3>

              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-slate-600 sm:text-xs">
                {module.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
