import { Link, useNavigate } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import { Button, buttonVariants } from "@/components/ui/button";

export const Cta = ({
  cta,
}: {
  cta: components["schemas"]["DynamicZoneCtaComponent"];
}) => {
  const navigate = useNavigate();

  const words: string[] = cta?.heading?.split(/\s+/) || [];

  // Get the first and last words
  const firstTwoCombined = words.slice(0, 2);
  const rest = words.slice(2, words.length);

  return (
    <section id="cta" className="my-24 bg-muted/50 py-16 sm:my-32">
      <div className="container place-items-center lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {" "}
              {firstTwoCombined.join(" ")}{" "}
            </span>
            {rest.join(" ")}
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            {cta?.sub_heading}
          </p>
        </div>

        <div className="flex flex-row gap-2">
          {cta?.CTAs?.map((button) => (
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
    </section>
  );
};
