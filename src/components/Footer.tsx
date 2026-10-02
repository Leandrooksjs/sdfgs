import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="rodape" className="perf-section bg-transparent px-4 py-12 text-slate-600 border-t border-blue-100/60">
      <div className="mx-auto max-w-5xl text-center">
        <nav
          aria-label="Links institucionais"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-700"
        >
          <a href="#" className="transition-colors hover:text-blue-700">
            Termos de Uso
          </a>
          <a href="#" className="transition-colors hover:text-blue-700">
            Política de Privacidade
          </a>
          <a href="#" className="transition-colors hover:text-blue-700">
            Contato & Suporte
          </a>
          <a href="#" className="transition-colors hover:text-blue-700">
            Aviso de Direitos Autorais
          </a>
        </nav>

        <p className="mt-6 text-xs text-slate-500 sm:text-sm font-semibold">
          © 2026 +300 Mapas Mentais de Ciência da Computação. Todos os direitos reservados.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-slate-400">
          Este é um material digital de apoio aos estudos, organizado de forma visual para consulta e revisão de conceitos de Ciência da Computação. O conteúdo é complementar e não substitui livros, aulas, cursos ou materiais acadêmicos especializados.
        </p>
      </div>
    </footer>
  );
};
