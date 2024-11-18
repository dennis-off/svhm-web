import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getArticle } from "@/api/queries";
import { BackToBlog, BlogLayout, VerticalBlogCard } from "@/components/blog";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { StrapiSEO } from "@/components/StrapiSeo";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetail,
});

function BlogDetail() {
  const slug = Route.useParams().slug;

  const { isError, isPending, data } = useQuery({
    queryKey: ["getArticles", , { slug }],
    queryFn: () => getArticle(slug),
  });

  if (isError) {
    return <GeneralError />;
  }

  if (isPending) {
    return <IsLoading />;
  }

  const article = data;

  if (!article) {
    return <GeneralError />;
  }

  return (
    <section className="container flex min-h-screen flex-col py-8">
      <BlogLayout article={article} />

      {article.articles?.length != 0 ? (
        <div className="mt-12 pb-20">
          <h2 className="mb-10 text-2xl font-bold">More posts</h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {article.articles?.map((relatedArticle: any) => (
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
