import { SuperSEO } from "react-super-seo";
import { components } from "@/api/strapi";

export function StrapiSEO({
  seo,
}: {
  seo: components["schemas"]["SharedSeoComponent"] | undefined;
}) {
  if (!seo) return null;

  return (
    <SuperSEO
      title={seo.metaTitle}
      description={seo.metaDescription}
      lang="de"
      openGraph={{
        ogImage: {
          ogImage: "http://placekitten.com/1200/630",
          ogImageAlt: "Kittens",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardImage: "http://placekitten.com/1200/630",
          summaryCardImageAlt: "Kittens",
          summaryCardSiteUsername: "justinmahar",
        },
      }}
    />
  );
}
