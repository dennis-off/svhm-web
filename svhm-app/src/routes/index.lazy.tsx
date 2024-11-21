import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getEvents, getFaqs, getLandingPage, getMembers } from "@/api/queries";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { getRandomElements } from "@/lib/utils";
import { About } from "@/sections/About";
import { Cta } from "@/sections/Cta";
import { Events } from "@/sections/Events";
import { FAQ } from "@/sections/FAQ";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { Team } from "@/sections/Team";
import { WhatWeDo } from "@/sections/WhatWeDo";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // get all data
  const { isError, isPending, data } = useQuery({
    queryKey: ["getLandingDataAll"],
    queryFn: async () => {
      const [faqs, members, events, page] = await Promise.all([
        getFaqs(),
        getMembers(),
        getEvents(),
        getLandingPage(),
      ]);

      return { faqs, members, events, page };
    },
  });

  if (isError) {
    return <GeneralError />;
  }

  if (isPending) {
    return <IsLoading />;
  }

  if (!data.page || !data.events || !data.members) {
    return <GeneralError />;
  }

  const page = data.page;

  return (
    <>
      <Hero page={page.hero} />
      <About page={page.about} />
      <WhatWeDo />
      <Features page={page.features} />
      <Events page={page.events} />
      <Cta cta={page.cta} />
      <Team members={getRandomElements(data.members, 3)} />
      <FAQ page={page.faq} />
    </>
  );
}
