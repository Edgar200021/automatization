'use server'

import { Company } from "@/db/models/company"
import { Employee } from "@/db/models/employee"
import { User } from "@/db/models/user"
import { connectDb } from "@/db/mongoose"
import { revalidatePath } from "next/cache"

export const deleteEmployee = async(userEmail: string,employeeEmail: string, formData: FormData) => {

   try {
   await connectDb()
   const user = await User.findOne({email: userEmail}),
   company = await Company.findOne({owner: user._id}),
   employee = await Employee.findOne({
	company: company._id,
	email: employeeEmail
   })


   //@ts-expect-error
   company.employees = company.employees.filter(emp => emp._id != employee._id)
   await company.save()
   await Employee.findByIdAndDelete(employee._id)

   } catch(e) {
	throw e
   }

   revalidatePath('/dashboard')

}