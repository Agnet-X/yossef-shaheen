"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  HiOutlineFilm,
  HiOutlineTv,
  HiOutlineMegaphone,
  HiOutlineShare,
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineSparkles,
} from "react-icons/hi2";

const icons = [
  HiOutlineTv,
  HiOutlineFilm,
  HiOutlineMegaphone,
  HiOutlineShare,
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineSparkles,
];

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "خدماتنا", en: "Our Services" }}
          title={{
            ar: "حلول إنتاج متكاملة",
            en: "Integrated Production Solutions",
          }}
          subtitle={{
            ar: "نحن نسعى دائماً لتحقيق رؤية عصرية تنعكس في كل عمل نقوم به",
            en: "We always strive to achieve a modern vision reflected in every project we undertake",
          }}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {services.map((service, i) => {
              const Icon = icons[i] ?? HiOutlineFilm;
              return (
                <RevealOnScroll key={service.id} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-4 rounded-xl border p-6 text-left transition-all duration-500 ${
                      active === i
                        ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                        : "border-white/5 hover:border-white/10"
                    }`}
                  >
                    <Icon
                      className={`shrink-0 ${active === i ? "text-[#D4AF37]" : "text-white/40"}`}
                      size={24}
                    />
                    <span className="text-lg text-white">{t(service.title)}</span>
                  </button>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll direction="left">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="glass-panel luxury-shadow flex h-full min-h-[400px] flex-col justify-center rounded-2xl p-12"
            >
              <span className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]">
                0{active + 1} / 0{services.length}
              </span>
              <h3 className="mb-6 text-3xl font-light text-white">
                {t(services[active].title)}
              </h3>
              <p className="text-lg leading-relaxed text-white/60">
                {t(services[active].description)}
              </p>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
