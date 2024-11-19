import { motion } from "framer-motion";
import { components } from "@/api/strapi";
import { strapiImage } from "@/api/strapiImage";
import Markdown from "@/components/markdown";

export function About({
  page,
}: {
  page: components["schemas"]["DynamicZoneAboutComponent"];
}) {
  return (
    <section id="about" className="container py-4 sm:py-32">
      <motion.div
        className="rounded-lg border bg-muted/50 py-12"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 150,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 0.4, // Animation duration
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col-reverse items-center gap-8 px-6 md:flex-row md:gap-12">
          <img
            src={strapiImage(page.logo?.url)}
            alt="Logo"
            className="w-[300px] rounded-lg object-contain"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
                  Über den{" "}
                </span>
                Schulverein Haseldorfer Marsch
              </h2>
              <Markdown
                className="border-l-0 border-r-0 p-0 text-xl text-muted-foreground lg:p-0"
                markdown={page?.content || ""}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
