"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/site-data";
import { getYouTubeId } from "@/lib/utils";
import { HiOutlineArrowUpRight, HiOutlinePlay } from "react-icons/hi2";

interface Props {
  project: Project;
}

export function ProjectWatchPlayer({ project }: Props) {
  const { t, lang } = useLanguage();
  const youtubeLinks = project.youtubeLinks ?? [];
  const videoLinks = project.videoLinks ?? [];
  const youtubeIds = youtubeLinks
    .map(getYouTubeId)
    .filter((id): id is string => Boolean(id));

  const [activeIndex, setActiveIndex] = useState(0);
  const activeId = youtubeIds[activeIndex] ?? youtubeIds[0];

  if (youtubeIds.length === 0 && videoLinks.length > 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
          {lang === "ar" ? "روابط المشاهدة" : "Watch links"}
        </h2>
        <p className="text-sm text-white/50">
          {lang === "ar"
            ? "اضغط لفتح الحلقة على موقع البث"
            : "Tap to open the episode on the broadcaster's site"}
        </p>
        {videoLinks.map((link, i) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-[#D4AF37]/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
              <HiOutlinePlay size={22} />
            </span>
            <span className="text-white/80">
              {lang === "ar" ? `مشاهدة — رابط ${i + 1}` : `Watch — Link ${i + 1}`}
            </span>
            <HiOutlineArrowUpRight className="ms-auto text-[#D4AF37]" size={18} />
          </a>
        ))}
      </div>
    );
  }

  if (youtubeIds.length === 0 && videoLinks.length === 0) {
    if (!project.broadcastChannel) return null;

    return (
      <div className="glass-panel rounded-2xl p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
          {lang === "ar" ? "المشاهدة" : "Watch"}
        </h2>
        <p className="mt-4 text-lg text-white">
          {lang === "ar" ? "يُعرض على: " : "Broadcast on: "}
          <span className="text-[#D4AF37]">{t(project.broadcastChannel)}</span>
        </p>
        <p className="mt-3 text-sm text-white/50">
          {lang === "ar"
            ? "لا يوجد رابط فيديو لهذا المشروع في ملف الأعمال."
            : "No video link for this project in the portfolio file."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {activeId && (
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
              {lang === "ar" ? "شاهد من الموقع" : "Watch on Site"}
            </h2>
            {youtubeLinks[activeIndex] && (
              <a
                href={youtubeLinks[activeIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-[#D4AF37]"
              >
                {lang === "ar" ? "فتح على يوتيوب" : "Open on YouTube"}
                <HiOutlineArrowUpRight size={14} />
              </a>
            )}
          </div>

          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-black shadow-[0_30px_80px_-20px_rgba(212,175,55,0.25)]"
          >
            <div className="relative aspect-video w-full">
              <iframe
                title={lang === "ar" ? "مشغل الفيديو" : "Video player"}
                src={`https://www.youtube.com/embed/${activeId}?rel=0&modestbranding=1`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {youtubeIds.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {youtubeLinks.map((link, i) => {
                const id = getYouTubeId(link);
                if (!id) return null;

                return (
                  <button
                    key={link}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-all ${
                      activeIndex === i
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B0B0B]"
                        : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <HiOutlinePlay size={12} />
                    {lang === "ar" ? `حلقة ${i + 1}` : `Episode ${i + 1}`}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          {lang === "ar" ? "جميع روابط المشاهدة" : "All watch links"}
        </h3>
        {youtubeLinks.map((link, i) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-[#D4AF37]/30"
          >
            <HiOutlinePlay className="shrink-0 text-[#D4AF37]" size={22} />
            <span className="truncate text-sm text-white/70">{link}</span>
            <HiOutlineArrowUpRight className="ms-auto shrink-0 text-white/30" size={16} />
          </a>
        ))}
        {videoLinks.map((link, i) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-[#D4AF37]/30"
          >
            <HiOutlinePlay className="shrink-0 text-[#D4AF37]" size={22} />
            <span className="truncate text-sm text-white/70">{link}</span>
            <HiOutlineArrowUpRight className="ms-auto shrink-0 text-white/30" size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}
