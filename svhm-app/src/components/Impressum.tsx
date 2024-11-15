import Markdown from "@/components/markdown";
import impressum from "../assets/impressum.md";

export const Impressum = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <Markdown markdown={impressum} />
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
