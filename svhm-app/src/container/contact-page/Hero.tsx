import { motion } from "framer-motion";
import { contactHero } from "../../../public";

export default function Hero() {
  return (
    <section className="padding-x w-full">
      <div className="flex w-full flex-col">
        <div className="margin w-full">
          <h1 className="heading font-FoundersGrotesk font-semibold uppercase tracking-[-1.3px] text-[#212121]">
            <div className="flex items-center gap-[5px]">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{
                  ease: [0.86, 0, 0.07, 0.995],
                  duration: 1,
                  delay: 1.5,
                }}
              >
                <img
                  width={120}
                  height={50}
                  src={contactHero}
                  alt="img"
                  className="xm:w-[64px] xm:h-[40px] mt-[10px] h-[95px] w-auto rounded-[10px] object-cover sm:h-[45px] sm:w-[74px] md:h-[63px] md:w-[100px] lg:h-auto lg:w-auto xl:mt-[15px]"
                />
              </motion.span>
              <h1 className="heading font-FoundersGrotesk font-semibold uppercase tracking-[-1.3px] text-[#212121]">
                LET’S START <br />
              </h1>
            </div>
            A PROJECT TOGETHER
          </h1>
        </div>
        <div className="w-full pb-[15px]">
          <h3 className="paragraph text-secondry font-NeueMontreal font-medium">
            Fill the form below:
          </h3>
        </div>
      </div>
    </section>
  );
}
