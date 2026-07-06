import type { Metadata } from "next";
import { ProMediaCertificatesClient } from "./ProMediaCertificatesClient";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "شهادات إنجاز بروميديا",
  description:
    "شهادات إنجاز شركة بروميديا — 15 شهادة رسمية من هيئة الشارقة للإذاعة والتلفزيون لبرامج: أندية الوسطى، خيرات الوسطى، سفاري الشارقة، أرض الخير وأكثر.",
  openGraph: {
    title: "شهادات إنجاز بروميديا | PRO MEDIA",
    url: `${getSiteUrl()}/promedia-certificates`,
  },
  alternates: {
    canonical: `${getSiteUrl()}/promedia-certificates`,
  },
};

export default function ProMediaCertificatesPage() {
  return <ProMediaCertificatesClient />;
}
