import React from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useDebounce } from "@uidotdev/usehooks";
import { getArticles, getBlogPage } from "@/api/queries";
import { components } from "@/api/strapi";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { StrapiSEO } from "@/components/StrapiSeo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { BlogPostRow, RecentBlogCard } from "@/features/Blog";
import { extractWords } from "@/lib/utils";

export const Route = createLazyFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  const [search, setSearch] = React.useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  const fetchArticles = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<components["schemas"]["ArticleListResponse"]> => {
    const res = await getArticles(debouncedSearchTerm, pageParam * 2, 2);

    if (!res) throw "";

    return res;
  };

  const {
    data: articles,
    error: articlesError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["GetArticles", debouncedSearchTerm],
    queryFn: fetchArticles,
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => {
      if (
        (lastPage.meta?.pagination.start + 1) * 2 <=
        lastPage.meta?.pagination.total
      )
        return lastPage.meta?.pagination.start + 1;
      else {
        return null;
      }
    },
  });

  const {
    isError: pageIsError,
    isPending: pageIsPending,
    data: blogPage,
  } = useQuery({
    queryKey: ["getBlog"],
    queryFn: () => getBlogPage(),
  });

  if (pageIsError || articlesError) {
    return <GeneralError />;
  }

  if (pageIsPending || !articles || articles.pages.length === 0) {
    return <IsLoading />;
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    blogPage?.section.heading
  );

  const recent = articles.pages[0];

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
        <div className="flex flex-col gap-4 py-12">
          <>
            {articles.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group?.data?.map((article) => (
                  <BlogPostRow article={article} key={article?.id} />
                ))}
              </React.Fragment>
            ))}
            <div className="mx-auto flex flex-col justify-center gap-2">
              <Button
                disabled={isFetchingNextPage || isFetching || !hasNextPage}
                onClick={() => fetchNextPage()}
                className={`w-48 text-[17px] ${buttonVariants({
                  variant: "muted",
                })}`}
              >
                {isFetchingNextPage ? (
                  <Spinner />
                ) : hasNextPage ? (
                  "Mehr Beiträge laden"
                ) : (
                  "Alle Beiträge geladen"
                )}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <p>{`${articles.pages.reduce((res, { data }) => res + (data ? data?.length : 0), 0)} von ${recent.meta?.pagination?.total}`}</p>
              </div>
            </div>
          </>
        </div>
      </div>

      <StrapiSEO seo={blogPage?.seo} />
    </section>
  );
}
