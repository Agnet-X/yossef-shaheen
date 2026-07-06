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
    decoding: "async" as const,
    onLoad: () => setLoaded(true),
    onError: handleError,
    ...props,
  };

  if (fill) {
    return (
      <>
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...imgProps}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      </>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...imgProps}
      className={cn(
        "transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
}
