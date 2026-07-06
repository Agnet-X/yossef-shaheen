import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import imageMap from "@/data/image-map.json";
import type { Project } from "@/data/site-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : "/images/portfolio/rehleti.png";
}

export function getProjectImage(slug: string): string {
  const mapped = imageMap.projects[slug as keyof typeof imageMap.projects];
  const path = mapped ?? `/images/portfolio/${slug}.png`;
  return path.replace(/\.png$/i, ".webp");
}

export function getProjectLink(project: Project): string {
  return `/projects/${project.slug}`;
}

export function isExternalProjectLink(project: Project): boolean {
  return Boolean(project.youtubeLinks?.length || project.videoLinks?.length);
}

export function getProjectLinkCount(project: Project): number {
  return (project.youtubeLinks?.length ?? 0) + (project.videoLinks?.length ?? 0);
}

export function sortProjectsByWatchLinks<T extends Project>(list: T[]): T[] {
  const yearValue = (year: number | string) =>
    typeof year === "number" ? year : parseInt(String(year), 10) || 0;

  return [...list].sort((a, b) => {
    const diff = getProjectLinkCount(b) - getProjectLinkCount(a);
    if (diff !== 0) return diff;
    return yearValue(b.year) - yearValue(a.year);
  });
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const DISPLAY_PHONE = "+971 55 626 7779";

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("971") && digits.length >= 12) {
    return `+971 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  if (digits.length >= 10) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return phone;
}

export function getCertificateImage(id: string): string | undefined {
  const mapped = imageMap.certificates[id as keyof typeof imageMap.certificates];
  return mapped?.replace(/\.png$/i, ".webp");
}

export const btsImages: string[] = imageMap.bts;
