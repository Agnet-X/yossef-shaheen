"use client";

import { useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { btsImages } from "@/lib/utils";
import { HiX } from "react-icons/hi";

export function BehindTheScenes() {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="bts" className="section-padding bg-[#111111]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "خلف الكواليس", en: "Behind The Scenes" }}
          title={{
            ar: "لحظات من قلب الإنتاج",
            en: "Moments From The Heart of Production",
          }}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {btsImages.map((src, i) => (
            <RevealOnScroll key={src} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setLightbox(src)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl"
              >
                <MediaImage
                  src={src}
                  alt={`Behind the scenes ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/0 transition-colors group-hover:bg-[#0B0B0B]/30" />
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0B0B]/95 p-8 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-8 top-8 text-white"
              onClick={() => setLightbox(null)}
            >
              <HiX size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] max-w-5xl"
            >
              <MediaImage
                src={lightbox}
                alt="Fullscreen preview"
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
