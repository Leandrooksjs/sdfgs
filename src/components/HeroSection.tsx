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
        <h1 className="hero-glow text-[2.25rem] leading-[1.02] font-black tracking-[-0.035em] text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
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
              src={optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 640, 70)}
              srcSet={optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 480, 70) + " 480w, " + optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 640, 70) + " 640w"}
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
          Uma biblioteca visual para estudar, revisar e organizar os principais conceitos da Ciência da Computação.
        </p>

        <div className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <CTAButton id="cta-hero" href="#ofertas" className="animate-subtle-pulse sm:max-w-sm">
            QUERO ACESSAR OS +300 MAPAS AGORA
          </CTAButton>
          <a
            href="#ofertas"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-4 text-center font-extrabold tracking-wide text-slate-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] sm:max-w-xs sm:text-lg"
          >
            VER OFERTAS
          </a>
        </div>

        <p className="mt-4 text-xs font-medium text-slate-500 sm:text-sm">
          Acesso imediato ao material digital após a confirmação do pagamento.
        </p>
      </div>
    </section>
  );
};
