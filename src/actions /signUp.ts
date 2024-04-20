'use server'

import { Company } from '@/db/models/company'
import { User } from '@/db/models/user'
import { connectDb } from '@/db/mongoose'
import { SignUpSchema } from '@/schemas/signUpSchema'
import { FormState } from '@/types'
import { validateData } from '@/utils/transformZodErrors'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

export const signUp = async (
  formState: Partial<FormState<SignUpSchema>>,
  formData: FormData
): Promise<Partial<FormState<SignUpSchema>>> => {
  const obj = Object.fromEntries(formData)

  const { isSuccess, data } = validateData<'signUpSchema'>(obj, 'signUpSchema')

  if (!isSuccess) return data
  await connectDb()

  const user = await User.findOne({ email: data.email })
  if (user) {
    return {
      message: `Նման էլ.փոստի հասցե ունեցող օգտատեր արդեն գոյություն ունի`,
    }
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const newUser = await User.create({
    email: data.email,
    password: hashedPassword,
  })
  await Company.create({ name: data.companyName, owner: newUser._id })

  redirect('/sign-in')
}
