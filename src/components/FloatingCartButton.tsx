import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

export const FloatingCartButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;

    const handleFirstScroll = () => {
      if (window.scrollY <= 8) return;
      setVisible(true);
      window.removeEventListener("scroll", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <a
      href="#ofertas"
      aria-label="Ir para as ofertas"
      title="Ver ofertas"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_10px_30px_rgba(244,63,94,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-600 active:translate-y-0 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
    </a>
  );
};
