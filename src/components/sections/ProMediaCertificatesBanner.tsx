"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { proMediaCertificates } from "@/data/site-data";
import { MediaImage } from "@/components/ui/MediaImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export function ProMediaCertificatesBanner() {
  const { lang } = useLanguage();
  const preview = proMediaCertificates.slice(0, 3);

  return (
    <section className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <RevealOnScroll>
          <Link
            href="/promedia-certificates"
            className="group relative block overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#161616] via-[#111111] to-[#0B0B0B] p-8 md:p-12 lg:p-16 transition-all hover:border-[#D4AF37]/50"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl transition-all group-hover:bg-[#D4AF37]/10" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  PRO MEDIA
                </span>
                <h2 className="text-3xl font-light text-white md:text-5xl">
                  {lang === "ar"
                    ? "شهادات إنجاز بروميديا"
                    : "PRO MEDIA Achievement Certificates"}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/50">
                  {lang === "ar"
                    ? `${proMediaCertificates.length} شهادة رسمية من هيئة الشارقة للإذاعة والتلفزيون — اضغط لعرض الكل`
                    : `${proMediaCertificates.length} official certificates from Sharjah Broadcasting — tap to view all`}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  {lang === "ar" ? "عرض جميع الشهادات" : "View All Certificates"}
                  <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {preview.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-lg"
                  >
                    {cert.image && (
                      <MediaImage
                        src={cert.image}
                        alt=""
                        fill
                        className="object-contain p-2"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
