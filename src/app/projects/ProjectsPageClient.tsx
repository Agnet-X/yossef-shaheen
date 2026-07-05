"use client";

import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/site-data";
import {
  getProjectImage,
  getProjectLink,
  getProjectLinkCount,
} from "@/lib/utils";
import { HiOutlineArrowLeft, HiOutlinePlay, HiOutlineArrowUpRight } from "react-icons/hi2";

export function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const { t, lang, dir } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37]"
        >
          <HiOutlineArrowLeft className={dir === "rtl" ? "rotate-180" : ""} />
          {lang === "ar" ? "الرئيسية" : "Home"}
        </Link>
        <h1 className="mb-4 text-5xl font-light text-white md:text-7xl">
          {lang === "ar" ? "جميع الأعمال" : "All Projects"}
        </h1>
        <p className="mb-16 text-white/50">
          {projects.length}{" "}
          {lang === "ar" ? "مشروع إنتاجي" : "production projects"}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = getProjectImage(project.slug);
            const link = getProjectLink(project);
            const linkCount = getProjectLinkCount(project);

            return (
              <Link
                key={project.slug}
                href={link}
                className="group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <MediaImage
                    src={image}
                    alt={t(project.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent opacity-60" />
                  {linkCount > 0 && (
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#D4AF37] px-3 py-2 text-[#0B0B0B]">
                      <HiOutlinePlay size={16} />
                      <span className="text-[10px] font-medium">{linkCount}</span>
                    </div>
                  )}
                </div>
                <div className="glass-panel p-6">
                  <h2 className="text-xl text-white group-hover:text-[#D4AF37]">
                    {t(project.title)}
                  </h2>
                  <p className="mt-1 text-sm text-white/40">{t(project.client)}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-[#D4AF37]">
                    {linkCount > 0
                      ? lang === "ar"
                        ? `شاهد المشروع (${linkCount})`
                        : `Watch project (${linkCount})`
                      : lang === "ar"
                        ? "عرض المشروع"
                        : "View project"}
                    <HiOutlineArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
