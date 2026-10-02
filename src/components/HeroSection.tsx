import React from "react";
import { CTAButton } from "./CTAButton";
import { optimizedImage } from "../lib/images";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="bg-transparent px-4 py-8 sm:py-16 text-slate-800"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-[1.7rem] leading-[1.12] font-black tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl">
          <span className="text-blue-600">+300</span> Mapas Mentais de Ciência da Computação
        </h1>

        <a
          id="hero-mockup-link"
          href="#ofertas"
          className="mx-auto mt-6 block w-full max-w-[21.5rem] sm:mt-10 sm:max-w-2xl group cursor-pointer"
        >
          <div className="relative mx-auto flex items-center justify-center">
            <img
              src={optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 640, 70)}
              srcSet={`${optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 480, 70)} 480w, ${optimizedImage("/images/ChatGPT Image Sep 25, 2026, 08_56_45 PM.png", 640, 70)} 640w`}
              sizes="(max-width: 640px) 344px, 640px"
              alt="Mockup +300 Mapas Mentais de Ciência da Computação"
              referrerPolicy="no-referrer"
              width={640}
              height={640}
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </a>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-snug font-bold text-slate-700 sm:mt-8 sm:text-xl sm:leading-relaxed">
          Uma biblioteca visual para estudar, revisar e organizar os principais conceitos da Ciência da Computação.
        </p>

        <div className="mx-auto mt-6 max-w-xl sm:mt-10">
          <CTAButton id="cta-hero" href="#ofertas" className="animate-subtle-pulse">
            QUERO ACESSAR OS +300 MAPAS AGORA
          </CTAButton>
          <p className="mt-3 text-xs font-semibold text-slate-500 sm:text-sm">
            Clique no botão e receba acesso imediato ao material completo.
          </p>
        </div>
      </div>
    </section>
  );
};
