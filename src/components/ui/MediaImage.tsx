import { cn } from "@/lib/utils";

interface MediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
}

export function MediaImage({
  fill,
  className,
  alt = "",
  priority,
  ...props
}: MediaImageProps) {
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("absolute inset-0 h-full w-full", className)}
        {...props}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
