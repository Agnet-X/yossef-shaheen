"use client";

import { useMemo, useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { equipmentCategories } from "@/data/site-data";
import { getEquipmentImage } from "@/data/equipment-images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Equipment() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const category = equipmentCategories[activeCategory];

  const itemsWithImages = useMemo(() => {
    const seen = new Set<string>();

    return category.items.map((item) => {
      const image = item.image ?? getEquipmentImage(item.name);
      if (!image || seen.has(image)) {
        return { ...item, image: undefined };
      }
      seen.add(image);
      return { ...item, image };
    });
  }, [category]);

  return (
    <section id="equipment" className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "معداتنا", en: "Our Equipment" }}
          title={{
            ar: "أحدث تقنيات الإنتاج السينمائي",
            en: "Latest Cinematic Production Technology",
          }}
          subtitle={{
            ar: "نولي اهتماماً كبيراً لاستخدام أحدث الأجهزة والمعدات في عمليات الإنتاج التلفزيوني لضمان تقديم أعلى مستويات الجودة والابتكار",
            en: "We prioritize using the latest equipment in TV production to ensure the highest quality and innovation",
          }}
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {equipmentCategories.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(i)}
              className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all ${
                activeCategory === i
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "border-white/10 text-white/40 hover:text-white"
              }`}
            >
              {t(cat.title)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {itemsWithImages.map((item, i) => (
              <RevealOnScroll key={item.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group h-full overflow-hidden rounded-2xl border border-white/5 bg-[#121212] transition-colors hover:border-[#D4AF37]/25"
                >
                  {item.image ? (
                    <div className="relative aspect-[5/4] overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#1c1c1c] via-[#101010] to-[#0a0a0a]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_68%)]" />
                      <MediaImage
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[5/4] items-end border-b border-white/5 bg-gradient-to-br from-[#161616] to-[#0f0f0f] p-6">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/50">
                        PRO MEDIA
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-base leading-snug text-white">{item.name}</h3>
                    {item.quantity && (
                      <p className="mt-2 text-sm font-medium text-[#D4AF37]">
                        {item.quantity}
                      </p>
                    )}
                    {item.specs && (
                      <p className="mt-3 text-sm leading-relaxed text-white/45">
                        {item.specs}
                      </p>
                    )}
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
