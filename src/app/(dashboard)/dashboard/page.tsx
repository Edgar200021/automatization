import { UsersTable } from '@/components/UsersTable/UsersTable'
import { Company } from '@/db/models/company'
import { Employee } from '@/db/models/employee'
import { User } from '@/db/models/user'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

export default async function Home() {
  const session = await getSession()
  const user = await User.findOne({ email: session?.user?.email! })
  const data = await Company.findOne({ owner: user._id }).populate({
    path: 'employees',
    model: Employee,
  })

  return (
    <>
      <UsersTable employees={data.employees} />
    </>
  )
}
