import React from "react";
import { ArrowRight } from "lucide-react";
import { getTrackedUrl, trackInitiateCheckout } from "../lib/tracking";

interface CTAButtonProps {
  id?: string;
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "muted" | "secondary";
  className?: string;
  showArrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  trackCheckout?: boolean;
  trackingName?: string;
  trackingValue?: number;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  onClick,
  trackCheckout,
  trackingName,
  trackingValue,
}) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const trackedHref = isExternal ? getTrackedUrl(href) : href;
  const shouldTrackCheckout = trackCheckout ?? isExternal;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (isExternal && typeof window !== "undefined") {
      e.preventDefault();

      // UTMify may decorate the anchor href after React has rendered it.
      // Read the live DOM href at click time instead of using the old value
      // captured during render.
      const destinationHref = e.currentTarget.href || trackedHref;

      if (shouldTrackCheckout) {
        trackInitiateCheckout({
          contentName:
            trackingName ||
            (typeof children === "string" ? children : "Quero comprar"),
          value: trackingValue,
        });

        window.setTimeout(() => {
          window.location.assign(destinationHref);
        }, 180);
        return;
      }

      window.location.assign(destinationHref);
    }
  };

  const baseClasses =
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer sm:text-lg select-none";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-pink-cta hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
      : "border-2 border-blue-200 bg-blue-50 text-rose-700 hover:bg-blue-100 hover:border-blue-300";

  return (
    <a
      id={id}
      href={trackedHref}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />}
    </a>
  );
};
