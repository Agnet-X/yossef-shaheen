"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_PORTRAIT = "/images/team/yousef-shaheen.webp";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setTimeout(() => setLoading(false), 250);
    };

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = HERO_PORTRAIT;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);

    const portrait = new window.Image();
    portrait.decoding = "sync";
    portrait.onload = finish;
    portrait.onerror = finish;
    portrait.src = HERO_PORTRAIT;

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 18 + 8, 95));
    }, 100);

    const maxWait = setTimeout(finish, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(maxWait);
      link.remove();
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B]"
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]">
                Production Studio
              </div>
              <h1 className="text-4xl font-light tracking-[0.3em] text-white md:text-6xl">
                PRO<span className="text-[#D4AF37]">MEDIA</span>
              </h1>
              <p className="mt-2 text-sm tracking-[0.2em] text-white/40">
                بروميديا للإنتاج الإعلامي
              </p>
            </motion.div>
          </div>

          <div className="w-64 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <motion.span
            className="mt-4 font-mono text-xs text-white/30"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>

          <motion.div
            className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-white/20"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
