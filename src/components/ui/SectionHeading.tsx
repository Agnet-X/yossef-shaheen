"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: { ar: string; en: string };
  title: { ar: string; en: string };
  subtitle?: { ar: string; en: string };
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "mb-16 max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
        {t(label)}
      </span>
      <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
        {t(title)}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-relaxed text-white/50 md:text-xl">
          {t(subtitle)}
        </p>
      )}
      <div
        className={cn(
          "mt-8 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
