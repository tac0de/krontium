export const languages = {
  en: {
    label: "English",
    short: "EN",
    title: "Krontium",
    subtitle: "A multilingual CSS art field for mythic biology.",
    enter: "Enter the field",
    archive: "Field",
    chronicles: "Fragments",
    readFirst: "Open fragment",
    languagePrompt: "Choose a language record",
    readerLabel: "Fragment / 001",
  },
  ko: {
    label: "한국어",
    short: "KO",
    title: "크론티움",
    subtitle: "신화적 생물성을 위한 다국어 CSS 아트 필드.",
    enter: "필드로 들어가기",
    archive: "필드",
    chronicles: "파편",
    readFirst: "파편 열기",
    languagePrompt: "언어 선택",
    readerLabel: "파편 / 001",
  },
  zh: {
    label: "中文",
    short: "ZH",
    title: "Krontium",
    subtitle: "面向神话生物性的多语 CSS 艺术场。",
    enter: "进入场域",
    archive: "场域",
    chronicles: "碎片",
    readFirst: "打开碎片",
    languagePrompt: "选择语言",
    readerLabel: "碎片 / 001",
  },
  ja: {
    label: "日本語",
    short: "JA",
    title: "Krontium",
    subtitle: "神話的な生物性のための多言語 CSS アートフィールド。",
    enter: "フィールドへ入る",
    archive: "フィールド",
    chronicles: "断片",
    readFirst: "断片を開く",
    languagePrompt: "言語を選択",
    readerLabel: "断片 / 001",
  },
} as const;

export type Language = keyof typeof languages;

export const languageCodes = Object.keys(languages) as Language[];

export function isLanguage(value: string): value is Language {
  return value in languages;
}
