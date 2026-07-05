import { projects } from "@/data/site-data";
import { sortProjectsByWatchLinks } from "@/lib/utils";
import { ProjectsPageClient } from "./ProjectsPageClient";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "أعمال يوسف شاهين",
  description:
    "محفظة أعمال يوسف شاهين — برامج وثائقية وتلفزيونية: رحلتي، مآذن الشارقة، صُنع في الشارقة، سفاري الشارقة، أرض الخير وأكثر. إنتاج بروميديا لهيئة الشارقة للإذاعة والتلفزيون.",
  openGraph: {
    title: "أعمال يوسف شاهين | Yossef Shaheen Portfolio",
    url: `${getSiteUrl()}/projects`,
  },
  alternates: {
    canonical: `${getSiteUrl()}/projects`,
  },
};
export default function ProjectsPage() {
  return <ProjectsPageClient projects={sortProjectsByWatchLinks(projects)} />;
}
