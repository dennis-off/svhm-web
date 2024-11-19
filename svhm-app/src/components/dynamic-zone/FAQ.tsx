import { Link } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { extractWords } from "@/lib/utils";

export function FAQ({
  page,
}: {
  page: components["schemas"]["DynamicZoneFaqComponent"];
}) {
  const { firstWord, middleWords, lastWord } = extractWords(
    page?.section?.heading
  );
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {firstWord} {middleWords}{" "}
            </span>
            {lastWord}
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground">
            {page?.section?.sub_heading}
          </p>

          <Accordion type="single" collapsible className="AccordionRoot w-full">
            {page?.faqs &&
              page.faqs.map((faq: any) => (
                <AccordionItem
                  key={faq.documentId}
                  value={faq?.documentId || "Undefined"}
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        <h3 className="mt-4 font-medium">
          Deine Frage ist noch nicht beantwortet{" "}
          <Link
            rel="noreferrer noopener"
            to="/faq"
            target="_self"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            Hier sind weitere Antworten
          </Link>
        </h3>
      </div>
    </section>
  );
}
