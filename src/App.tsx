import React, { useState } from "react";
import { CHECKOUT_URLS } from "./data/content";
import { TopUrgencyBanner } from "./components/TopUrgencyBanner";
import { HeroSection } from "./components/HeroSection";
import { WhatYouWillReceive } from "./components/WhatYouWillReceive";
import { BonusSection } from "./components/BonusSection";
import { ModulesSection } from "./components/ModulesSection";
import { PricingSection } from "./components/PricingSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { UpgradeModal } from "./components/UpgradeModal";
import { RecentPurchaseToast } from "./components/RecentPurchaseToast";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [originalCheckoutHref, setOriginalCheckoutHref] = useState(CHECKOUT_URLS.ESSENCIAL);

  const handleOpenUpgradeModal = (href: string) => {
    setOriginalCheckoutHref(href);
    setModalOpen(true);
  };

  return (
    <main className="bg-[#fff7f8] font-sans relative min-h-screen text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-900">
      <TopUrgencyBanner />
      <HeroSection />
      <WhatYouWillReceive />
      <ModulesSection />
      <BonusSection />
      <PricingSection onOpenUpgradeModal={handleOpenUpgradeModal} />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <UpgradeModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        originalHref={originalCheckoutHref}
      />
      <RecentPurchaseToast />
    </main>
  );
}
