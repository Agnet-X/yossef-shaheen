"use client";

import { useCallback, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { clients } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaImage } from "@/components/ui/MediaImage";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export function Clients() {
  const { t, lang, dir } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const scrollByAmount = useCallback((direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.max(track.clientWidth * 0.7, 320);
    const delta = direction === "next" ? amount : -amount;
    track.scrollBy({ left: dir === "rtl" ? -delta : delta, behavior: "smooth" });
  }, [dir]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragState.current = {
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    const walk = event.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    trackRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <section id="clients" className="section-padding overflow-hidden bg-[#111111]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "عملاؤنا", en: "Our Clients" }}
          title={{
            ar: "شركاؤنا وثقة المؤسسات",
            en: "Our Partners & Institutional Trust",
          }}
          subtitle={{
            ar: "نؤمن بأن عملاءنا هم الروح والدافع وراء كل ما نقوم به",
            en: "We believe our clients are the soul and driving force behind everything we do",
          }}
          align="center"
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount("prev")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label={lang === "ar" ? "تحريك لليسار" : "Scroll left"}
          >
            <HiChevronLeft size={22} />
          </button>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            {lang === "ar" ? "اسحب أو استخدم الأسهم" : "Drag or use arrows"}
          </span>
          <button
            type="button"
            onClick={() => scrollByAmount("next")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label={lang === "ar" ? "تحريك لليمين" : "Scroll right"}
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#111111] to-transparent" />

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`flex gap-5 overflow-x-auto px-6 pb-4 pt-2 scrollbar-hide ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="glass-panel flex w-[220px] shrink-0 flex-col items-center rounded-2xl p-5 sm:w-[240px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative mb-4 flex h-24 w-full items-center justify-center rounded-xl bg-white/95 p-3">
                {client.logo ? (
                  <MediaImage
                    src={client.logo}
                    alt={t(client.name)}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-[10px] uppercase tracking-wider text-[#0B0B0B]/60">
                    {t(client.name)}
                  </span>
                )}
              </div>
              <p className="text-center text-xs leading-relaxed text-white/70">
                {t(client.name)}
              </p>
              {client.note && (
                <p className="mt-1 text-[10px] text-[#D4AF37]">{t(client.note)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
