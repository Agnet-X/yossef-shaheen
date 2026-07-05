import { getSiteUrl, personJsonLd } from "@/lib/site-seo";

export function PersonJsonLd() {
  const schema = {
    ...personJsonLd,
    url: getSiteUrl(),
    image: `${getSiteUrl()}${personJsonLd.image}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
