import type { Metadata } from "next";

export const SITE_NAME = "Yossef Shaheen";
export const SITE_NAME_AR = "يوسف شاهين";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://yossef-shaheen.vercel.app"
  );
}

export const defaultTitle =
  "يوسف شاهين | Yossef Shaheen — مخرج تلفزيوني · منتج تنفيذي · الإمارات";

export const defaultDescription =
  "يوسف محمد كامل شاهين — مخرج تلفزيوني، مونتير، مدير تصوير ومنتج تنفيذي في الإمارات. شارك في 500+ حلقة تلفزيونية وأنتج 1000+ فيديو. عمل بوزارة شؤون مجلس الوزراء (2022–2024) وإذاعة الشارقة عبر بروميديا. شهادات: دورة كانون للإضاءة، تقدير ملتقى المبادرات الإنسانية دبي.";

export const siteKeywords = [
  "Yossef Shaheen",
  "Yousef Shaheen",
  "يوسف شاهين",
  "مخرج تلفزيوني الإمارات",
  "منتج تنفيذي",
  "مدير تصوير",
  "مونتير",
  "PRO MEDIA",
  "بروميديا",
  "إذاعة الشارقة",
  "وزارة شؤون مجلس الوزراء",
  "TV director UAE",
  "Executive Producer Dubai",
  "Sharjah Broadcasting",
  "Canon portrait lighting certificate",
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yousef M K Shaheen",
  alternateName: ["Yossef Shaheen", "يوسف شاهين", "يوسف محمد كامل شاهين"],
  jobTitle: [
    "Executive Producer",
    "TV Director",
    "Video Editor",
    "Director of Photography",
  ],
  description: defaultDescription,
  nationality: "Palestinian",
  knowsAbout: [
    "Television production",
    "Documentary filmmaking",
    "Video editing",
    "Cinematography",
    "Government media coverage",
    "Social media video production",
  ],
  award: [
    "Canon Portrait Lighting Course — Mohammed bin Rashid Foundation for SME Development (2021)",
    "Certificate of Appreciation — Humanitarian Initiatives Forum Dubai (2019)",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Business Administration Diploma",
  },
  worksFor: {
    "@type": "Organization",
    name: "PRO MEDIA",
    alternateName: "بروميديا",
  },
  workLocation: {
    "@type": "Place",
    name: "United Arab Emirates",
  },
  telephone: "+971556267779",
  sameAs: [
    "https://www.instagram.com/yousefshaheen",
    "https://www.instagram.com/yousefsh1",
  ],
  image: "/images/team/yousef-shaheen.webp",
};

export function createSiteMetadata(overrides?: Metadata): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: defaultDescription,
    keywords: siteKeywords,
    authors: [{ name: "Yousef M K Shaheen", url: siteUrl }],
    creator: "Yousef M K Shaheen",
    publisher: SITE_NAME,
    applicationName: SITE_NAME,
    category: "media production",
    openGraph: {
      type: "website",
      locale: "ar_AE",
      alternateLocale: ["en_US"],
      siteName: SITE_NAME,
      title: defaultTitle,
      description: defaultDescription,
      url: siteUrl,
      images: [
        {
          url: "/images/team/yousef-shaheen.webp",
          width: 800,
          height: 1067,
          alt: "Yousef M K Shaheen — Executive Producer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/images/team/yousef-shaheen.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
    ...overrides,
  };
}
