export const languages = {
  en: {
    label: "English",
    short: "EN",
    title: "Krontium",
    subtitle: "A no-text mineral pressure field.",
    readerLabel: "Krontium",
  },
  ko: {
    label: "한국어",
    short: "KO",
    title: "Krontium",
    subtitle: "A no-text mineral pressure field.",
    readerLabel: "Krontium",
  },
  zh: {
    label: "中文",
    short: "ZH",
    title: "Krontium",
    subtitle: "A no-text mineral pressure field.",
    readerLabel: "Krontium",
  },
  ja: {
    label: "日本語",
    short: "JA",
    title: "Krontium",
    subtitle: "A no-text mineral pressure field.",
    readerLabel: "Krontium",
  },
} as const;

export type Language = keyof typeof languages;

export const languageCodes = Object.keys(languages) as Language[];

export function isLanguage(value: string): value is Language {
  return value in languages;
}
