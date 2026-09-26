export interface CheckoutTrackingOptions {
  contentName: string;
  value?: number;
  currency?: string;
}

export const getTrackedUrl = (href: string): string => {
  if (typeof window === "undefined") return href;
  if (!href.startsWith("http://") && !href.startsWith("https://")) return href;

  try {
    const destination = new URL(href);
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.forEach((value, key) => {
      if (!destination.searchParams.has(key)) {
        destination.searchParams.set(key, value);
      }
    });

    return destination.toString();
  } catch {
    return href;
  }
};

export const trackInitiateCheckout = ({
  contentName,
  value,
  currency = "BRL",
}: CheckoutTrackingOptions) => {
  if (typeof window === "undefined") return;

  const fbq = (window as any).fbq;
  if (typeof fbq !== "function") return;

  const payload: Record<string, string | number> = {
    content_name: contentName,
    content_type: "product",
    currency,
  };

  if (typeof value === "number") {
    payload.value = value;
  }

  try {
    fbq("track", "InitiateCheckout", payload);
  } catch {
    // Tracking must never block checkout navigation.
  }
};
