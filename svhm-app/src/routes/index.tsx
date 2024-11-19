import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getEvents, getFaqs, getLandingPage, getMembers } from "@/api/queries";
import { About } from "@/components/dynamic-zone/About";
import { Cta } from "@/components/dynamic-zone/Cta";
import { Events } from "@/components/dynamic-zone/Events";
import { FAQ } from "@/components/dynamic-zone/FAQ";
import { Features } from "@/components/dynamic-zone/Features";
import { Hero } from "@/components/dynamic-zone/Hero";
import { Team } from "@/components/dynamic-zone/Team";
import { WhatWeDo } from "@/components/dynamic-zone/WhatWeDo";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import { getRandomElements } from "@/lib/utils";

export const Route = createFileRoute("/")({
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
