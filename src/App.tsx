import React, { lazy, Suspense, useEffect, useState } from "react";
import { CHECKOUT_URLS } from "./data/content";
import { TopUrgencyBanner } from "./components/TopUrgencyBanner";
import { HeroSection } from "./components/HeroSection";
import { WhatYouWillReceive } from "./components/WhatYouWillReceive";
import { BonusSection } from "./components/BonusSection";
import { PricingSection } from "./components/PricingSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { FloatingCartButton } from "./components/FloatingCartButton";

const UpgradeModal = lazy(() =>
  import("./components/UpgradeModal").then((module) => ({
    default: module.UpgradeModal,
  })),
);

const RecentPurchaseToast = lazy(() =>
  import("./components/RecentPurchaseToast").then((module) => ({
    default: module.RecentPurchaseToast,
  })),
);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showPurchaseToast, setShowPurchaseToast] = useState(false);
  const [originalCheckoutHref, setOriginalCheckoutHref] = useState(
    CHECKOUT_URLS.ESSENCIAL,
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPurchaseToast(true), 12000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenUpgradeModal = (href: string) => {
    setOriginalCheckoutHref(href);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#fff7f8] font-sans text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-900">
      <TopUrgencyBanner />
      <HeroSection />
      <WhatYouWillReceive />
      <BonusSection />
      <PricingSection onOpenUpgradeModal={handleOpenUpgradeModal} />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <FloatingCartButton />

      {modalOpen && (
        <Suspense fallback={null}>
          <UpgradeModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            originalHref={originalCheckoutHref}
          />
        </Suspense>
      )}

      {showPurchaseToast && (
        <Suspense fallback={null}>
          <RecentPurchaseToast />
        </Suspense>
      )}
    </main>
  );
}
