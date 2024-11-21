import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { getEvents, getEventsPage } from "@/api/queries";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { EventCard } from "@/features/Events/EventCard";
import { Cta } from "@/sections/Cta";

export const Route = createLazyFileRoute("/events")({
  component: Events,
});

function Events() {
  // get all data
  const { isError, isPending, data } = useQuery({
    queryKey: ["getEventDataAll"],
    queryFn: async () => {
      const [events, page] = await Promise.all([getEvents(), getEventsPage()]);

      return { events, page };
    },
  });

  if (isError) {
    return <GeneralError />;
  }

  if (isPending) {
    return <IsLoading />;
  }

  if (!data.page || !data.events) {
    return <GeneralError />;
  }

  const page = data.page;
  const events = data.events;

  return (
    <div className="min-h-screen">
      <section className="container gap-8 py-8 lg:py-32">
        <Heading heading={page.section.heading} />
        <SubHeading sub_heading={page.section.sub_heading} />

        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <motion.div
              key={event.documentId}
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  default: { type: "spring", stiffness: 100 },
                },
              }}
              viewport={{ once: true }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </section>

      {page.cta ? <Cta cta={page.cta} /> : null}
    </div>
  );
}
