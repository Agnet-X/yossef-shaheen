"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { MediaImage } from "@/components/ui/MediaImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getCertificateImage } from "@/lib/utils";
import type { Certificate } from "@/data/site-data";

interface YoussefCertificatesShowcaseProps {
  certificates: Certificate[];
  compact?: boolean;
}

function getCertImage(cert: Certificate) {
  return cert.image ?? getCertificateImage(cert.id);
}

export function YoussefCertificatesShowcase({
  certificates,
  compact = false,
}: YoussefCertificatesShowcaseProps) {
  const { t, lang } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const featured = certificates.filter((cert) => cert.featured);
  const regular = certificates.filter((cert) => !cert.featured);

  const openLightbox = (image?: string) => {
    if (image) setLightbox(image);
  };

  return (
    <>
      {featured.length > 0 && (
        <div className={compact ? "space-y-4" : "mb-10 space-y-8"}>
          {featured.map((cert, i) => {
            const image = getCertImage(cert);

            return (
              <RevealOnScroll key={cert.id} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => openLightbox(image)}
                  className="group relative w-full overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#1A1A1A] via-[#141414] to-[#0B0B0B] text-start shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all hover:border-[#D4AF37]/50"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all group-hover:bg-[#D4AF37]/15" />

                  <div className="relative grid items-stretch lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    {image && (
                      <div className="relative min-h-[360px] bg-white lg:min-h-[520px]">
                        <MediaImage
                          src={image}
                          alt={t(cert.title)}
                          fill
                          priority={!compact}
                          className="object-contain p-4 sm:p-6 lg:p-8 transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/10 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B0B0B]/20" />
                      </div>
                    )}

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        {lang === "ar" ? "شهادة تقدير رسمية" : "Official Appreciation"}
                      </span>

                      <h3
                        className={`font-light leading-snug text-white ${
                          compact ? "text-xl" : "text-2xl md:text-3xl"
                        }`}
                      >
                        {t(cert.title)}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-[#D4AF37]/90">
                        {t(cert.issuer)}
                      </p>

                      {cert.year && (
                        <p className="mt-3 text-xs text-white/45">{cert.year}</p>
                      )}

                      <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 transition-colors group-hover:text-[#D4AF37]">
                        {lang === "ar" ? "اضغط لعرض الشهادة كاملة" : "Tap to view full certificate"}
                        <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </button>
              </RevealOnScroll>
            );
          })}
        </div>
      )}

      <div
        className={
          compact
            ? "grid gap-4 md:grid-cols-2"
            : "grid gap-8 md:grid-cols-2"
        }
      >
        {regular.map((cert, i) => {
          const image = getCertImage(cert);

          return (
            <RevealOnScroll key={cert.id} delay={(featured.length + i) * 0.08}>
              <button
                type="button"
                onClick={() => openLightbox(image)}
                className="glass-panel group w-full overflow-hidden rounded-2xl text-start transition-all hover:border-[#D4AF37]/40"
              >
                {image && (
                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                    <MediaImage
                      src={image}
                      alt={t(cert.title)}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="border-t border-white/5 p-6">
                  <p className="text-sm leading-relaxed text-white/80">{t(cert.title)}</p>
                  <p className="mt-2 text-xs text-[#D4AF37]">{t(cert.issuer)}</p>
                  {cert.year && (
                    <p className="mt-2 text-xs text-white/50">{cert.year}</p>
                  )}
                </div>
              </button>
            </RevealOnScroll>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0B0B]/95 p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute end-6 top-6 text-white sm:end-8 sm:top-8"
              onClick={() => setLightbox(null)}
              aria-label={lang === "ar" ? "إغلاق" : "Close"}
            >
              <HiX size={32} />
            </button>
            <MediaImage
              src={lightbox}
              alt={lang === "ar" ? "عرض الشهادة" : "Certificate full view"}
              priority
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
