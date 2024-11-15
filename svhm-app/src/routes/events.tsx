import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getEvents, getEventsPage } from "@/api/queries";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components//ui/card";
import { Cta } from "@/components/dynamic-zone/Cta";
import { GeneralError } from "@/components/ErrorComponents";
import { Spinner } from "@/components/ui/spinner";
import { extractWords } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  component: Events,
});

function Events() {
  const {
    isError: eventsIsError,
    isPending: eventsIsPending,
    data: events,
  } = useQuery({
    queryKey: ["getEvents"],
    queryFn: () => getEvents(),
  });

  const {
    isError: pageIsError,
    isPending: pageIsPending,
    data: eventPage,
  } = useQuery({
    queryKey: ["getEventsPage"],
    queryFn: () => getEventsPage(),
  });

  if (eventsIsError || pageIsError) {
    return <GeneralError />;
  }

  if (eventsIsPending || pageIsPending) {
    return (
      <div className="min-h-screen">
        <section className="container py-8 lg:py-32">
          <Spinner size="large" />
        </section>
      </div>
    );
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    eventPage?.section.heading
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
            {eventPage?.section.sub_heading}
          </p>

          <div className="flex flex-col gap-8">
            {events?.map((event) => (
              <Card key={event.documentId}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="m-1 rounded-2xl bg-primary/20 p-1">
                    {(() => {
                      const abbr = new Intl.DateTimeFormat("de-DE", {
                        weekday: "short",
                      }).format(new Date(event.datetime));
                      const day = new Intl.DateTimeFormat("de-DE", {
                        day: "2-digit",
                        month: "2-digit",
                      }).format(new Date(event.datetime));
                      return (
                        <div className="flex h-24 w-24 flex-col">
                          <p className="mx-4 flex items-center justify-center border-b-[1px] border-muted-foreground text-xl font-bold">
                            {abbr}
                          </p>
                          <p className="mx-4 flex flex-grow items-center justify-center text-2xl font-bold">
                            {day}
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                  <div>
                    <CardTitle>{event.name}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {event.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Cta cta={eventPage?.cta} />
    </div>
  );
}
