import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email(),
    fullName: z
      .string()
      .refine(
        value => /^[a-zA-Zա-ֆԱ-Ֆ]+[-'s]?[a-zA-Zա-ֆԱ-Ֆ ]+$/.test(value ?? ''),
        ' Անունը պետք է պարունակի միայն այբուբենի տառերը'
      )
      .refine(
        value => /^[a-zA-Zա-ֆԱ-Ֆ]+\s+[a-zA-Zա-ֆԱ-Ֆ]+$/.test(value ?? ''),
        'Մուտքագրեք և անունը, և ազգանունը'
      ),
    password: z
      .string()
      .min(8, 'Գաղտնաբառի երկարությունը պետք է լինի առնվազն 8 նիշ'),
    passwordConfirm: z.string(),
    companyName: z.string(),
  })
  .refine(d => d.password === d.passwordConfirm, {
    message: 'Գաղտնաբառերը չեն համընկնում',
    path: ['passwordConfirm'],
  })

export type SignUpSchema = z.infer<typeof signUpSchema>
