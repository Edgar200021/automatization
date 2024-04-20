import { z } from 'zod'

export const addEmployeeSchema = z.object({
  email: z.string().email(),
  fullName: z
    .string()
    .refine(
      value => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ''),
      ' Անունը պետք է պարունակի միայն այբուբենի տառերը'
    )
    .refine(
      value => /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(value ?? ''),
      'Մուտքագրեք և անունը, և ազգանունը'
    ),
  department: z.string(),
  position: z.string(),
  salary: z.coerce
    .number()
    .gte(70000, 'Նվազագույն աշխատավարձը պետք է գերազանցի 70000 դրամը'),
})

export type AddEmployeeSchema = z.infer<typeof addEmployeeSchema>
