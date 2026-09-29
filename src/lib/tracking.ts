export interface CheckoutTrackingOptions {
  contentName: string;
  value?: number;
  currency?: string;
}

const ATTRIBUTION_STORAGE_KEY = "mmse_attribution_params";
const ATTRIBUTION_TTL_MS = 24 * 60 * 60 * 1000;

interface StoredAttribution {
  query: string;
  capturedAt: number;
}

const readStoredAttribution = (): URLSearchParams => {
  if (typeof window === "undefined") return new URLSearchParams();

  try {
    const raw =
      window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ||
      window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);

    if (!raw) return new URLSearchParams();

    const parsed = JSON.parse(raw) as StoredAttribution;
    if (
      !parsed?.query ||
      !parsed?.capturedAt ||
      Date.now() - parsed.capturedAt > ATTRIBUTION_TTL_MS
    ) {
      return new URLSearchParams();
    }

    return new URLSearchParams(parsed.query);
  } catch {
    return new URLSearchParams();
  }
};

export const persistAttributionParams = () => {
  if (typeof window === "undefined") return;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if ([...currentParams.keys()].length === 0) return;

    const previous = readStoredAttribution();

    currentParams.forEach((value, key) => {
      if (value) previous.set(key, value);
    });

    const payload: StoredAttribution = {
      query: previous.toString(),
      capturedAt: Date.now(),
    };

    const serialized = JSON.stringify(payload);
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, serialized);
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, serialized);
  } catch {
    // Attribution persistence must never affect the page experience.
  }
};

export const getTrackedUrl = (href: string): string => {
  if (typeof window === "undefined") return href;
  if (!href.startsWith("http://") && !href.startsWith("https://")) return href;

  try {
    persistAttributionParams();

    const destination = new URL(href);
    const storedParams = readStoredAttribution();
    const currentParams = new URLSearchParams(window.location.search);

    // First restore attribution captured when the visitor entered the page.
    storedParams.forEach((value, key) => {
      if (value && !destination.searchParams.has(key)) {
        destination.searchParams.set(key, value);
      }
    });

    // The current URL always has priority over an older stored value.
    currentParams.forEach((value, key) => {
      if (value) {
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
