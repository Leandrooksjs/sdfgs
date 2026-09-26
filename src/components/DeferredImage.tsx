import React, { useEffect, useRef, useState } from "react";

interface DeferredImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  rootMargin?: string;
}

export const DeferredImage: React.FC<DeferredImageProps> = ({
  src,
  rootMargin = "220px",
  alt = "",
  ...props
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      {...props}
    />
  );
};
