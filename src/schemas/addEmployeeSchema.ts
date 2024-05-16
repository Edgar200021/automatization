import { z } from 'zod'

export const addEmployeeSchema = z.object({
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
  department: z.string(),
  position: z.string(),
  dailySalary: z.coerce
    .number()
    .gte(3000, 'Նվազագույն օրական աշխատավարձը պետք է գերազանցի 3000 դրամը'),
})

export type AddEmployeeSchema = z.infer<typeof addEmployeeSchema>
