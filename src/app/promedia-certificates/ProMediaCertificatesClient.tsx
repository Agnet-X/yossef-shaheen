"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";
import { useLanguage } from "@/context/LanguageContext";
import { proMediaCertificates } from "@/data/site-data";
import { HiOutlineArrowLeft, HiX } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export function ProMediaCertificatesClient() {
  const { t, lang, dir } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#D4AF37]"
        >
          <HiOutlineArrowLeft className={dir === "rtl" ? "rotate-180" : ""} />
          {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="mb-4 inline-block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]">
            PRO MEDIA
          </span>
          <h1 className="text-4xl font-light text-white md:text-6xl">
            {lang === "ar" ? "شهادات إنجاز بروميديا" : "PRO MEDIA Achievement Certificates"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            {lang === "ar"
              ? "شهادات تقدير وإنجاز رسمية من هيئة الشارقة للإذاعة والتلفزيون — 15 شهادة لبرامج وإنتاجات بروميديا."
              : "Official achievement certificates from Sharjah Broadcasting Authority — 15 certificates for PRO MEDIA programs and productions."}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proMediaCertificates.map((cert, i) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              onClick={() => cert.image && setLightbox(cert.image)}
              className="glass-panel group overflow-hidden rounded-2xl text-left transition-all hover:border-[#D4AF37]/40"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                {cert.image && (
                  <MediaImage
                    src={cert.image}
                    alt={t(cert.title)}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#0B0B0B]/40 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#D4AF37]">
                    {lang === "ar" ? "عرض" : "View"}
                    <HiOutlineArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="border-t border-white/5 p-5">
                <p className="text-sm leading-relaxed text-white/85">{t(cert.title)}</p>
                <p className="mt-2 text-xs text-[#D4AF37]">{t(cert.issuer)}</p>
                {cert.year && (
                  <p className="mt-1 text-xs text-white/45">{cert.year}</p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0B0B]/95 p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-8 top-8 text-white"
              onClick={() => setLightbox(null)}
            >
              <HiX size={32} />
            </button>
            <MediaImage
              src={lightbox}
              alt="Certificate"
              className="max-h-[90vh] w-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
