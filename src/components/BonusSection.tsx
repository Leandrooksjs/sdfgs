import React from "react";
import { EXCLUSIVE_BONUSES } from "../data/content";

export const BonusSection: React.FC = () => {
  return (
    <section
      id="bonus-exclusivos"
      className="bg-transparent px-4 py-12 sm:py-16 text-slate-800"
    >
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
            BÔNUS EXCLUSIVOS
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:text-base font-black">
            <span className="text-slate-400 line-through tracking-wide">DE R$ 297</span>
            <span className="text-emerald-500 tracking-wider">POR: GRÁTIS</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {EXCLUSIVE_BONUSES.map((bonus) => (
            <div
              key={bonus.title}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 sm:px-5 sm:py-4 shadow-xs transition-all duration-200 hover:border-rose-300 hover:shadow-sm"
            >
              <span
                className="text-2xl select-none shrink-0"
                role="img"
                aria-hidden="true"
              >
                {bonus.icon}
              </span>
              <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">
                {bonus.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
