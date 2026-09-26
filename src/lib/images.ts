export const optimizedImage = (
  src: string,
  width: 320 | 480 | 640 | 828 | 1080,
  quality: 60 | 70 | 75 | 80 = 70,
): string => {
  if (import.meta.env.DEV) return src;

  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
};
