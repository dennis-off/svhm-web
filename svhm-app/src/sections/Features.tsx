import { Link } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import { VerticalBlogCard } from "@/features/Blog";
import { extractWords } from "@/lib/utils";

export function Features({
  page,
}: {
  page: components["schemas"]["DynamicZoneRelatedArticlesComponent"];
}) {
  const { firstWord, middleWords, lastWord } = extractWords(
    page?.section?.heading
  );

  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {firstWord} {middleWords}{" "}
            </span>
            {lastWord}
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground">
            {page?.section?.sub_heading}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {page.articles?.map((relatedArticle: any) => (
            <VerticalBlogCard
              key={relatedArticle.slug}
              article={relatedArticle}
            />
          ))}
        </div>

        <h3 className="mt-4 font-medium">
          Du willst noch mehr Projekte & Aktionen.{" "}
          <Link
            rel="noreferrer noopener"
            to="/blog"
            target="_self"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            Hier findest du alle Beiträge
          </Link>
        </h3>
      </div>
    </section>
  );
}
