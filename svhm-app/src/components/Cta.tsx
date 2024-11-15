import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="my-24 bg-muted/50 py-16 sm:my-32">
      <div className="container place-items-center lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {" "}
              Mach mit{" "}
            </span>
            und gestalte mit
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            Hast du Ideen, wie wir den Schulalltag unserer Kinder noch schöner
            machen können? Oder möchtest du uns bei Projekten und Aktionen
            unterstützen? Wir freuen uns über jede Mithilfe – ob bei der Planung
            oder bei einzelnen Aktionen. Melde dich!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            Beitrittsformular
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            Kontakt
          </Button>
        </div>
      </div>
    </section>
  );
};
