"use client";

import { useState } from "react";
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
  src,
  onError,
  ...props
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    if (
      typeof src === "string" &&
      src.endsWith(".webp") &&
      !failed
    ) {
      setFailed(true);
      img.src = src.replace(/\.webp$/i, ".png");
      return;
    }
    onError?.(event);
  };

  const imgProps = {
    alt,
    src,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    decoding: priority ? ("sync" as const) : ("async" as const),
    onLoad: () => setLoaded(true),
    onError: handleError,
    ...props,
  };

  const imgClassName = cn(
    fill
      ? "absolute inset-0 h-full w-full transition-opacity duration-300"
      : "h-full w-full transition-opacity duration-300",
    loaded || priority ? "opacity-100" : "opacity-0",
    className
  );

  if (fill) {
    return (
      <>
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...imgProps} className={imgClassName} />
      </>
    );
  }

  if (priority) {
    return (
      <div className="relative h-full w-full">
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 to-white/5"
            aria-hidden
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...imgProps} className={imgClassName} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...imgProps} className={imgClassName} />
  );
}
