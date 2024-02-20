export const Languages = Object.freeze({
  ENGLISH: "en",
  JAPANESE: "ja",
} as const)

export type Languages = ValueOf<typeof Languages>