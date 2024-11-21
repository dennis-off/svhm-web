import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getFaqPage, getFaqs } from "@/api/queries";
import { GeneralError } from "@/components/ErrorComponents";
import { StrapiSEO } from "@/components/StrapiSeo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Spinner } from "@/components/ui/spinner";
import { extractWords } from "@/lib/utils";
import { Cta } from "@/sections/Cta";

export const Route = createLazyFileRoute("/faq")({
  component: FAQs,
});

function FAQs() {
  const {
    isError: faqsIsError,
    isPending: faqsIsPending,
    data: faqs,
  } = useQuery({
    queryKey: ["getFaqs"],
    queryFn: () => getFaqs(),
  });

  const {
    isError: pageIsError,
    isPending: pageIsPending,
    data: faqPage,
  } = useQuery({
    queryKey: ["getFaqPage"],
    queryFn: () => getFaqPage(),
  });

  if (faqsIsError || pageIsError) {
    return <GeneralError />;
  }

  if (faqsIsPending || pageIsPending) {
    return (
      <div className="min-h-screen">
        <section className="container py-8 lg:py-32">
          <Spinner size="large" />
        </section>
      </div>
    );
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    faqPage?.section.heading
  );

  return (
    <div className="min-h-screen">
      <section className="container py-8 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            {firstWord}{" "}
          </span>
          {middleWords.join(" ")}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            {lastWord}
          </span>
        </h2>

        <div className="gap-8">
          <p className="mb-8 mt-4 text-center text-xl text-muted-foreground lg:text-start">
            {faqPage?.section.sub_heading}
          </p>

          <Accordion type="single" collapsible className="AccordionRoot w-full">
            {faqs?.map((faq) => (
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
      </section>

      {faqPage?.cta ? <Cta cta={faqPage.cta} /> : null}

      <StrapiSEO seo={faqPage?.seo} />
    </div>
  );
}
