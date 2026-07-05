"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: {
      ar: "تنفيذ البرنامج بكامل تفاصيله من خلال طاقم عمل شركة بروميديا، وتوثيقه بدقة واحتراف من خلال التصوير والإخراج والمونتاج",
      en: "Full program execution by PRO MEDIA team, documented with precision and professionalism through filming, directing, and editing",
    },
    author: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    project: { ar: "مآذن الشارقة", en: "Minarets of Sharjah" },
  },
  {
    quote: {
      ar: "حقق البرنامج نجاحاً واسعاً كأحد أكثر البرامج تنوعاً وجذباً بشرياً في إنتاجات الشركة",
      en: "The program achieved wide success as one of the most diverse and engaging programs in the company's productions",
    },
    author: {
      ar: "تلفزيون الشارقة",
      en: "Sharjah TV",
    },
    project: { ar: "رحلتي", en: "My Journey" },
  },
  {
    quote: {
      ar: "نفخر بأن نكون شريككم الموثوق والمخلص في مجال الإنتاج التلفزيوني والإعلامي",
      en: "We take pride in being your trusted and dedicated partner in television and media production",
    },
    author: {
      ar: "بروميديا للإنتاج الإعلامي",
      en: "PRO MEDIA Production",
    },
    project: { ar: "شركاء النجاح", en: "Partners in Success" },
  },
];

export function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="section-padding bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "شهادات", en: "Testimonials" }}
          title={{
            ar: "ما يقوله شركاؤنا",
            en: "What Our Partners Say",
          }}
          align="center"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.project.en}>
              <div className="glass-panel luxury-shadow flex h-full flex-col rounded-2xl p-10">
                <span className="mb-6 text-5xl text-[#D4AF37]/30">&ldquo;</span>
                <p className="flex-1 text-lg leading-relaxed text-white/70">
                  {t(item.quote)}
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-white">{t(item.author)}</p>
                  <p className="mt-1 text-sm text-[#D4AF37]">{t(item.project)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
