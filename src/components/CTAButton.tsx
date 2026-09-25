import React from "react";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  id?: string;
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "muted" | "secondary";
  className?: string;
  showArrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  onClick,
}) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "InitiateCheckout", {
          content_name: typeof children === "string" ? children : "Quero comprar",
        });
      } catch {}
    }
    if (onClick) {
      onClick(e);
      return;
    }
    if (isExternal && typeof window !== "undefined") {
      if (window.self !== window.top) {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }
  };

  const baseClasses =
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer sm:text-lg select-none";

  const variantClasses =
    variant === "primary"
      ? "bg-rose-500 text-white shadow-pink-cta hover:-translate-y-0.5 hover:bg-rose-600 active:translate-y-0"
      : "border-2 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 hover:border-rose-300";

  return (
    <a
      id={id}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />}
    </a>
  );
};
