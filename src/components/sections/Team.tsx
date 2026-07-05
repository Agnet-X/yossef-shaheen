"use client";

import { MediaImage } from "@/components/ui/MediaImage";
import { useLanguage } from "@/context/LanguageContext";
import { teamMembers, featuredTeamMember } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Team() {
  const { t, lang } = useLanguage();
  const others = teamMembers.filter((m) => !m.featured);

  return (
    <section id="team" className="section-padding bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "فريق العمل", en: "Our Team" }}
          title={{
            ar: "محترفون موهوبون",
            en: "Talented Professionals",
          }}
          subtitle={{
            ar: "يضم فريق العمل مجموعة من المبدعين الموهوبين الذين يتمتعون بمهارات استثنائية وخبرة واسعة في مجال الإعلام والإنتاج",
            en: "Our team comprises talented creatives with exceptional skills and extensive media production experience",
          }}
        />

        {/* Featured — Youssef */}
        <RevealOnScroll>
          <div className="glass-panel luxury-shadow mb-16 overflow-hidden rounded-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <MediaImage
                  src={featuredTeamMember.image ?? "/images/team/yousef-shaheen.png"}
                  alt={featuredTeamMember.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616] hidden lg:block" />
              </div>
              <div className="flex flex-col justify-center p-10 lg:p-16">
                <span className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  {lang === "ar" ? "المنتج التنفيذي" : "Executive Producer"}
                </span>
                <h3 className="text-4xl font-light text-white md:text-5xl">
                  {featuredTeamMember.name}
                </h3>
                <p className="mt-2 text-lg text-[#D4AF37]">
                  {t(featuredTeamMember.role)}
                </p>
                {featuredTeamMember.bio && (
                  <p className="mt-6 leading-relaxed text-white/60">
                    {t(featuredTeamMember.bio)}
                  </p>
                )}
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/40">
                  {featuredTeamMember.phone && (
                    <span>{featuredTeamMember.phone}</span>
                  )}
                  {featuredTeamMember.social?.instagram?.map((ig) => (
                    <span key={ig}>{ig}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {others.map((member, i) => (
            <RevealOnScroll key={member.id} delay={i * 0.05}>
              <div className="glass-panel group rounded-2xl p-8 transition-all duration-500 hover:border-[#D4AF37]/20">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xl font-light text-[#D4AF37]">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h4 className="text-lg text-white">{member.name}</h4>
                <p className="mt-1 text-sm text-white/50">{t(member.role)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
