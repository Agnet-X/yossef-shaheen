"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { companyInfo, featuredTeamMember } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { buildWhatsAppUrl } from "@/lib/utils";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";

export function Contact() {
  const { t, lang } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappPhone = featuredTeamMember.phone ?? companyInfo.contact.phone;
    const text =
      lang === "ar"
        ? `مرحباً يوسف،\n\nالاسم: ${formState.name}\nالبريد: ${formState.email}\nالهاتف: ${formState.phone || "—"}\n\n${formState.message}\n\n— عبر موقع PRO MEDIA`
        : `Hello Yousef,\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || "—"}\n\n${formState.message}\n\n— via PRO MEDIA website`;

    window.open(buildWhatsAppUrl(whatsappPhone, text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding bg-[#111111]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "تواصل معنا", en: "Contact Us" }}
          title={{
            ar: "لنصنع معاً محتوى استثنائياً",
            en: "Let's Create Exceptional Content Together",
          }}
          subtitle={{
            ar: "يمكنكم التواصل معنا في أي وقت. نحن متواجدون لخدمتكم وتلبية احتياجاتكم وتحقيق رؤيتكم الإعلامية",
            en: "Contact us anytime. We are here to serve you and achieve your media vision",
          }}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  key: "name",
                  label: lang === "ar" ? "الاسم" : "Name",
                  type: "text",
                },
                {
                  key: "email",
                  label: lang === "ar" ? "البريد الإلكتروني" : "Email",
                  type: "email",
                },
                {
                  key: "phone",
                  label: lang === "ar" ? "الهاتف" : "Phone",
                  type: "tel",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.key !== "phone"}
                    value={formState[field.key as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, [field.key]: e.target.value }))
                    }
                    className="w-full border-b border-white/10 bg-transparent py-4 text-white outline-none transition-colors focus:border-[#D4AF37]"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {lang === "ar" ? "الرسالة" : "Message"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none border-b border-white/10 bg-transparent py-4 text-white outline-none transition-colors focus:border-[#D4AF37]"
                />
              </div>
              <MagneticButton variant="primary" type="submit">
                {lang === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
              </MagneticButton>
            </form>
          </RevealOnScroll>

          <RevealOnScroll direction="left">
            <div className="space-y-8">
              <div className="glass-panel rounded-2xl p-8">
                {[
                  {
                    icon: HiOutlineMapPin,
                    label: lang === "ar" ? "العنوان" : "Address",
                    value: t(companyInfo.contact.address),
                  },
                  {
                    icon: HiOutlinePhone,
                    label: lang === "ar" ? "واتساب يوسف شاهين" : "Yousef Shaheen WhatsApp",
                    value: featuredTeamMember.phone ?? companyInfo.contact.phone,
                  },
                  {
                    icon: HiOutlineEnvelope,
                    label: lang === "ar" ? "إيميل" : "Email",
                    value: companyInfo.contact.email,
                  },
                  {
                    icon: HiOutlineGlobeAlt,
                    label: lang === "ar" ? "الموقع" : "Website",
                    value: companyInfo.contact.website,
                  },
                ].map((item) => (
                  <div key={item.label} className="mb-6 flex gap-4 last:mb-0">
                    <item.icon className="shrink-0 text-[#D4AF37]" size={20} />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {item.label}
                      </p>
                      <p className="mt-1 text-white/80">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl">
                <iframe
                  title="PRO MEDIA Location — Dubai, UAE"
                  src="https://maps.google.com/maps?q=Dubai+UAE&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0 grayscale invert opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
