"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { timeline } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CompanyTimeline() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <section id="timeline" className="section-padding bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "مسيرتنا", en: "Our Journey" }}
          title={{
            ar: "الجدول الزمني للإنجازات",
            en: "Timeline of Achievements",
          }}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-2">
            {timeline.map((entry, i) => (
              <RevealOnScroll key={entry.id} delay={i * 0.03}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-6 rounded-xl border p-5 text-left transition-all duration-300 ${
                    active === i
                      ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                      : "border-transparent hover:border-white/10"
                  }`}
                >
                  <span
                    className={`text-2xl font-light ${active === i ? "text-[#D4AF37]" : "text-white/30"}`}
                  >
                    {entry.year}
                  </span>
                  <span className="text-white/70">{t(entry.title)}</span>
                </button>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="left">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-panel luxury-shadow sticky top-32 rounded-2xl p-12"
            >
              <span className="text-6xl font-light text-[#D4AF37]/30">
                {timeline[active].year}
              </span>
              <h3 className="mt-4 text-2xl text-white">
                {t(timeline[active].title)}
              </h3>
              <p className="mt-6 leading-relaxed text-white/60">
                {t(timeline[active].description)}
              </p>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
