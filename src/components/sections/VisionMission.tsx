"use client";

import { useLanguage } from "@/context/LanguageContext";
import { missionVision } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Vision() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="section-padding relative bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "رؤيتنا", en: "Our Vision" }}
          title={{ ar: "هدفنا", en: "Our Goal" }}
        />
        <RevealOnScroll>
          <div className="glass-panel luxury-shadow max-w-4xl rounded-2xl p-12 md:p-16">
            <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl lg:text-4xl">
              {t(missionVision.vision)}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Mission() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="section-padding relative bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "رسالتنا", en: "Our Mission" }}
          title={{ ar: "رسمتنا", en: "Our Mission Statement" }}
        />
        <RevealOnScroll>
          <div className="glass-panel luxury-shadow max-w-4xl rounded-2xl p-12 md:p-16">
            <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl lg:text-4xl">
              {t(missionVision.mission)}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
