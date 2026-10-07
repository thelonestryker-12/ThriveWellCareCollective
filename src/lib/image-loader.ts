type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: ImageLoaderProps) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalized}`;
}
