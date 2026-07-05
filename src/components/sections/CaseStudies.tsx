"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const caseStudy = projects.find((p) => p.slug === "maazen-al-sharjah") ?? projects.find((p) => p.featured);

export function CaseStudies() {
  const { t, lang } = useLanguage();
  const cs = caseStudy ?? projects[0];

  const steps = [
    {
      ar: "أهداف العميل",
      en: "Client Goals",
      content: cs.description,
    },
    {
      ar: "عملية الإنتاج",
      en: "Production Process",
      content: {
        ar: "تصوير بأعلى جودة بأحدث معدات التصوير — سلايدر، ستeady cam، درون — مونتاج وإخراج في استوديوهات الشركة بأفضل وأحدث الأجهزة والتقنيات",
        en: "Filming at highest quality with latest equipment — slider, steady cam, drone — editing and direction in company studios with best technology",
      },
    },
    {
      ar: "النتائج النهائية",
      en: "Final Results",
      content: cs.broadcastChannel
        ? {
            ar: `تم عرض البرنامج على ${cs.broadcastChannel.ar}${cs.episodes ? ` — ${cs.episodes} حلقة` : ""}`,
            en: `Broadcast on ${cs.broadcastChannel.en}${cs.episodes ? ` — ${cs.episodes} episodes` : ""}`,
          }
        : cs.description,
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "دراسات حالة", en: "Case Studies" }}
          title={{
            ar: cs ? t(cs.title) : "مآذن الشارقة",
            en: cs ? t(cs.title) : "Minarets of Sharjah",
          }}
          subtitle={{
            ar: "من الفكرة إلى الشاشة — رحلة إنتاج متكاملة",
            en: "From concept to screen — a complete production journey",
          }}
        />

        <div className="grid gap-8 lg:grid-cols-4">
          <RevealOnScroll>
            <div className="glass-panel rounded-2xl p-8 lg:col-span-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                {lang === "ar" ? "قبل" : "Before"}
              </span>
              <p className="mt-4 text-white/60">
                {lang === "ar"
                  ? "رؤية إعلامية تُبرز الهوية الدينية والعمرانية لإمارة الشارقة"
                  : "A media vision highlighting the religious and architectural identity of Sharjah"}
              </p>
            </div>
          </RevealOnScroll>

          {steps.map((step, i) => (
            <RevealOnScroll key={step.en} delay={i * 0.1}>
              <div className="glass-panel h-full rounded-2xl p-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  {lang === "ar" ? step.ar : step.en}
                </span>
                <p className="mt-4 leading-relaxed text-white/60">
                  {t(step.content)}
                </p>
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.3}>
            <div className="glass-panel rounded-2xl border-[#D4AF37]/20 p-8 lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                {lang === "ar" ? "بعد" : "After"}
              </span>
              <p className="mt-4 text-xl text-white/80">
                {lang === "ar"
                  ? "برنامج مؤثر يُعد من الأعمال التي تبرز الهوية الدينية والعمرانية — تم تنفيذه بكامل تفاصيله من خلال طاقم عمل شركة بروميديا"
                  : "An impactful program among works highlighting religious and architectural identity — fully executed by PRO MEDIA team"}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
