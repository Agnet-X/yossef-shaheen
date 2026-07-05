import type { Metadata } from "next";
import { YousefProfileClient } from "./YousefProfileClient";
import { getSiteUrl } from "@/lib/site-seo";

const profileDescription =
  "الملف الكامل ليوسف شاهين: مخرج تلفزيوني ومونتير ومدير تصوير. خبرة 500+ حلقة و1000+ فيديو. وزارة شؤون مجلس الوزراء، رحلتي، مآذن الشارقة، سفاري الشارقة. شهادة كانون للإضاءة وتقدير ملتقى المبادرات الإنسانية دبي 2019.";

export const metadata: Metadata = {
  title: "الملف الكامل — يوسف شاهين",
  description: profileDescription,
  openGraph: {
    title: "يوسف شاهين — الملف الكامل | Yossef Shaheen",
    description: profileDescription,
    url: `${getSiteUrl()}/yousef-shaheen`,
  },
  alternates: {
    canonical: `${getSiteUrl()}/yousef-shaheen`,
  },
};

export default function YousefProfilePage() {
  return <YousefProfileClient />;
}
