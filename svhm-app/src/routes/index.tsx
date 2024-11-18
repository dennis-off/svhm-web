import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { WhatWeDo } from "@/components/WhatWeDo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const data = Route.useLoaderData();
  console.log(data);

  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Features />
      <Services />
      <Cta />
      <Team />
      <FAQ />
    </>
  );
}
