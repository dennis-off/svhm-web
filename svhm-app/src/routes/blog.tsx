import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useDebounce } from "@uidotdev/usehooks";
import { Loader2 } from "lucide-react";
import { getArticles, getBlogPage } from "@/api/queries";
import { components } from "@/api/strapi";
import { BlogPostRow, RecentBlogCard } from "@/components/Blog";
import { GeneralError } from "@/components/ErrorComponents";
import { StrapiSEO } from "@/components/StrapiSeo";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import { Spinner } from "@/components/ui/spinner";
import { extractWords } from "@/lib/utils";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  const [search, setSearch] = React.useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    setArticles([]);
    setPage(0);
    setLoading(false);
    setHasMore(true);
  }, [debouncedSearchTerm]);

  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [articles, setArticles] = React.useState<
    components["schemas"]["Article"][]
  >([]);

  const next = async () => {
    setLoading(true);

    const limit = 2;

    const data = await getArticles(debouncedSearchTerm, page * limit, limit);

    const articles = data?.data || [];
    const total = data?.meta?.pagination?.total || 0;

    setArticles((prev) => [...prev, ...(articles || [])]);
    setPage((prev) => prev + 1);

    // Usually your response will tell you if there is no more data.
    if (page * limit + articles.length >= total) {
      setHasMore(false);
    }
    setLoading(false);
  };

  const {
    isError: recentIsError,
    isPending: recentIsPending,
    data: recent,
  } = useQuery({
    queryKey: ["getArticles"],
    queryFn: () => getArticles("", 0, 1),
  });

  const {
    isError: pageIsError,
    isPending: pageIsPending,
    data: blogPage,
  } = useQuery({
    queryKey: ["getBlog"],
    queryFn: () => getBlogPage(),
  });

  if (recentIsError || pageIsError) {
    return <GeneralError />;
  }

  if (recentIsPending || pageIsPending) {
    return (
      <div className="min-h-screen">
        <section className="container py-8 lg:py-32">
          <Spinner size="large" />
        </section>
      </div>
    );
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    blogPage?.section.heading
  );

  return (
    <section className="container py-8 lg:py-32">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
          {firstWord}{" "}
        </span>
        {middleWords.join(" ")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {lastWord}
        </span>
      </h2>

      <div className="gap-8">
        <p className="mb-8 mt-4 text-xl text-muted-foreground lg:text-start">
          {blogPage?.section.sub_heading}
        </p>

        {recent?.data
          ?.slice(0, 1)
          .map((article) => (
            <RecentBlogCard article={article} key={article?.id} />
          ))}
      </div>

      <div className="w-full py-20">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-2xl font-bold">Weitere Beiträge</p>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Suche Beiträge"
            className="min-w-full rounded-md border-none bg-neutral-200 p-2 text-sm outline-none focus:outline-none focus:ring-0 dark:bg-neutral-800 sm:min-w-96"
          />
        </div>
        <div className="flex flex-col divide-y py-12">
          {articles.length === 0 ? (
            <p className="p-4 text-center">No results found</p>
          ) : (
            articles.map((article) => (
              <BlogPostRow article={article} key={article?.id} />
            ))
          )}
        </div>
        <InfiniteScroll
          hasMore={hasMore}
          isLoading={loading}
          next={next}
          threshold={1}
        >
          {hasMore && <Loader2 className="my-4 h-8 w-8 animate-spin" />}
        </InfiniteScroll>
      </div>

      <StrapiSEO seo={blogPage?.seo} />
    </section>
  );
}
