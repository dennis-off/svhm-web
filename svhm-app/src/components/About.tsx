import logo from "../assets/logo_small.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="container py-4 sm:py-32"
    >
      <motion.div className="rounded-lg border bg-muted/50 py-12"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 150
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 0.4, // Animation duration
            delay: 0.2
          }
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col-reverse items-center gap-8 px-6 md:flex-row md:gap-12">
          
          <img
            src={logo}
            alt=""
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
              <p className="mt-4 text-xl text-muted-foreground">
                Der Schulverein Haseldorfer Marsch setzt sich aktiv für die
                Grundschule in Haseldorf ein – sei es durch finanzielle
                Unterstützung oder tatkräftige Aktionen. Mit unseren
                wiederkehrenden und speziellen Projekten sorgen wir dafür, dass
                der Schulalltag unserer Kinder bereichert und gefördert wird.
              </p>
              <p className="mt-4 text-xl text-muted-foreground">
                Wir fördern immer wieder neue Projekte, wie die Neugestaltung
                des Schulhofs, Theaterfahrten, Pausenspiel-Container,
                Spielekisten für Regenpausen und Bücherkisten für die Klassen.
                Dank unseres Schulvereins gestalten wir gemeinsam einen
                lebendigen und abwechslungsreichen Schulalltag!
              </p>
            </div>

            {/*<Statistics />*/}
          </div>
      </div>
      </motion.div>
    </section>
  );
};
