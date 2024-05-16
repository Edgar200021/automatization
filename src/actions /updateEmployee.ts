'use server'

import { Company } from '@/db/models/company'
import { Employee } from '@/db/models/employee'
import { User } from '@/db/models/user'
import { connectDb } from '@/db/mongoose'
import { revalidatePath } from 'next/cache'

export const updateEmployee = async (
  userEmail: string,
  employeeEmail: string,
  formData: FormData
) => {
  try {
    await connectDb()
    const user = await User.findOne({ email: userEmail }),
      company = await Company.findOne({ owner: user._id }),
      employee = await Employee.findOne({
        company: company._id,
        email: employeeEmail,
      })

    const createdMonth = new Date(employee.createdAt).getMonth(),
      createdDay = new Date(employee.createdAt).getDate()

    if (
      createdMonth === new Date().getMonth() &&
      createdDay === new Date().getDate()
    )
      return

    if (new Date().getDate() === 1) {
      employee.balance += employee.balance + employee.monthlyEarnings
      employee.workingsDaysPerMonth = 0
      employee.monthlyEarnings = 0
    }

    console.log(employee)

    if (
      employee.updatedAt &&
      new Date(employee.updatedAt).getDate() === new Date().getDate()
    ) {
      employee.workingDaysPerMonth -= 1
      employee.monthlyEarnings -= employee.dailySalary
      employee.updatedAt = undefined
    } else {
      employee.workingDaysPerMonth += 1
      employee.monthlyEarnings += employee.dailySalary
      employee.updatedAt = new Date()
    }

    await company.save()
    await employee.save()
  } catch (e) {
    throw e
  }

  revalidatePath('/dashboard')
}
