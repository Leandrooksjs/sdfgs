import React, { useEffect } from "react";
import { X, Sparkles, Tag, Check, ArrowRight } from "lucide-react";
import { CHECKOUT_URLS, UPSELL_ITEMS } from "../data/content";
import { getTrackedUrl, trackInitiateCheckout } from "../lib/tracking";

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  originalHref: string;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  open,
  onOpenChange,
  originalHref,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      id="upgrade-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={() => onOpenChange(false)}
    >
      <div
        id="upgrade-modal"
        className="relative max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[22rem] overflow-y-auto overflow-hidden rounded-2xl border-0 bg-white p-0 text-center shadow-2xl sm:max-w-md animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-3 rounded-sm text-white/80 transition-opacity hover:text-white focus:outline-none cursor-pointer z-10"
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-rose-500 px-4 py-2 text-[10px] font-extrabold tracking-wide text-white uppercase sm:px-6 sm:text-xs">
          <Sparkles className="mr-1.5 inline h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          Oferta especial disponível agora
        </div>

        <div className="p-4 sm:p-8">
          <div className="space-y-2 text-center sm:space-y-3">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 sm:h-12 sm:w-12">
              <Tag className="h-5 w-5 text-rose-600 sm:h-6 sm:w-6" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-3xl leading-snug">
              Por apenas <span className="text-rose-600">R$ 7,10</span>
            </h3>

            <p className="text-sm font-black text-slate-700 sm:text-base">
              Valor cheio: <span className="text-slate-500">R$ 19,90</span>
            </p>

            <p className="text-xs font-medium text-slate-600 sm:text-base">
              Você está prestes a finalizar. Aproveite e garanta todos os +100 Mapas Mentais com bônus exclusivos e desconto imperdível.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-3 text-left sm:mt-6 sm:rounded-2xl sm:p-4">
            <p className="text-[10px] font-black tracking-wide text-slate-500 uppercase sm:text-xs">
              O que está incluso na super oferta:
            </p>
            <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              {UPSELL_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs font-semibold text-slate-700 sm:text-sm"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            <a
              id="cta-popup-oferta"
              href={getTrackedUrl(CHECKOUT_URLS.OFERTA_UPSELL)}
              onClick={(e) => {
                trackInitiateCheckout({
                  contentName: "Plano Premium - Oferta do Pop-up",
                  value: 7.1,
                });

                if (typeof window !== "undefined") {
                  e.preventDefault();
                  window.location.assign(
                    getTrackedUrl(CHECKOUT_URLS.OFERTA_UPSELL),
                  );
                }
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 px-4 py-3 text-center text-sm font-extrabold tracking-tight text-white shadow-pink-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-600 sm:px-6 sm:py-4 sm:text-lg cursor-pointer select-none"
            >
              <span>Quero comprar</span>
              <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              id="cta-popup-recusar"
              onClick={() => {
                onOpenChange(false);
                trackInitiateCheckout({
                  contentName: "Material Essencial",
                  value: 10,
                });

                if (typeof window !== "undefined") {
                  window.location.assign(
                    getTrackedUrl(CHECKOUT_URLS.ESSENCIAL),
                  );
                }
              }}
              className="inline-flex w-full items-center justify-center rounded-xl px-3 py-2.5 text-xs font-bold text-slate-500 transition-colors hover:text-slate-800 sm:px-4 sm:py-3 sm:text-sm cursor-pointer"
            >
              Não, quero continuar com minha escolha original
            </button>
          </div>

          <p className="mt-4 text-[10px] font-semibold text-slate-400 sm:mt-5 sm:text-xs">
            Oferta válida enquanto durar esta sessão. Garantia de 30 dias inclusa.
          </p>
        </div>
      </div>
    </div>
  );
};
