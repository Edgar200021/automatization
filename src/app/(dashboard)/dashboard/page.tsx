import { UsersTable } from '@/components/UsersTable/UsersTable'
import { Company } from '@/db/models/company'
import { Employee } from '@/db/models/employee'
import { User } from '@/db/models/user'
import { connectDb } from '@/db/mongoose'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()
  await connectDb()
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
