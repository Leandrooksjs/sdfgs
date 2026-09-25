import React from "react";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="bg-transparent px-4 py-12 sm:py-16 text-slate-800">
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl bg-white border border-rose-100/60 shadow-xs p-6 sm:p-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="flex justify-center">
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-slate-950">
            <img
              src="/images/garantia-30d.jpg"
              alt="Selo de garantia de 30 dias"
              loading="lazy"
              className="h-full w-full object-cover scale-[1.05]"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            VOCÊ TEM 30 DIAS DE GARANTIA INCONDICIONAL
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base font-medium">
            Após realizar a compra, você poderá acessar, baixar e explorar todos os +100 Mapas Mentais Socioemocionais e todos os bônus. Se por qualquer motivo você achar que o material não atende às suas expectativas, basta solicitar o reembolso integral dentro de 30 dias com apenas 1 clique.
          </p>

          <div className="mt-5">
            <p className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 sm:text-base">
              <ShieldCheck className="h-5 w-5 shrink-0 text-rose-500" aria-hidden="true" />
              <span>Seu risco é absolutamente zero. Garantia blindada de 30 dias.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
