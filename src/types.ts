export type FormState<T extends Record<string, string>> = {
  [key in keyof T]: string
} & { message?: string }
