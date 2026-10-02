import React, { useEffect, useState } from "react";

interface TransparentMockupImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const TransparentMockupImage: React.FC<TransparentMockupImageProps> = ({
  src,
  alt,
  width = 640,
  height = 640,
  className = "",
}) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const image = new Image();
    image.decoding = "async";

    image.onload = () => {
      if (cancelled) return;

      const maxWidth = 900;
      const scale = image.naturalWidth > maxWidth ? maxWidth / image.naturalWidth : 1;
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        setProcessedSrc(src);
        return;
      }

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const total = canvas.width * canvas.height;
      const candidate = new Uint8Array(total);
      const background = new Uint8Array(total);
      const queue = new Int32Array(total);
      let head = 0;
      let tail = 0;

      for (let i = 0, p = 0; i < total; i++, p += 4) {
        const r = pixels[p];
        const g = pixels[p + 1];
        const b = pixels[p + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        if ((r + g + b) / 3 > 226 && max - min < 20) {
          candidate[i] = 1;
        }
      }

      const push = (index: number) => {
        if (candidate[index] && !background[index]) {
          background[index] = 1;
          queue[tail++] = index;
        }
      };

      for (let x = 0; x < canvas.width; x++) {
        push(x);
        push((canvas.height - 1) * canvas.width + x);
      }

      for (let y = 0; y < canvas.height; y++) {
        push(y * canvas.width);
        push(y * canvas.width + canvas.width - 1);
      }

      while (head < tail) {
        const index = queue[head++];
        const x = index % canvas.width;

        if (x > 0) push(index - 1);
        if (x < canvas.width - 1) push(index + 1);
        if (index >= canvas.width) push(index - canvas.width);
        if (index < total - canvas.width) push(index + canvas.width);
      }

      for (let i = 0, p = 0; i < total; i++, p += 4) {
        if (background[i]) {
          pixels[p + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (!cancelled) {
        setProcessedSrc(canvas.toDataURL("image/png"));
      }
    };

    image.onerror = () => {
      if (!cancelled) setProcessedSrc(src);
    };

    image.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <img
      src={processedSrc || src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      className={className}
      loading="lazy"
    />
  );
};
