"use client";

import { youssefCertificates } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YoussefCertificatesShowcase } from "@/components/sections/YoussefCertificatesShowcase";

export function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-[#161616]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label={{ ar: "شهاداتي", en: "My Certificates" }}
          title={{
            ar: "شهادات التدريب والتقدير",
            en: "Training & Appreciation Certificates",
          }}
          subtitle={{
            ar: "اعتراف رسمي من مؤسسات وطنية وإقليمية في مجال الإعلام والإنتاج",
            en: "Official recognition from national and regional media institutions",
          }}
          align="center"
        />

        <div className="mt-12">
          <YoussefCertificatesShowcase certificates={youssefCertificates} />
        </div>
      </div>
    </section>
  );
}
