import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/site-data";
import { ProjectDetailClient } from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title.ar} — ${project.title.en}`,
    description: `${project.description.ar} · إنتاج يوسف شاهين / بروميديا · ${project.year}`,
    openGraph: {
      title: `${project.title.ar} | Yossef Shaheen`,
      description: project.description.ar,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white">Project Not Found</h1>
          <Link href="/" className="mt-4 inline-block text-[#D4AF37]">
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
