import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/content";
import { CTAButton } from "./CTAButton";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-transparent px-4 py-14 sm:py-20 text-slate-800"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
          PERGUNTAS <span className="text-rose-500">FREQUENTES</span>
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-slate-600">
          Tire suas dúvidas sobre o material e como começar a aplicar.
        </p>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="shadow-soft rounded-2xl border border-slate-200 bg-slate-50/60 px-4 sm:px-6 transition-all duration-200 hover:border-rose-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-5 text-left text-base font-extrabold text-slate-900 hover:no-underline sm:text-lg cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-rose-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-sm leading-relaxed text-slate-600 sm:text-base font-medium border-t border-slate-200/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <CTAButton id="cta-faq-bottom" href="#ofertas">
            QUERO OS MAPAS MENTAIS SOCIOEMOCIONAIS
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
