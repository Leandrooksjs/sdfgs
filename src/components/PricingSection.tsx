import React from "react";
import { Check, X, Star } from "lucide-react";
import { PRICING_PLANS } from "../data/content";
import { CTAButton } from "./CTAButton";
import { optimizedImage } from "../lib/images";

interface PricingSectionProps {
  onOpenUpgradeModal: (originalHref: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenUpgradeModal }) => {
  return (
    <section
      id="ofertas"
      className="perf-section bg-transparent px-4 py-14 sm:py-20 text-slate-800"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
          ESCOLHA A MELHOR <span className="text-rose-500">OPÇÃO PARA VOCÊ</span>
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-slate-600">
          Acesso imediato no seu e-mail logo após a confirmação do pagamento.
        </p>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-3xl bg-white p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? "shadow-pink-cta border-2 border-rose-500 scale-[1.01]"
                  : "shadow-soft border border-slate-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-4 py-1.5 text-xs font-black tracking-wide whitespace-nowrap text-white uppercase shadow-md shadow-rose-200">
                  <Star className="mr-1 inline h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {plan.title}
              </h3>
              {plan.subtitle && (
                <p
                  className={`mt-1 text-xs font-black tracking-wide uppercase sm:text-sm ${
                    plan.featured ? "text-rose-500" : "text-slate-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
              )}

              {plan.mockupImage && (
                <div className="mt-5">
                  <img
                    src={optimizedImage(plan.mockupImage, 320, 70)}
                    alt={plan.mockupAlt || "Mockup do produto"}
                    width={320}
                    height={320}
                    decoding="async"
                    className="mx-auto h-auto w-full max-w-[18rem] rounded-2xl object-contain drop-shadow"
                    loading="lazy"
                  />
                </div>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-bold text-slate-800 sm:text-base"
                  >
                    <Check className="h-5 w-5 shrink-0 text-rose-500" aria-hidden="true" />
                    <span className="min-w-0">{item.label}</span>
                    {item.bonus && (
                      <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-rose-100 border border-rose-200/60 px-2 py-0.5 text-[11px] font-black text-rose-600 uppercase tracking-wide shrink-0">
                        🎁 Bônus
                      </span>
                    )}
                  </li>
                ))}

                {plan.excluded?.map((exItem) => (
                  <li
                    key={exItem}
                    className="flex items-center gap-3 text-sm font-medium text-slate-400 line-through sm:text-base"
                  >
                    <X className="h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
                    <span className="min-w-0">{exItem}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
                  {plan.priceNote}
                </p>

                <div className="mt-6">
                  {plan.id === "plano-essencial" ? (
                    <CTAButton
                      id={plan.ctaId}
                      href="#upgrade-oferta"
                      variant="muted"
                      trackCheckout={false}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenUpgradeModal(plan.ctaHref);
                      }}
                    >
                      {plan.ctaLabel}
                    </CTAButton>
                  ) : (
                    <CTAButton
                      id={plan.ctaId}
                      href={plan.ctaHref}
                      variant="primary"
                      trackingName="Plano Premium Completo"
                      trackingValue={27}
                    >
                      {plan.ctaLabel}
                    </CTAButton>
                  )}
                </div>

                {plan.footnote && (
                  <p className="mt-3 text-center text-xs font-semibold text-slate-500">
                    {plan.footnote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
