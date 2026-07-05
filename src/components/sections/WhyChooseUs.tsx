"use client";

import { useLanguage } from "@/context/LanguageContext";
import { whyChooseUs, workflowSteps } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-padding bg-[#111111]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "لماذا نحن", en: "Why Choose Us" }}
          title={{
            ar: "معايير إنتاج على مستوى الحكومات",
            en: "Government-Grade Production Standards",
          }}
          subtitle={{
            ar: "يتميز فريقنا بخبرة واسعة في مجال الإنتاج التلفزيوني، حيث نسعى دائماً إلى تحقيق أعلى مستويات الجودة والابتكار",
            en: "Our team excels in television production, always striving for the highest levels of quality and innovation",
          }}
        />

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, i) => (
            <RevealOnScroll key={step.id} delay={i * 0.1}>
              <div className="glass-panel group h-full rounded-2xl p-8 transition-all duration-500 hover:border-[#D4AF37]/30">
                <span className="text-5xl font-light text-[#D4AF37]/30 transition-colors group-hover:text-[#D4AF37]">
                  0{step.step}
                </span>
                <h3 className="mt-4 text-xl text-white">{t(step.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {t(step.description)}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.05}>
              <div className="flex gap-4 rounded-xl border border-white/5 p-6 transition-colors hover:border-[#D4AF37]/20">
                <HiOutlineCheckCircle className="mt-1 shrink-0 text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="text-white">{t(item.title)}</h4>
                  <p className="mt-2 text-sm text-white/50">{t(item.description)}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
