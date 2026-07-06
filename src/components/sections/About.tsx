"use client";

import { useLanguage } from "@/context/LanguageContext";
import { companyInfo, featuredTeamMember } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MediaImage } from "@/components/ui/MediaImage";

export function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="section-padding relative bg-[#111111]">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "نبذة عن الشركة", en: "About Company" }}
          title={{ ar: "بروميديا للإنتاج الإعلامي", en: "PRO MEDIA Production" }}
          subtitle={companyInfo.about}
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="space-y-6 text-lg leading-relaxed text-white/60">
              <p>{t(companyInfo.description)}</p>
              <p>{t(companyInfo.tagline)}</p>
              {featuredTeamMember.bio && (
                <p className="border-l-2 border-[#D4AF37] pl-6 text-white/80">
                  {t(featuredTeamMember.bio)}
                </p>
              )}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} direction="left">
            <div className="glass-panel luxury-shadow relative overflow-hidden rounded-2xl p-8">
              <div className="mb-8 flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#D4AF37]/30">
                  <MediaImage
                    src={featuredTeamMember.image ?? "/images/team/yousef-shaheen.webp"}
                    alt="Yousef Shaheen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl text-white">{featuredTeamMember.name}</h3>
                  <p className="text-sm text-[#D4AF37]">{t(featuredTeamMember.role)}</p>
                  {featuredTeamMember.qualification && (
                    <p className="mt-1 text-xs text-white/40">
                      {t(featuredTeamMember.qualification)}
                    </p>
                  )}
                </div>
              </div>
              <blockquote className="text-white/70 italic">
                {lang === "ar"
                  ? "« نفخر بأن نكون شريككم الموثوق في مجال الإنتاج التلفزيوني والإعلامي — حيث تلتقي الإبداعية بالاحترافية »"
                  : "« We take pride in being your trusted partner in television and media production — where creativity meets professionalism »"}
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
