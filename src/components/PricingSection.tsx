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
      className="perf-section bg-black px-4 py-14 sm:py-20 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-white sm:text-4xl">
          ESCOLHA A MELHOR <span className="text-blue-600">OPÇÃO PARA VOCÊ</span>
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-slate-300">
          Acesso imediato no seu e-mail logo após a confirmação do pagamento.
        </p>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative flex h-full flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? "shadow-pink-cta border-2 border-blue-600 scale-[1.01]"
                  : "shadow-soft border border-slate-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black tracking-wide whitespace-nowrap text-white uppercase shadow-md shadow-blue-200">
                  <Star className="mr-1 inline h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                {plan.title}
              </h3>
              {plan.subtitle && (
                <p
                  className={`pricing-subtitle mt-1 text-xs font-black tracking-wide uppercase sm:text-sm ${
                    plan.featured ? "text-blue-600" : "text-slate-300"
                  }`}
                >
                  {plan.subtitle}
                </p>
              )}

              {plan.mockupImage && (
                <div className="mt-5 flex justify-center">
                  <div className="w-full max-w-[18rem] overflow-hidden rounded-2xl bg-white">
                    <img
                      src={optimizedImage(plan.mockupImage, 640, 70)}
                      alt={plan.mockupAlt || "Mockup do produto"}
                      width={640}
                      height={640}
                      decoding="async"
                      className="mx-auto h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-bold text-slate-100 sm:text-base"
                  >
                    <Check className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="min-w-0">{item.label}</span>
                    {item.bonus && (
                      <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-blue-100 border border-blue-200/60 px-2 py-0.5 text-[11px] font-black text-blue-700 uppercase tracking-wide shrink-0">
                        🎁 Bônus
                      </span>
                    )}
                  </li>
                ))}

                {plan.excluded?.map((exItem) => (
                  <li
                    key={exItem}
                    className="flex items-center gap-3 text-sm font-medium text-slate-300 line-through sm:text-base"
                  >
                    <X className="h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
                    <span className="min-w-0">{exItem}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                <p className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-300 sm:text-sm">
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
                  <p className="mt-3 text-center text-xs font-semibold text-slate-300">
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
