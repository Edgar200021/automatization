import { User } from '@/db/models/user'
import { connectDb } from '@/db/mongoose'
import bcrypt from 'bcrypt'

export const login = async (email: string, password: string) => {
  await connectDb()
  const user = await User.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new Error('Սխալ Էլ ․ հասցե կամ գաղտնաբառ')

  user.password = ''
  return user
}
