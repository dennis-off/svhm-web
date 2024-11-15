import { Link, useNavigate } from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Form() {
  return (
    <section className="padding-x padding-y w-full">
      <div className="flex w-full flex-col gap-[15px]">
        <div className="xm:flex-col flex w-full gap-[15px] sm:flex-col">
          <div className="xm:w-full xm:flex-col flex w-[50%] gap-[10px] sm:w-full sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                Hi! My name is
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your name*"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
          <div className="xm:w-full xm:flex-col flex w-[50%] gap-[10px] sm:w-full sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                and I work with
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Compony name type here*"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px]">
          <div className="xm:flex-col flex w-full gap-[10px] sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                I’m looking for a partner to help me with
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Your goal type here*"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px]">
          <div className="xm:flex-col flex w-full gap-[10px] sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                With an idea of having that completed
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Date*"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px]">
          <div className="xm:flex-col flex w-full gap-[10px] sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                I am hoping to stay around a budget range of
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Select*"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px]">
          <div className="xm:flex-col flex w-full gap-[10px] sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                You can reach me at
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="name@example.com"
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                to start the conversation.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[10px]">
          <div className="xm:flex-col flex w-full gap-[10px] sm:flex-col">
            <div className="md:min-w-max lg:min-w-max xl:min-w-max">
              <h2 className="sub-heading font-NeueMontreal text-secondry font-normal">
                Optionally, i’m sharing more:
              </h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Product details type here..."
                className="paragraph font-NeueMontreal text-secondry focus:border-secondry xm:text-left xm:w-full mt-[20px] w-full transform border-b border-[#21212155] bg-background text-center font-normal outline-none transition duration-200 ease-in-out focus:placeholder:opacity-0 sm:w-full sm:text-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xm:justify-start flex w-full items-center justify-end pt-[50px] sm:justify-start">
        <div className="xm:flex-col flex gap-[25px] sm:flex-col">
          <div className="flex items-center gap-[10px]">
            <div className="flex gap-[10px]">
              <input type="checkbox" className="w-[30px]" />
              <p className="paragraph text-secondry font-NeueMontreal font-normal">
                I agree with the
              </p>
            </div>
            <Link
              className="paragraph font-NeueMontreal text-secondry hover flex flex-col font-medium capitalize"
              href={"/privacy"}
            >
              Privacy Policy
            </Link>
          </div>
          <div className="bg-secondry group flex w-fit cursor-pointer items-center justify-between rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
