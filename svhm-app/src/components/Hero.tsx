import { HeroCards } from "./HeroCards";
import { Button, buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 pt-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          Dein{" "}
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              Engagement
            </span>{" "}
          </h1>{" "}
          für unsere{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Schule!
            </span>
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Gemeinsam für unsere Kinder: Seit über 50 Jahren unterstützt der
          Schulverein Haseldorfer Marsch aktiv die Schule und fördert mit Herz
          und Engagement das Lernen und die Freude am Schulalltag. Mach mit und
          gestalte die Zukunft unserer Kinder mit!
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Button
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "primary",
            })}`}
          >
            Beitrittsformular
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
