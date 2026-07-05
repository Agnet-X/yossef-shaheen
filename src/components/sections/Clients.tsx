"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { clients } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Clients() {
  const { t } = useLanguage();
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding overflow-hidden bg-[#111111]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "عملاؤنا", en: "Our Clients" }}
          title={{
            ar: "ثقة المؤسسات الحكومية والخاصة",
            en: "Trusted by Government & Private Institutions",
          }}
          subtitle={{
            ar: "نؤمن بأن عملاءنا هم الروح والدافع وراء كل ما نقوم به",
            en: "We believe our clients are the soul and driving force behind everything we do",
          }}
          align="center"
        />
      </div>

      <div className="relative mt-8">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#111111] to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="glass-panel flex shrink-0 items-center rounded-xl px-8 py-6"
            >
              <span className="text-sm uppercase tracking-[0.15em] text-white/60">
                {t(client.name)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
