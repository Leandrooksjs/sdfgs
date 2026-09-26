import React from "react";
import { EXCLUSIVE_BONUSES } from "../data/content";
import { DeferredImage } from "./DeferredImage";

export const BonusSection: React.FC = () => {
  return (
    <section
      id="bonus-exclusivos"
      className="perf-section bg-transparent px-4 py-12 text-slate-800 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
            BÔNUS EXCLUSIVOS
          </h2>
          <div className="mt-3 flex items-center justify-center text-sm font-black sm:text-base">
            <span className="tracking-wide text-rose-500">
              Exclusivo do plano premium
            </span>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 px-1 sm:gap-5">
            {EXCLUSIVE_BONUSES.map((bonus) => (
              <div
                key={bonus.id}
                className="w-[220px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-300 hover:shadow-md sm:w-[240px]"
              >
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white">
                  <DeferredImage
                    src={bonus.imageSrc}
                    alt={bonus.alt}
                    width={1254}
                    height={1254}
                    rootMargin="160px"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-3 px-1 text-center text-sm font-extrabold leading-snug text-slate-800 sm:text-base">
                  {bonus.title}
                </p>
                <p className="mt-1.5 px-1 pb-1 text-center text-[11px] font-medium leading-relaxed text-slate-500 sm:text-xs">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
