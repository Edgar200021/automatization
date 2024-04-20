import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Գաղտնաբառի երկարությունը պետք է լինի առնվազն 8 նիշ'),
})

export type SignInSchema = z.infer<typeof signInSchema>
