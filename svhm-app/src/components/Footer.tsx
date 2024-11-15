import { Link } from "@tanstack/react-router";
import logo from "../assets/logo_small.png";

export const Footer = ({ data }: { data: any }) => {
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
                src={logo}
                alt=""
                className="w-[150px] rounded-lg object-contain"
              />
            </Link>
          </div>
        </section>

        <section className="container z-10 flex flex-row justify-center gap-x-12">
          <div className="">
            <h3 className="text-lg font-bold">Folge uns</h3>
            <LinkSection links={data?.social_media_links} />
          </div>

          <div className="">
            <h3 className="text-lg font-bold">Verein</h3>
            <LinkSection links={data?.internal_links} />
          </div>

          <div className="">
            <h3 className="text-lg font-bold">Richtlinien</h3>
            <LinkSection links={data?.policy_links} />
          </div>
        </section>

        <section className="container z-10 flex flex-col border-t border-muted-foreground p-4">
          <h3>
            &copy; 2024 Gestaltet{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              className="border-primary text-primary transition-all hover:border-b-2"
            >
              In de Masch
            </a>
          </h3>

          <h3>
            (Inspiriert von{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              className="border-primary text-primary transition-all hover:border-b-2"
            >
              Leo Miranda
            </a>
            {")"}
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
  links: { text: string; URL: never | string; target: string }[];
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
