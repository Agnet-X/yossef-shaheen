"use client";

import { useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { youssefCertificates } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getCertificateImage } from "@/lib/utils";
import { HiX } from "react-icons/hi";

export function Certificates() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-padding bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "شهاداتي", en: "My Certificates" }}
          title={{
            ar: "شهادات التدريب والتقدير",
            en: "Training & Appreciation Certificates",
          }}
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {youssefCertificates.map((cert, i) => {
            const image =
              cert.image ?? getCertificateImage(cert.id) ?? undefined;

            return (
              <RevealOnScroll key={cert.id} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => image && setLightbox(image)}
                  className="glass-panel group w-full overflow-hidden rounded-2xl text-left transition-all hover:border-[#D4AF37]/40"
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
                    <p className="text-sm leading-relaxed text-white/80">
                      {t(cert.title)}
                    </p>
                    <p className="mt-2 text-xs text-[#D4AF37]">
                      {t(cert.issuer)}
                    </p>
                    {cert.year && (
                      <p className="mt-2 text-xs text-white/50">{cert.year}</p>
                    )}
                  </div>
                </button>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0B0B]/95 p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-8 top-8 text-white"
              onClick={() => setLightbox(null)}
            >
              <HiX size={32} />
            </button>
            <MediaImage
              src={lightbox}
              alt="Certificate full view"
              priority
              className="max-h-[90vh] w-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
