import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  getDownloads,
  getExternalLinks,
  getProtocols,
  getResourcesPage,
} from "@/api/queries";
import { strapiDocument, strapiImage } from "@/api/strapiImage";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { Button, buttonVariants } from "@/components/ui/button";
import { extractWords, truncate } from "@/lib/utils";
import { Cta } from "@/sections/Cta";

const handleNavigation = (url: string) => {
  console.log(url);
  if (url.startsWith("http") || url.startsWith("https")) {
    // Externe Navigation
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export const Route = createLazyFileRoute("/resources")({
  component: Resources,
});

function Resources() {
  // get all data
  const { isError, isPending, data } = useQuery({
    queryKey: ["getAllData"],
    queryFn: async () => {
      const [protocols, downloads, links, resourcesPage] = await Promise.all([
        getProtocols(),
        getDownloads(),
        getExternalLinks(),
        getResourcesPage(),
      ]);

      return { protocols, downloads, links, resourcesPage };
    },
  });

  if (isError) {
    return <GeneralError />;
  }

  if (isPending) {
    return <IsLoading />;
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    data.resourcesPage?.section.heading
  );

  return (
    <div className="min-h-screen">
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
          <p className="mb-8 mt-4 text-center text-xl text-muted-foreground lg:text-start">
            {data.resourcesPage?.section.sub_heading}
          </p>

          <h2 className="mt-12 text-center text-3xl font-bold lg:text-4xl">
            Links
          </h2>

          <div className="flex flex-col divide-y">
            {data.links?.map((link) => (
              <a
                href={link.link.URL}
                target="_blank"
                className="group flex flex-row py-4"
              >
                <div
                  className="relative flex flex-grow flex-col overflow-hidden rounded-lg p-2 sm:flex-row"
                  style={{
                    backgroundImage: `url(${strapiImage(link.preview.url)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-neutral-100/60 backdrop-blur-lg dark:bg-gray-800/60"></div>

                  <div className="z-10 mt-2 flex overflow-hidden rounded-lg sm:mx-2">
                    <img
                      className="h-32 w-auto object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                      src={strapiImage(link.preview.url)}
                      alt=""
                    />
                  </div>

                  <div className="z-10 grid grid-rows-[auto,1fr,auto] p-2">
                    <div className="flex flex-row">
                      <p className="w-auto border-b-2 border-transparent text-lg font-medium text-foreground transition duration-200 group-hover:border-primary">
                        {link.name}
                      </p>
                    </div>
                    <p className="mt-2 max-w-xl text-sm text-foreground transition duration-200">
                      {truncate(link?.description || "Undefined", 80)}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <h2 className="mt-12 text-center text-3xl font-bold lg:text-4xl">
            Downloads
          </h2>

          <div className="flex flex-col divide-y">
            {data.downloads?.map((download) => (
              <div className="flex flex-col gap-2 p-8 md:flex-row md:p-4">
                <div className="flex flex-grow flex-col items-start justify-center gap-4 md:justify-start">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {download.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {download.description}
                  </p>
                </div>
                <div className="flex flex-grow items-center justify-center md:flex-none">
                  <Button
                    onClick={() =>
                      handleNavigation(strapiDocument(download.file?.url))
                    }
                    className={`w-full text-[17px] md:w-auto ${buttonVariants({
                      variant: "muted",
                    })}`}
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-center text-3xl font-bold lg:text-4xl">
            Protokolle
          </h2>

          <div className="flex flex-col divide-y">
            {data.protocols?.map((protocol) => (
              <div className="flex flex-col gap-4 p-8 md:flex-row md:p-4">
                <h3 className="flex flex-grow items-center justify-center text-2xl font-semibold leading-none tracking-tight md:flex-none md:justify-start">
                  {protocol.date}
                </h3>
                <h3 className="flex flex-grow items-center justify-center text-2xl font-semibold leading-none tracking-tight md:justify-start">
                  {protocol.name}
                </h3>

                <div className="flex flex-grow items-stretch justify-center md:flex-none">
                  <Button
                    onClick={() =>
                      handleNavigation(strapiDocument(protocol.link.URL))
                    }
                    className={`w-full text-[17px] md:w-auto ${buttonVariants({
                      variant: "muted",
                    })}`}
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.resourcesPage?.cta ? <Cta cta={data.resourcesPage.cta} /> : null}
    </div>
  );
}
