"use client";

import { useLanguage } from "@/context/LanguageContext";
import { statistics } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Awards() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "الجوائز والإنجازات", en: "Awards & Achievements" }}
          title={{
            ar: "أرقام مسيرة يوسف شاهين",
            en: "Youssef Shaheen by the Numbers",
          }}
          subtitle={{
            ar: "إنجازات حقيقية من ملف الأعمال",
            en: "Real milestones from the portfolio and company profile",
          }}
        />

        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl font-light text-[#D4AF37] md:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
