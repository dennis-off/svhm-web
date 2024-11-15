import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const formatNumber = (
  number: number,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export function extractWords(text?: string) {
  // Split the text into words or return an empty array if text is undefined
  const words: string[] = text?.split(/\s+/) ?? [];

  // Get the first word if it exists, otherwise set to an empty string
  const firstWord = words.length > 0 ? words[0] : "";

  // Get the last word if it exists, otherwise set to an empty string
  const lastWord = words.length > 1 ? words[words.length - 1] : "";

  // Get the words in the middle, ensuring at least 3 words are present
  const middleWords = words.length > 2 ? words.slice(1, words.length - 1) : [];

  return { firstWord, middleWords, lastWord };
}
