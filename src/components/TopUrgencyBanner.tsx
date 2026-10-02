import React from "react";

export const TopUrgencyBanner: React.FC = () => {
  return (
    <div className="flex justify-center px-4 pt-7 sm:pt-9">
      <div
        id="top-urgency-banner"
        className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.06] px-4 py-2 text-[10px] font-bold tracking-wide text-teal-300 shadow-[0_0_22px_rgba(25,216,196,0.08)] sm:text-xs"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(25,216,196,0.95)]" />
        Material completo disponível agora
      </div>
    </div>
  );
};
