import React from "react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Nome do estudante",
    context: "Curso / área de estudo",
    text: "Adicione aqui um depoimento real sobre como os mapas ajudaram nos estudos.",
  },
  {
    name: "Nome do estudante",
    context: "Curso / área de estudo",
    text: "Adicione aqui um segundo depoimento real, destacando uma experiência concreta com o material.",
  },
  {
    name: "Nome do estudante",
    context: "Curso / área de estudo",
    text: "Adicione aqui um terceiro depoimento real sobre revisão, organização ou consulta dos mapas.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="perf-section bg-black px-4 py-14 text-slate-100 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 sm:text-sm">
            Depoimentos
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-4xl">
            O que estudantes estão achando do material
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Espaço para inserir feedbacks reais de quem já utiliza os mapas nos estudos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-1 text-blue-500" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>

              <Quote className="mt-5 h-8 w-8 text-blue-600/70" aria-hidden="true" />

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                “{testimonial.text}”
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-black text-white">{testimonial.name}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {testimonial.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
