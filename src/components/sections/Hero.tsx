"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";
import { useLanguage } from "@/context/LanguageContext";
import { statistics, featuredTeamMember } from "@/data/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HiOutlinePlay } from "react-icons/hi2";

export function Hero() {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const counters = document.querySelectorAll("[data-counter]");
    counters.forEach((counter) => {
      const target = counter.getAttribute("data-counter");
      if (!target) return;
      const num = parseInt(target.replace(/\D/g, ""), 10);
      if (Number.isNaN(num)) return;

      let current = 0;
      const increment = num / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = `${Math.floor(current)}${target.replace(/[\d]/g, "").replace(/^\d+/, "") || "+"}`;
        }
      }, 30);
    });
  }, []);

  const yousef = featuredTeamMember;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#0B0B0B]"
    >
      {/* Cinematic video background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-40774-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/80 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]/90" />
      </motion.div>

      {/* Floating camera elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] hidden h-16 w-16 rounded-full border border-[#D4AF37]/20 lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[8%] hidden h-24 w-24 rounded-full border border-white/5 lg:block"
      />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-32 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2, duration: 1 }}
            >
              <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]" />
                {lang === "ar" ? "المنتج التنفيذي" : "Executive Producer"}
              </span>

              <h1 className="mb-2 text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                {lang === "ar" ? (
                  <>
                    <span className="gold-gradient-text">يوسف</span>
                    <br />
                    شاهين
                  </>
                ) : (
                  <>
                    <span className="gold-gradient-text">Yousef</span>
                    <br />
                    Shaheen
                  </>
                )}
              </h1>

              <p className="mb-2 text-lg text-white/40 md:text-xl">
                {yousef?.name}
              </p>

              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                {yousef ? t(yousef.role) : ""}
                {" · "}
                {lang === "ar"
                  ? "بروميديا للإنتاج الإعلامي والسوشيال ميديا"
                  : "PRO MEDIA — Media Production & Social Media"}
              </p>

              <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/40">
                {lang === "ar"
                  ? "مخرج تلفزيوني · مونتير · مدير تصوير — ثقة الحكومات والمؤسسات الكبرى في دولة الإمارات"
                  : "TV Director · Editor · DOP — Trusted by governments and major institutions across the UAE"}
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton href="#projects" variant="primary">
                  {lang === "ar" ? "استكشف الأعمال" : "Explore Work"}
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                  <HiOutlinePlay className="text-lg" />
                  {lang === "ar" ? "تواصل معنا" : "Get in Touch"}
                </MagneticButton>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4"
            >
              {statistics.slice(0, 4).map((stat) => (
                <div key={stat.id}>
                  <div
                    data-counter={stat.value}
                    className="text-3xl font-light text-[#D4AF37] md:text-4xl"
                  >
                    {stat.value}
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/40">
                    {t(stat.label)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Youssef Portrait */}
          <motion.div
            style={{ scale: portraitScale }}
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/yousef-shaheen"
              className="group relative mx-auto block aspect-[3/4] max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#D4AF37]/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="glass-panel luxury-shadow relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <MediaImage
                  src={yousef?.image ?? "/images/team/yousef-shaheen.webp"}
                  alt="Yousef M K Shaheen - Executive Producer"
                  priority
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0B]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0B0B0B]/40 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                    {lang === "ar" ? "الملف الكامل" : "Full Profile"}
                    <span aria-hidden>↗</span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        PRO MEDIA
                      </p>
                      <p className="mt-1 text-lg text-white">{yousef?.name}</p>
                    </div>
                    <div className="text-right text-xs text-white/50">
                      <p>+971 55 626 7779</p>
                      <p>@yousefshaheen</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-dashed border-[#D4AF37]/30 lg:block"
              />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
              {lang === "ar" ? "مرر للأسفل" : "Scroll"}
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
