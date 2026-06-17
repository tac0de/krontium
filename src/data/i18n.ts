export const languages = {
  en: {
    label: "English",
    short: "EN",
    title: "Krontium Archive",
    subtitle: "A monastic record of gods, weaker humans, fast wars, and the biology of myth.",
    enter: "Enter the archive",
    archive: "Archive",
    chronicles: "Chronicles",
    readFirst: "Read first chronicle",
    languagePrompt: "Choose a language record",
    readerLabel: "Book I / Chapter 001",
  },
  ko: {
    label: "한국어",
    short: "KO",
    title: "크론티움 기록원",
    subtitle: "신과 약한 인간, 빠른 전쟁, 생물학적 신화를 보존한 수도승의 기록.",
    enter: "기록원으로 들어가기",
    archive: "기록",
    chronicles: "연대기",
    readFirst: "첫 연대기 읽기",
    languagePrompt: "언어 기록 선택",
    readerLabel: "제1권 / 001장",
  },
  zh: {
    label: "中文",
    short: "ZH",
    title: "Krontium 档案馆",
    subtitle: "关于诸神、脆弱人类、急速战争与生物神话的修士记录。",
    enter: "进入档案馆",
    archive: "档案",
    chronicles: "编年史",
    readFirst: "阅读第一篇编年史",
    languagePrompt: "选择语言记录",
    readerLabel: "第一卷 / 第001章",
  },
  ja: {
    label: "日本語",
    short: "JA",
    title: "Krontium 記録院",
    subtitle: "神々、脆い人間、急速な戦争、生物学的神話を残した修道記録。",
    enter: "記録院へ入る",
    archive: "記録",
    chronicles: "年代記",
    readFirst: "最初の年代記を読む",
    languagePrompt: "言語記録を選択",
    readerLabel: "第一巻 / 第001章",
  },
} as const;

export type Language = keyof typeof languages;

export const languageCodes = Object.keys(languages) as Language[];

export function isLanguage(value: string): value is Language {
  return value in languages;
}
