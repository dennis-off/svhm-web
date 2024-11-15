import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clientsItem, FaqItems } from "@/constants";

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
  const toggleAccordion = (itemId: any) => {
    setActiveAccordion((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section className="padding-y relative z-30 mt-[-10px] w-full rounded-t-[20px] bg-background">
      <h1 className="sub-heading padding-x font-NeueMontreal text-secondry pb-[50px] font-medium">
        A few things you <br />
        may want to ask us:
      </h1>
      {FaqItems.map((item) => (
        <div
          key={item.id}
          className={`flex w-full flex-col py-[10px] ${
            item.id == 1
              ? "border-y border-[#21212155]"
              : "border-b border-[#21212155]"
          }`}
        >
          <div className="xm:gap-[15px] padding-x flex w-full items-center justify-between py-[10px] sm:gap-[15px]">
            <div className="xm:w-full w-[50%] sm:w-full">
              <h1 className="paragraph font-NeueMontreal text-secondry font-normal">
                {item.question}
              </h1>
            </div>
            <div className="xm:w-full flex w-[50%] items-center justify-between sm:w-full">
              <div>
                <h3 className="paragraph font-NeueMontreal text-secondry font-normal">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-end justify-end">
                <button
                  className={`paragraph font-NeueMontreal font-normal uppercase transition-all duration-200 ease-in-out ${
                    activeAccordion === item.id
                      ? "text-gray-300"
                      : "text-secondry link-flash"
                  }`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  {activeAccordion === item.id ? "read" : "read"}
                </button>
              </div>
            </div>
          </div>
          <div className="padding-x flex w-full justify-between">
            <div className="xm:hidden w-[50%] sm:hidden" />
            <div className="xm:w-full w-[50%] sm:w-full">
              <AnimatePresence>
                {activeAccordion === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      ease: [0.4, 0, 0.2, 1],
                      duration: 1.3,
                    }}
                  >
                    <div className="flex flex-col gap-[20px] py-[30px]">
                      <div className="">
                        <p className="paragraph font-NeueMontreal text-secondry font-normal tracking-wider">
                          {item.description}
                        </p>
                      </div>
                      {item.links.map((link) => (
                        <div
                          key={link.id}
                          className="xm:flex-col xm:gap-[20px] flex justify-between gap-[80px] pt-[20px] sm:flex-col sm:gap-[20px]"
                        >
                          <span className="paragraph font-NeueMontreal text-secondry font-normal tracking-wider">
                            {link.title}
                          </span>
                          <p className="paragraph font-NeueMontreal text-secondry font-normal tracking-wider">
                            {link.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
