import { login } from '@/utils/api'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null

        try {
          const user = await login(credentials.email, credentials.password)
          return user
        } catch (e) {
          console.error(e)
          return null
        }
      },
    }),
  ],

  pages: {
    signIn: '/sign-in',
  },
})

export { handler as GET, handler as POST }
