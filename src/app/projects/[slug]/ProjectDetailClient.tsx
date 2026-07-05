"use client";

import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/site-data";
import { ProjectWatchPlayer } from "@/components/projects/ProjectWatchPlayer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getProjectImage, getProjectLinkCount } from "@/lib/utils";
import { HiOutlineArrowLeft, HiOutlinePlay } from "react-icons/hi2";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const { t, lang, dir } = useLanguage();
  const heroImage = getProjectImage(project.slug);
  const linkCount = getProjectLinkCount(project);

  return (
    <div className="min-h-screen pt-24">
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <MediaImage
          src={heroImage}
          alt={t(project.title)}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#D4AF37]"
            >
              <HiOutlineArrowLeft className={dir === "rtl" ? "rotate-180" : ""} />
              {lang === "ar" ? "العودة للأعمال" : "Back to Projects"}
            </Link>
            <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]">
              {project.year}
              {project.yearEnd ? ` — ${project.yearEnd}` : ""}
            </span>
            <h1 className="text-4xl font-light text-white md:text-6xl lg:text-7xl">
              {t(project.title)}
            </h1>
            <p className="mt-4 text-lg text-white/50">{t(project.client)}</p>
            {linkCount > 0 && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-[#D4AF37]">
                <HiOutlinePlay size={16} />
                {lang === "ar"
                  ? `${linkCount} ${linkCount === 1 ? "رابط مشاهدة" : "روابط مشاهدة"}`
                  : `${linkCount} watch ${linkCount === 1 ? "link" : "links"}`}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectWatchPlayer project={project} />

            <p className="mt-12 text-xl leading-relaxed text-white/70">
              {t(project.description)}
            </p>
          </div>

          <div className="space-y-6">
            {(
              [
                project.episodes
                  ? {
                      label: lang === "ar" ? "الحلقات" : "Episodes",
                      value: String(project.episodes),
                    }
                  : null,
                project.seasons
                  ? {
                      label: lang === "ar" ? "المواسم" : "Seasons",
                      value: String(project.seasons),
                    }
                  : null,
                project.episodeDuration
                  ? {
                      label: lang === "ar" ? "مدة الحلقة" : "Episode Duration",
                      value: t(project.episodeDuration),
                    }
                  : null,
                project.broadcastChannel
                  ? {
                      label: lang === "ar" ? "قناة البث" : "Broadcast",
                      value: t(project.broadcastChannel),
                    }
                  : null,
                project.producedBy
                  ? {
                      label: lang === "ar" ? "الإنتاج" : "Produced By",
                      value: t(project.producedBy),
                    }
                  : null,
              ] as const
            )
              .filter((item): item is { label: string; value: string } => item !== null)
              .map((item) => (
                <div key={item.label} className="glass-panel rounded-xl p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg text-white">{item.value}</p>
                </div>
              ))}

            <MagneticButton href="/#contact" variant="primary" className="w-full">
              {lang === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
