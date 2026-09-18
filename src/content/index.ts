import { esContent } from "./es";

export const supportedLocales = ["es"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

const contentByLocale = {
  es: esContent,
} as const;

export function getSiteContent(locale: SupportedLocale = "es") {
  return contentByLocale[locale];
}
