"use client";

import { useLanguage } from "@/context/LanguageContext";
import { companyInfo } from "@/data/site-data";

export function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0B0B0B] px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-start">
            <span className="text-2xl font-light tracking-[0.2em] text-white">
              PRO<span className="text-[#D4AF37]">MEDIA</span>
            </span>
            <p className="mt-2 text-sm text-white/40">
              {t(companyInfo.name)}
            </p>
          </div>
          <div className="text-center text-sm text-white/40 md:text-end">
            <p>{companyInfo.contact.phone}</p>
            <p>{companyInfo.contact.email}</p>
            <p className="mt-1">{companyInfo.contact.website}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-[11px] uppercase tracking-[0.2em] text-white/30">
          © {year} PRO MEDIA —{" "}
          {lang === "ar"
            ? "جميع الحقوق محفوظة · يوسف شاهين"
            : "All Rights Reserved · Yousef Shaheen"}
        </div>
      </div>
    </footer>
  );
}
