"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/components/providers/SmoothScroll";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const scrollNavItems = [
  { id: "about", ar: "من نحن", en: "About" },
  { id: "certificates", ar: "شهاداتي", en: "Certificates" },
  { id: "vision", ar: "رؤيتنا", en: "Vision" },
  { id: "services", ar: "خدماتنا", en: "Services" },
  { id: "projects", ar: "أعمالنا", en: "Projects" },
  { id: "equipment", ar: "معداتنا", en: "Equipment" },
  { id: "team", ar: "فريقنا", en: "Team" },
  { id: "contact", ar: "تواصل", en: "Contact" },
];

export function Navbar() {
  const { lang, toggleLang, t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useScrollTo();

  const scrollTo = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-700",
          scrolled
            ? "glass-panel border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="group text-left"
          >
            <span className="block text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
              {lang === "ar" ? "بروميديا" : "Pro Media"}
            </span>
            <span className="text-xl font-light tracking-[0.2em] text-white transition-colors group-hover:text-[#D4AF37]">
              PRO<span className="text-[#D4AF37]">MEDIA</span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {scrollNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#D4AF37]"
              >
                {t({ ar: item.ar, en: item.en })}
              </button>
            ))}
            <Link
              href="/promedia-certificates"
              className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80 transition-colors hover:text-[#D4AF37]"
            >
              {lang === "ar" ? "شهادات بروميديا" : "PRO MEDIA Certs"}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLang}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] sm:block"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="text-white lg:hidden"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt4 size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0B0B]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex justify-between">
                <span className="text-xl tracking-[0.2em] text-white">
                  PRO<span className="text-[#D4AF37]">MEDIA</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                >
                  <HiX size={28} />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6">
                {scrollNavItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="text-3xl font-light text-white/80 transition-colors hover:text-[#D4AF37]"
                  >
                    {t({ ar: item.ar, en: item.en })}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: scrollNavItems.length * 0.05 }}
                >
                  <Link
                    href="/promedia-certificates"
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-light text-[#D4AF37]/90 transition-colors hover:text-[#D4AF37]"
                  >
                    {lang === "ar" ? "شهادات بروميديا" : "PRO MEDIA Certificates"}
                  </Link>
                </motion.div>
              </nav>
              <button
                type="button"
                onClick={toggleLang}
                className="mt-auto border border-white/10 py-4 text-sm uppercase tracking-[0.2em] text-white/70"
              >
                {lang === "ar" ? "English" : "العربية"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
