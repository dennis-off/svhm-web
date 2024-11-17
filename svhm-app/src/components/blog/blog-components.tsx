import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import FuzzySearch from "fuzzy-search";
import { LuArrowLeft } from "react-icons/lu";
import { components } from "@/api/strapi";
import { Card, CardTitle } from "@/components/ui/card";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { truncate } from "@/lib/utils";

export function BackToBlog() {
  return (
    <div className="flex items-center justify-between px-2 py-8">
      <Link
        href="/blog"
        className="flex items-center space-x-2 border-b-2 border-transparent transition duration-200 hover:border-primary"
      >
        <LuArrowLeft className="h-6 w-6 text-foreground" />
        <span className="mb-[0.2rem] text-lg text-foreground">zurück</span>
      </Link>
    </div>
  );
}
export function BlogLayout({
  article,
}: {
  article: components["schemas"]["Article"];
}) {
  return (
    <>
      <BackToBlog />

      <div className="mx-auto w-full">
        {article.image ? (
          <img
            src={strapiImage(article.image.url)}
            height="800"
            width="800"
            className="aspect-square h-40 w-full rounded-3xl object-cover [mask-image:radial-gradient(circle,white,transparent)] md:h-96"
            alt={article.title}
          />
        ) : (
          <div className="aspect-squace shadow-derek flex h-40 w-full items-center justify-center rounded-3xl md:h-96">
            {/* <Logo /> */}
          </div>
        )}
      </div>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="pb-8 pt-8">
            {/*<div className="mb-4 flex flex-wrap gap-4">
              {article.categories?.map((category, idx) => (
                <p
                  key={`category-${idx}`}
                  className="rounded-full bg-neutral-800 px-4 py-2 text-xs font-bold capitalize text-muted dark:bg-neutral-200"
                >
                  {category.name}
                </p>
              ))}
            </div>*/}
            <header className="flex flex-col">
              <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
                {article.title}
              </h1>
            </header>
            <div className="prose prose-sm prose-invert mt-8">
              <BlocksRenderer
                content={article?.content as any}
                blocks={{
                  // You can use the default components to set class names...
                  paragraph: ({ children }) => <p className="">{children}</p>,
                  // ...or point to a design system
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return (
                          <h1 className="mt-4 scroll-m-20 pb-0 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            {children}
                          </h1>
                        );
                      case 2:
                        return (
                          <h2 className="mt-4 scroll-m-20 pb-0 text-3xl font-semibold tracking-tight first:mt-0">
                            {children}
                          </h2>
                        );
                      case 3:
                        return (
                          <h3 className="mt-4 scroll-m-20 pb-0 text-2xl font-semibold tracking-tight">
                            {children}
                          </h3>
                        );
                      case 4:
                        return (
                          <h4 className="mt-2 scroll-m-20 pb-0 text-xl font-semibold tracking-tight">
                            {children}
                          </h4>
                        );
                      case 5:
                        return (
                          <h3 className="text-l mt-2 scroll-m-20 pb-0 font-semibold tracking-tight">
                            {children}
                          </h3>
                        );
                      case 6:
                        return (
                          <h4 className="mt-2 scroll-m-20 pb-0 text-base font-normal tracking-tight">
                            {children}
                          </h4>
                        );
                      default:
                        return (
                          <h1 className="mt-4 scroll-m-20 pb-0 text-4xl tracking-tight lg:text-5xl">
                            {children}
                          </h1>
                        );
                    }
                  },
                  // For links, you may want to use the component from your router or framework
                  link: ({ children, url }) => <Link to={url}>{children}</Link>,
                  image: ({ image }) => (
                    <div className="flex items-center justify-center">
                      {" "}
                      <img
                        className="rounded-lg border bg-card text-card-foreground shadow-sm"
                        src={image.url}
                      />
                    </div>
                  ),
                }}
                modifiers={{
                  bold: ({ children }) => <strong>{children}</strong>,
                  italic: ({ children }) => (
                    <span className="italic">{children}</span>
                  ),
                }}
              />
            </div>
            <div className="mt-6 flex items-center space-x-2">
              {/* <Image
            src={article.authorAvatar}
            alt={article.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          /> */}
              {/* <p className="text-sm font-normal text-muted">{article.author}</p> */}
              <div className="h-1 w-1 rounded-full bg-red-500"></div>
              <p className="max-w-xl text-sm text-muted-foreground transition duration-200">
                {format(
                  new Date(article?.publishedAt || "Undefined"),
                  "MMMM dd, yyyy"
                )}
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export function RecentBlogCard({
  article,
}: {
  article: components["schemas"]["Article"];
}) {
  return (
    <Link
      to="/blogs/$slug"
      params={{
        slug: article?.slug || "Undefined",
      }}
      key={article.slug}
      className="flex justify-center"
    >
      <Card
        key="title"
        className="grid-col-1 group grid max-w-md overflow-hidden bg-muted/50 lg:max-w-full lg:grid-cols-[1fr,2fr]"
      >
        <div className="relative overflow-hidden">
          <img
            className="max-h-72 object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
            height="448"
            width="448"
            src={strapiImage(article?.image?.url)}
            alt=""
          />
        </div>

        <div className="grid h-full grid-rows-[auto,1fr,auto] space-y-4 p-4">
          <CardTitle>{article.title}</CardTitle>
          <div className="font-normal text-muted-foreground">
            {" "}
            {article.description}
          </div>
          <BlogDate article={article} />
        </div>
      </Card>
    </Link>
  );
}

export function BlogPostRows({
  articles,
}: {
  articles: components["schemas"]["Article"][];
}) {
  const [search, setSearch] = useState("");

  const searcher = new FuzzySearch(articles, ["title"], {
    caseSensitive: false,
  });

  const [results, setResults] = useState(articles);
  useEffect(() => {
    const results = searcher.search(search);
    setResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="w-full py-20">
      <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-2xl font-bold">More Posts</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles"
          className="min-w-full rounded-md border-none bg-neutral-200 p-2 text-sm outline-none focus:outline-none focus:ring-0 dark:bg-neutral-800 sm:min-w-96"
        />
      </div>

      <div className="divide-y">
        {results.length === 0 ? (
          <p className="p-4 text-center">No results found</p>
        ) : (
          results.map((article) => (
            <BlogPostRow article={article} key={article?.id} />
          ))
        )}
      </div>
    </div>
  );
}

export function BlogPostRow({
  article,
}: {
  article: components["schemas"]["Article"];
}) {
  return (
    <Link
      to="/blogs/$slug"
      params={{
        slug: article?.slug || "Undefined",
      }}
      className="group flex flex-row py-4"
    >
      <div
      className="relative flex flex-grow flex-col p-2 sm:flex-row overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${strapiImage(article.image.url)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-neutral-100/60 backdrop-blur-lg dark:bg-gray-800/60"></div>

        <div className="z-10 mx-2 mt-2 flex overflow-hidden">
          <img
            className="h-32 w-32 rounded-lg object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
            src={strapiImage(article.image.url)}
            alt=""
          />
        </div>

        <div className="z-10 grid grid-rows-[auto,1fr,auto] p-2">
          <div className="flex flex-row">
            <p className="w-auto border-b-2 border-transparent text-lg font-medium text-foreground transition duration-200 group-hover:border-primary">
              {article.title}
            </p>
          </div>
          <p className="mt-2 max-w-xl text-sm text-foreground transition duration-200">
            {truncate(article?.description || "Undefined", 80)}
          </p>

          <BlogDate article={article} />
        </div>
      </div>
    </Link>
  );
}
export function VerticalBlogCard({
  article,
}: {
  article: components["schemas"]["Article"];
}) {
  return (
    <Link
      to="/blogs/$slug"
      params={{
        slug: article?.slug || "Undefined",
      }}
      key={article.slug}
      className="flex justify-center"
    >
      <Card
        key="title"
        className="grid-col-1 group grid max-w-md overflow-hidden bg-muted/50"
      >
        <div className="relative overflow-hidden">
          <img
            className="max-h-72 object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
            height="448"
            width="448"
            src={strapiImage(article.image.url)}
            alt=""
          />
        </div>

        <div className="grid h-full grid-rows-[auto,1fr,auto] space-y-4 p-4">
          <CardTitle>{article.title}</CardTitle>
          <div className="font-normal text-muted-foreground">
            {" "}
            {article.description}
          </div>
          <BlogDate article={article} />
        </div>
      </Card>
    </Link>
  );
}

export function BlogDate({
  article,
}: {
  article: components["schemas"]["Article"];
}) {
  return (
    <div className="mt-6 flex items-center space-x-2">
      {/* <Image
            src={article.authorAvatar}
            alt={article.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          /> */}
      {/* <p className="text-sm font-normal text-muted">{article.author}</p> */}
      <div className="h-1 w-1 rounded-full bg-red-500"></div>
      <p className="max-w-xl text-sm text-muted-foreground transition duration-200">
        {format(new Date(article?.publishedAt || "Undefined"), "MMMM dd, yyyy")}
      </p>
    </div>
  );
}
