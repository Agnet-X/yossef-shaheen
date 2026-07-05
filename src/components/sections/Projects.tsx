"use client";

import { useState } from "react";
import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects, type ProjectCategory } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  getProjectImage,
  getProjectLink,
  getProjectLinkCount,
  sortProjectsByWatchLinks,
} from "@/lib/utils";
import { HiOutlineArrowUpRight, HiOutlinePlay } from "react-icons/hi2";

const categories: { id: ProjectCategory | "all"; ar: string; en: string }[] = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "documentary", ar: "وثائقي", en: "Documentary" },
  { id: "tv-series", ar: "مسلسلات", en: "TV Series" },
  { id: "government", ar: "حكومي", en: "Government" },
  { id: "talk-show", ar: "حواري", en: "Talk Show" },
  { id: "health", ar: "صحي", en: "Health" },
  { id: "music-video", ar: "فيديو كليب", en: "Music Video" },
  { id: "event-coverage", ar: "تغطيات", en: "Events" },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { t, lang } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const image = getProjectImage(project.slug);
  const link = getProjectLink(project);
  const linkCount = getProjectLinkCount(project);

  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <MediaImage
          src={image}
          alt={t(project.title)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
        {linkCount > 0 && (
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#D4AF37]/90 px-3 py-2 text-[#0B0B0B]">
            <HiOutlinePlay size={16} />
            <span className="text-[10px] font-medium uppercase tracking-wider">
              {linkCount}
            </span>
          </div>
        )}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center bg-[#0B0B0B]/60 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
            {linkCount > 0
              ? lang === "ar"
                ? "شاهد المشروع"
                : "Watch Project"
              : lang === "ar"
                ? "عرض المشروع"
                : "View Project"}
            <HiOutlineArrowUpRight />
          </span>
        </motion.div>
      </div>
      <div className="glass-panel border-t-0 p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
            {project.year}
            {project.yearEnd ? ` — ${project.yearEnd}` : ""}
          </span>
          {project.episodes && (
            <span className="text-[10px] text-white/40">
              {project.episodes} {lang === "ar" ? "حلقة" : "episodes"}
            </span>
          )}
        </div>
        <h3 className="text-xl text-white transition-colors group-hover:text-[#D4AF37]">
          {t(project.title)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/50">
          {t(project.client)}
        </p>
      </div>
    </>
  );

  return (
    <RevealOnScroll delay={index * 0.05}>
      <Link
        href={link}
        className="group relative block overflow-hidden rounded-2xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </Link>
    </RevealOnScroll>
  );
}

export function Projects() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const sortedProjects = sortProjectsByWatchLinks(projects);

  const filtered =
    filter === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "أعمالنا", en: "Featured Projects" }}
          title={{
            ar: "محفظة إنتاج حكومية وإعلامية",
            en: "Government & Media Production Portfolio",
          }}
        />

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                filter === cat.id
                  ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B0B0B]"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {lang === "ar" ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <RevealOnScroll>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-[#D4AF37]/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0B0B0B]"
            >
              {lang === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
              <HiOutlineArrowUpRight />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
