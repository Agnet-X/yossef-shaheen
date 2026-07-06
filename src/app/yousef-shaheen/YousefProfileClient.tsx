"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { YoussefCertificatesShowcase } from "@/components/sections/YoussefCertificatesShowcase";
import {
  featuredTeamMember,
  youssefCertificates,
  youssefIntro,
  youssefLatestHighlights,
  youssefMinistryPeriod,
  youssefVideoProductions,
  statistics,
  timeline,
  projects,
} from "@/data/site-data";
import { MediaImage } from "@/components/ui/MediaImage";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  buildWhatsAppUrl,
  getProjectImage,
  getProjectLink,
  getProjectLinkCount,
  sortProjectsByWatchLinks,
} from "@/lib/utils";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowUpRight,
  HiOutlinePlay,
} from "react-icons/hi2";

export function YousefProfileClient() {
  const { t, lang, dir } = useLanguage();
  const yousef = featuredTeamMember;
  const topProjects = sortProjectsByWatchLinks(projects).slice(0, 12);
  const careerTimeline = [...timeline].reverse();

  const whatsappMessage =
    lang === "ar"
      ? "مرحباً يوسف، أود التواصل معك بخصوص مشروع إنتاجي."
      : "Hello Yousef, I would like to discuss a production project.";

  return (
    <div className="min-h-screen pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-12 lg:py-20">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#D4AF37]"
          >
            <HiOutlineArrowLeft className={dir === "rtl" ? "rotate-180" : ""} />
            {lang === "ar" ? "الرئيسية" : "Home"}
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="mx-auto w-full max-w-sm lg:sticky lg:top-28"
            >
              <div className="glass-panel luxury-shadow overflow-hidden rounded-2xl">
                <div className="relative aspect-[3/4]">
                  <MediaImage
                    src={yousef.image ?? "/images/team/yousef-shaheen.webp"}
                    alt={yousef.name}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    PRO MEDIA
                  </p>
                  <h1 className="mt-2 text-2xl text-white">{yousef.name}</h1>
                  <p className="mt-2 text-sm text-[#D4AF37]">{t(yousef.role)}</p>
                  {yousef.nationality && (
                    <p className="mt-3 text-sm text-white/50">
                      {t(yousef.nationality)}
                      {yousef.qualification ? ` · ${t(yousef.qualification)}` : ""}
                    </p>
                  )}
                  {yousef.phone && (
                    <p className="mt-4 text-sm text-white/70">
                      <PhoneNumber phone={yousef.phone} />
                    </p>
                  )}
                  {yousef.social?.instagram && (
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/40">
                      {yousef.social.instagram.map((ig) => (
                        <span key={ig}>{ig}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="space-y-16">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <SectionLabel
                  ar="نبذة"
                  en="Overview"
                  lang={lang}
                />
                <p className="mt-4 text-xl leading-relaxed text-white/75">{t(youssefIntro)}</p>
                {yousef.bio && (
                  <p className="mt-4 text-lg leading-relaxed text-white/55">{t(yousef.bio)}</p>
                )}
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {statistics.slice(0, 4).map((stat) => (
                    <div key={stat.id} className="glass-panel rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-[#D4AF37]">{stat.value}</div>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                        {t(stat.label)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <SectionLabel
                  ar="وزارة شؤون مجلس الوزراء"
                  en="Ministry of Cabinet Affairs"
                  lang={lang}
                />
                <p className="mt-2 text-sm text-white/45">{t(youssefMinistryPeriod.period)}</p>
                <ul className="mt-6 space-y-3">
                  {youssefMinistryPeriod.duties.map((item) => (
                    <li
                      key={item.ar}
                      className="glass-panel flex gap-3 rounded-xl p-4 text-sm leading-relaxed text-white/70"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SectionLabel
                  ar="فيديوهات صنعها"
                  en="Videos Produced"
                  lang={lang}
                />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {youssefVideoProductions.map((item) => (
                    <li
                      key={item.ar}
                      className="rounded-xl border border-white/5 bg-[#121212] p-4 text-sm text-white/65"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </motion.section>

              {yousef.experience && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <SectionLabel ar="خبرات بارزة" en="Key Experience" lang={lang} />
                  <ul className="mt-6 space-y-3">
                    {yousef.experience.map((item) => (
                      <li
                        key={item.ar}
                        className="border-s-2 border-[#D4AF37]/40 ps-4 text-sm leading-relaxed text-white/65"
                      >
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <SectionLabel ar="آخر الأعمال" en="Latest Work" lang={lang} />
                <div className="mt-6 space-y-4">
                  {youssefLatestHighlights.map((item) => (
                    <div key={item.year} className="glass-panel rounded-xl p-6">
                      <span className="text-sm text-[#D4AF37]">{item.year}</span>
                      <h3 className="mt-2 text-lg text-white">{t(item.title)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <SectionLabel ar="مسيرة مهنية" en="Career Timeline" lang={lang} />
                <div className="mt-6 space-y-4">
                  {careerTimeline.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex gap-6 border-b border-white/5 pb-4 last:border-0"
                    >
                      <span className="w-14 shrink-0 text-lg text-[#D4AF37]">{entry.year}</span>
                      <div>
                        <h3 className="text-white">{t(entry.title)}</h3>
                        <p className="mt-1 text-sm text-white/50">{t(entry.description)}</p>
                        {entry.projectSlug && (
                          <Link
                            href={`/projects/${entry.projectSlug}`}
                            className="mt-2 inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline"
                          >
                            {lang === "ar" ? "عرض المشروع" : "View project"}
                            <HiOutlineArrowUpRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <SectionLabel ar="محفظة الأعمال" en="Portfolio" lang={lang} />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {topProjects.map((project) => {
                    const linkCount = getProjectLinkCount(project);
                    return (
                      <Link
                        key={project.slug}
                        href={getProjectLink(project)}
                        className="group glass-panel overflow-hidden rounded-xl transition-colors hover:border-[#D4AF37]/30"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <MediaImage
                            src={getProjectImage(project.slug)}
                            alt={t(project.title)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {linkCount > 0 && (
                            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#D4AF37] px-2 py-1 text-[10px] text-[#0B0B0B]">
                              <HiOutlinePlay size={10} />
                              {linkCount}
                            </span>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-white group-hover:text-[#D4AF37]">
                            {t(project.title)}
                          </h3>
                          <p className="mt-1 text-xs text-white/40">{project.year}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#D4AF37]"
                >
                  {lang === "ar" ? "جميع المشاريع" : "All projects"}
                  <HiOutlineArrowUpRight />
                </Link>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <SectionLabel ar="الشهادات" en="Certificates" lang={lang} />
                <div className="mt-6">
                  <YoussefCertificatesShowcase certificates={youssefCertificates} compact />
                </div>
              </motion.section>

              <div className="flex flex-wrap gap-4 pb-12">
                <MagneticButton
                  href={buildWhatsAppUrl(yousef.phone ?? "+971556267779", whatsappMessage)}
                  variant="primary"
                >
                  {lang === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                </MagneticButton>
                <MagneticButton href="/#contact" variant="secondary">
                  {lang === "ar" ? "نموذج التواصل" : "Contact Form"}
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({
  ar,
  en,
  lang,
}: {
  ar: string;
  en: string;
  lang: string;
}) {
  return (
    <h2 className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
      {lang === "ar" ? ar : en}
    </h2>
  );
}
