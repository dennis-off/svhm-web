import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { components } from "@/api/strapi";
import { Button, buttonVariants } from "@/components//ui/button";
import { FlipWords } from "@/components//ui/flip-words";
import { HeroCards } from "@/features/landing/HeroCards";

export function Hero({
  page,
}: {
  page: components["schemas"]["DynamicZoneHeroComponent"];
}) {
  const navigate = useNavigate();

  return (
    <section className="container grid place-items-center gap-10 pt-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          Dein{" "}
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              Engagement
            </span>{" "}
          </h1>
          für unsere{" "}
          <h2 className="inline">
            <FlipWords
              words={page.flipWords?.map((e) => e?.word || "") || [""]}
              className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent"
            />
            {/*<span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Schule!
            </span>*/}
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          {page.section?.sub_heading}
        </p>

        <div className="flex flex-row gap-2">
          {page.CTAs?.map((button) => (
            <Link
              rel="noreferrer noopener"
              to={button.URL}
              key={button.id}
              target={button.target}
            >
              <Button
                key={button.id}
                onClick={() => navigate({ to: button.URL })}
                className={`text-[17px] ${buttonVariants({
                  variant: button.variant,
                })}`}
              >
                {button.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero cards sections */}
      <motion.div
        className="z-10"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 150,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 0.5, // Animation duration
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <HeroCards />
      </motion.div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
}
