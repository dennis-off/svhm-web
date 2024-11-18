import { components } from "@/api/strapi";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function EventCard({
  event,
}: {
  event: components["schemas"]["Event"];
}) {
  // calculate the weekday and 2-digit month
  const abbr = new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
  }).format(new Date(event.datetime));
  const day = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(event.datetime));

  return (
    <Card>
      <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
        <div className="m-1 rounded-2xl bg-primary/20 p-1">
          <div className="flex h-24 w-24 flex-col">
            <p className="mx-4 flex items-center justify-center border-b-[1px] border-muted-foreground text-xl font-bold">
              {abbr}
            </p>
            <p className="mx-4 flex flex-grow items-center justify-center text-2xl font-bold">
              {day}
            </p>
          </div>
        </div>
        <div>
          <CardTitle>{event.name}</CardTitle>
          <CardDescription className="text-md mt-2">
            {event.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
