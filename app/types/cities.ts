import { ValueOf } from "next/dist/shared/lib/constants"

export const Cities = Object.freeze({
  LONDON: "London",
  TOKYO: "Tokyo",
} as const)

export type Cities = ValueOf<typeof Cities>