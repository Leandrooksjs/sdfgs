import React from "react";
import { CTAButton } from "./CTAButton";
import heroMockup from "../assets/images/mockup_headline_mapas_1790346156693.jpg";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="bg-transparent px-4 py-8 sm:py-16 text-slate-800"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-2xl leading-tight font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          <span className="text-rose-500">+320</span> Mapas Mentais Socioemocionais Infantil
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-lg leading-snug font-extrabold text-slate-900 sm:mt-5 sm:text-2xl sm:leading-relaxed">
          Para desenvolver o lado emocional das crianças de forma visual.
        </p>

        <a
          id="hero-mockup-link"
          href="#ofertas"
          className="mx-auto mt-6 block w-full max-w-[24rem] sm:mt-10 sm:max-w-3xl group cursor-pointer"
        >
          <div className="relative mx-auto flex items-center justify-center">
            <img
              src={heroMockup}
              alt="Mockup +320 Mapas Mentais Socioemocionais Infantil"
              referrerPolicy="no-referrer"
              className="mx-auto w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </a>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-snug font-bold text-slate-700 sm:mt-8 sm:text-xl sm:leading-relaxed">
          A forma de Educar Emocionalmente Sem Cartilha, sem trabalhar com apostilas e Com Diálogo de Verdade
        </p>

        <div className="mx-auto mt-6 max-w-xl sm:mt-10">
          <CTAButton id="cta-hero" href="#ofertas" className="animate-subtle-pulse">
            QUERO ACESSAR OS MAPAS MENTAIS AGORA
          </CTAButton>
          <p className="mt-3 text-xs font-semibold text-slate-500 sm:text-sm">
            Clique no botão e receba acesso imediato ao material completo.
          </p>
        </div>
      </div>
    </section>
  );
};
