import React from "react";
import {
  Brain,
  CheckCircle2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const MODULES = [
  {
    number: "01",
    title: "Emoções Básicas",
    description: "Alegria, tristeza, raiva, medo, surpresa e calma.",
    icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    number: "02",
    title: "Empatia",
    description: "Ouvir, perceber sentimentos e se colocar no lugar do outro.",
    icon: Users,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
  },
  {
    number: "03",
    title: "Amizade e Convivência",
    description: "Compartilhar, esperar a vez e conviver com gentileza.",
    icon: Sparkles,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    number: "04",
    title: "Autocontrole",
    description: "Respirar, pensar antes de agir e lidar melhor com a raiva.",
    icon: Brain,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
  },
  {
    number: "05",
    title: "Resolução de Conflitos",
    description: "Conversar, ouvir os dois lados e buscar soluções justas.",
    icon: MessageCircle,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    number: "06",
    title: "Autoestima",
    description: "Reconhecer qualidades, valorizar esforços e confiar em si.",
    icon: Star,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    number: "07",
    title: "Respeito e Limites",
    description: "Entender combinados, limites e o espaço de cada pessoa.",
    icon: ShieldCheck,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
  {
    number: "08",
    title: "Gratidão e Gentileza",
    description: "Agradecer, ajudar, elogiar e demonstrar carinho.",
    icon: CheckCircle2,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
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
          {MODULES.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.number}
                className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${module.iconBg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${module.iconColor}`}
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black tracking-wide text-slate-500 sm:text-xs">
                    MÓDULO {module.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-black leading-tight text-slate-900 sm:text-lg">
                  {module.title}
                </h3>

                <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
                  {module.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
