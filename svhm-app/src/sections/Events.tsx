import { Link } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import { EventCard } from "@/features/Events/EventCard";
import { extractWords } from "@/lib/utils";

export function Events({
  page,
}: {
  page: components["schemas"]["DynamicZoneEventsComponent"];
}) {
  const { firstWord, middleWords, lastWord } = extractWords(
    page?.section?.heading
  );

  return (
    <section className="container py-24 sm:py-32">
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

          <div className="flex flex-col gap-8">
            {page?.events &&
              page.events.map((event: any) => (
                <div key={event.documentId}>
                  <EventCard event={event} />
                </div>
              ))}
          </div>
        </div>

        <h3 className="mt-4 font-medium">
          Plane weiter im Voraus{" "}
          <Link
            rel="noreferrer noopener"
            to="/events"
            target="_self"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            Hier sind alle Termin
          </Link>
        </h3>
      </div>
    </section>
  );
}
