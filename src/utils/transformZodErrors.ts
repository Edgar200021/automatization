import { addEmployeeSchema } from '@/schemas/addEmployeeSchema'
import { signInSchema } from '@/schemas/signInSchema'
import { signUpSchema } from '@/schemas/signUpSchema'
import { z } from 'zod'

const schemas = {
  signUpSchema,
  signInSchema,
  addEmployeeSchema,
}

export const validateData = <K extends keyof typeof schemas>(
  data: any,
  schema: K
): { isSuccess: boolean; data: z.infer<(typeof schemas)[K]> } => {
  const validationResult = schemas[schema].safeParse(data),
    map = new Map()

  if (!validationResult.success) {
    validationResult.error.errors.forEach(({ message, path }) =>
      map.set(path, message)
    )
    return {
      isSuccess: false,
      data: Object.fromEntries(map),
    }
  }

  return { isSuccess: true, data: validationResult.data }
}
