import React from "react";
import { CTAButton } from "./CTAButton";
import { optimizedImage } from "../lib/images";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="bg-transparent px-4 pb-12 pt-8 text-slate-100 sm:pb-20 sm:pt-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-[2.25rem] leading-[1.02] font-black tracking-[-0.035em] text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
          +300 Mapas Mentais de
          <br />
          <span className="hero-accent">Ciência da Computação.</span>
        </h1>

        <a
          id="hero-mockup-link"
          href="#ofertas"
          className="mx-auto mt-8 block w-full max-w-[21.5rem] sm:mt-12 sm:max-w-2xl group cursor-pointer"
        >
          <div className="relative mx-auto flex items-center justify-center rounded-[2rem]">
            <div className="absolute inset-6 rounded-full bg-teal-300/10 blur-3xl" />
            <img
              src={optimizedImage("/images/ChatGPT Image 2 de out. de 2026, 10_45_59.png", 640, 70)}
              srcSet={optimizedImage("/images/ChatGPT Image 2 de out. de 2026, 10_45_59.png", 480, 70) + " 480w, " + optimizedImage("/images/ChatGPT Image 2 de out. de 2026, 10_45_59.png", 640, 70) + " 640w"}
              sizes="(max-width: 640px) 344px, 640px"
              alt="Mockup +300 Mapas Mentais de Ciência da Computação"
              referrerPolicy="no-referrer"
              width={640}
              height={640}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </a>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed font-medium text-slate-400 sm:mt-8 sm:text-xl">
          Revise os principais conceitos da Ciência da Computação de forma visual, organizada e sem se perder em conteúdos extensos.
        </p>

        <div className="mx-auto mt-7 max-w-xl sm:mt-10">
          <CTAButton id="cta-hero" href="#ofertas" className="animate-subtle-pulse">
            QUERO ACESSAR OS +300 MAPAS AGORA
          </CTAButton>
        </div>

        <p className="mt-4 text-xs font-medium text-slate-500 sm:text-sm">
          Acesso imediato ao material digital após a confirmação do pagamento.
        </p>
      </div>
    </section>
  );
};
