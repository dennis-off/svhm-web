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
          ogImage: "/src/assets/svhm-landing-page-light.png",
          ogImageAlt: "landing page",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardImage: "/src/assets/svhm-landing-page-light.png",
          summaryCardImageAlt: "landing page",
          summaryCardSiteUsername: "",
        },
      }}
    />
  );
}
