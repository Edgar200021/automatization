'use server'

import { Company } from '@/db/models/company'
import { Employee } from '@/db/models/employee'
import { User } from '@/db/models/user'
import { connectDb } from '@/db/mongoose'
import { AddEmployeeSchema } from '@/schemas/addEmployeeSchema'
import { FormState } from '@/types'
import { validateData } from '@/utils/transformZodErrors'
import { revalidatePath } from 'next/cache'

export const addEmployee = async (
  userEmail: string,
  formState: Partial<
    FormState<Omit<AddEmployeeSchema, 'dailySalary'> & { dailySalary: string }>
  >,
  formData: FormData
): Promise<
  Partial<
    FormState<
      Omit<AddEmployeeSchema, 'dailySalary'> & {
        dailySalary: string
        status: string
      }
    >
  >
> => {
  const obj = Object.fromEntries(formData),
    { isSuccess, data } = validateData<'addEmployeeSchema'>(
      obj,
      'addEmployeeSchema'
    )

  // @ts-expect-error
  if (!isSuccess) return data

  try {
    await connectDb()

    const user = await User.findOne({ email: userEmail })
    const company = await Company.findOne({ owner: user._id })

    const isEmployeeExists = await Employee.findOne({
      company: company._id,
      email: data.email,
    })
    if (isEmployeeExists)
      return {
        email: `Նման էլ.փոստի հասցե ունեցող աշխատող արդեն գոյություն ունի`,
      }

    const employee = await Employee.create({
      ...data,
      company: company._id,
      createdAt: new Date('2024-05-12T14:56:48.616+00:00'),
      monthlyEarnings: 70000,
      workingDaysPerMonth: 7,
    })
    company.employees.push(employee._id)
    await company.save()
  } catch (error) {
    throw error
  }

  revalidatePath('/dashboard')
  return { status: 'done' }
}
