import { extractWords } from "@/lib/utils";

export function Heading({ heading }: { heading: string | undefined }) {
  if (!heading) return null;

  const { firstWord, middleWords, lastWord } = extractWords(heading);

  return (
    <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
      <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
        {firstWord}{" "}
      </span>
      {middleWords.join(" ")}{" "}
      <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
        {lastWord}
      </span>
    </h2>
  );
}
