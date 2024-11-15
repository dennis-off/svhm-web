import { createFileRoute } from "@tanstack/react-router";
import { BackToBlog, BlogLayout } from "@/components/blog";
import { VerticalBlogCard } from "@/components/blog/blog-components";
import { StrapiSEO } from "@/components/StrapiSeo";
import fetchContentType from "@/lib/strapi/fetchContentType";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetail,
  loader: ({ params: { slug } }) =>
    fetchContentType("articles", `filters[slug]=${slug}`, true),
});

function BlogDetail() {
  const article = Route.useLoaderData();

  return (
    <section className="container flex min-h-screen flex-col py-8">
      <BlogLayout article={article} />

      {article.articles.length != 0 ? (
        <div className="mt-12 pb-20">
          <h2 className="mb-10 text-2xl font-bold">More posts</h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {article.articles.map((relatedArticle: any) => (
              <VerticalBlogCard
                key={relatedArticle.slug}
                article={relatedArticle}
              />
            ))}
          </div>
        </div>
      ) : (
        <BackToBlog />
      )}

      <StrapiSEO seo={article?.seo} />
    </section>
  );
}
