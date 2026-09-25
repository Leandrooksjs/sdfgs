import React, { useState, useEffect } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { RECENT_BUYERS } from "../data/content";

export const RecentPurchaseToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let intervalTimer: NodeJS.Timeout;

    const triggerNotification = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        setIndex((prev) => (prev + 1) % RECENT_BUYERS.length);
      }, 3000);
    };

    const initialTimer = setTimeout(() => {
      triggerNotification();
      intervalTimer = setInterval(triggerNotification, 7000);
    }, 2000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, []);

  const currentBuyer = RECENT_BUYERS[index];

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed top-3 left-3 z-50 sm:top-4 sm:left-4"
    >
      <div
        className={`flex items-center gap-2 rounded-xl border border-emerald-200 bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur-xs transition-all duration-300 max-w-[210px] ${
          visible
            ? "translate-y-0 opacity-100 scale-100"
            : "pointer-events-none -translate-y-2 opacity-0 scale-95"
        }`}
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
          <ShoppingCart className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-900 leading-tight">
            {currentBuyer.nome} comprou
          </p>
          <p className="flex items-center gap-0.5 truncate text-[10px] font-medium text-emerald-600 leading-tight mt-0.5">
            <Check className="h-2.5 w-2.5 shrink-0 text-emerald-500 stroke-[3]" aria-hidden="true" />
            <span className="truncate">{currentBuyer.cidade}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
