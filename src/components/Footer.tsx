import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="rodape" className="perf-section bg-transparent px-4 py-12 text-slate-600 border-t border-rose-100/60">
      <div className="mx-auto max-w-5xl text-center">
        <nav
          aria-label="Links institucionais"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-700"
        >
          <a href="#" className="transition-colors hover:text-rose-600">
            Termos de Uso
          </a>
          <a href="#" className="transition-colors hover:text-rose-600">
            Política de Privacidade
          </a>
          <a href="#" className="transition-colors hover:text-rose-600">
            Contato & Suporte
          </a>
          <a href="#" className="transition-colors hover:text-rose-600">
            Aviso de Direitos Autorais
          </a>
        </nav>

        <p className="mt-6 text-xs text-slate-500 sm:text-sm font-semibold">
          © 2026 +100 Mapas Mentais Socioemocionais para Educação Infantil. Todos os direitos reservados.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-slate-400">
          Este é um material pedagógico digital em formato PDF de alta resolução para impressão. Todas as orientações pedagógicas devem ser aplicadas respeitando o desenvolvimento, a singularidade e a faixa etária de cada criança na Educação Infantil.
        </p>
      </div>
    </footer>
  );
};
