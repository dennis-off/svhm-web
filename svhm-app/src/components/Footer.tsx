import { Link } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import { strapiImage } from "@/api/strapiImage";

export const Footer = ({
  data,
}: {
  data: components["schemas"]["GlobalFooterComponent"];
}) => {
  return (
    <>
      <footer
        id="footer"
        className="flex h-full flex-col justify-between text-accent-foreground"
      >
        <hr className="mx-auto w-11/12" />

        <section className="container z-10 flex flex-col justify-center">
          <div className="flex justify-center">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="flex text-xl font-bold"
            >
              <img
                src={strapiImage(data.logo?.url)}
                alt=""
                className="w-[150px] rounded-lg object-contain"
              />
            </Link>
          </div>
        </section>

        <section className="container z-10 flex flex-row justify-center gap-x-12">
          <div className="">
            <h3 className="text-lg font-bold">Folge uns</h3>
            {data?.social_media_links ? (
              <LinkSection links={data.social_media_links} />
            ) : null}
          </div>

          <div className="">
            <h3 className="text-lg font-bold">Verein</h3>
            {data?.internal_links ? (
              <LinkSection links={data.internal_links} />
            ) : null}
          </div>

          <div className="">
            <h3 className="text-lg font-bold">Richtlinien</h3>
            {data?.policy_links ? (
              <LinkSection links={data.policy_links} />
            ) : null}
          </div>
        </section>

        <section className="container z-10 flex flex-col border-t border-muted-foreground p-4">
          <h3>
            &copy; 2024 Gestaltet{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/dennis-off/svhm-web"
              className="border-primary text-primary transition-all hover:border-b-2"
            >
              In de Masch
            </a>
          </h3>
        </section>
      </footer>

      {/* Shadow effect */}
      <div className="shadow-accent"></div>
    </>
  );
};

const LinkSection = ({
  links,
}: {
  links: components["schemas"]["SharedLinkComponent"][];
}) => (
  <div className="mt-4 flex flex-col justify-start space-y-4">
    {links.map((link) => (
      <Link
        rel="noreferrer noopener"
        to={link.URL}
        key={link.text}
        className="items-start border-b-2 border-transparent text-lg text-muted-foreground transition-all hover:border-primary"
        target={link.target}
      >
        {link.text}
      </Link>
    ))}
  </div>
);
