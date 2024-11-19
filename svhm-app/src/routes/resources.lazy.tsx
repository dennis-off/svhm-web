import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import {
  getDownloads,
  getExternalLinks,
  getProtocols,
  getResourcesPage,
} from '@/api/queries'
import { strapiImage } from '@/api/strapiImage'
import { Cta } from '@/components/dynamic-zone/Cta'
import { GeneralError, IsLoading } from '@/components/ErrorComponents'
import { Button, buttonVariants } from '@/components/ui/button'
import { extractWords, truncate } from '@/lib/utils'

export const Route = createLazyFileRoute('/resources')({
  component: Resources,
})

function Resources() {
  const navigate = useNavigate()

  // get all data
  const { isError, isPending, data } = useQuery({
    queryKey: ['getAllData'],
    queryFn: async () => {
      const [protocols, downloads, links, resourcesPage] = await Promise.all([
        getProtocols(),
        getDownloads(),
        getExternalLinks(),
        getResourcesPage(),
      ])

      return { protocols, downloads, links, resourcesPage }
    },
  })

  if (isError) {
    return <GeneralError />
  }

  if (isPending) {
    return <IsLoading />
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    data.resourcesPage?.section.heading,
  )

  return (
    <div className="min-h-screen">
      <section className="container py-8 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            {firstWord}{' '}
          </span>
          {middleWords.join(' ')}{' '}
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
              <a href={link.link.URL} className="group flex flex-row gap-4">
                <div className="flex min-w-32 overflow-hidden">
                  <img
                    className="h-32 w-32 rounded-lg transition-all duration-500 ease-in-out [mask-image:radial-gradient(circle,white,transparent)] group-hover:scale-110 group-hover:blur-none"
                    src={strapiImage(link.preview.url)}
                    alt=""
                  />
                </div>

                <div className="flex-col py-4">
                  <div className="flex flex-row">
                    <p className="flex border-b-2 border-transparent text-lg font-medium text-foreground transition duration-200 group-hover:border-primary">
                      {link.name}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground transition duration-200 group-hover:text-foreground">
                    {truncate(link?.description || 'Undefined', 80)}
                  </p>
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
                    onClick={() => navigate({ to: download.link.URL })}
                    className={`w-full text-[17px] md:w-auto ${buttonVariants({
                      variant: 'muted',
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
                    onClick={() => navigate({ to: protocol.link.URL })}
                    className={`w-full text-[17px] md:w-auto ${buttonVariants({
                      variant: 'muted',
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
  )
}
