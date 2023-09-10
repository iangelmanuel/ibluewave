import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import conectDB from '@/libs/db'
import Admin from '@/models/admin'
import { type ITokenUser } from '@/types/main'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Contraseña', type: 'password', placeholder: 'Contraseña' }
      },
      async authorize (credentials, req) {
        await conectDB()
        const userFound = await Admin.findOne({ email: credentials?.email })

        if (userFound === null || userFound === undefined) {
          throw new Error('Credenciales invalidas')
        }

        if (credentials?.password === null || credentials?.password === undefined) {
          throw new Error('Credenciales invalidas')
        }

        const passwordMatch = await bcrypt.compare(credentials.password, userFound.password)

        if (!passwordMatch) {
          throw new Error('Credenciales invalidas')
        }

        return userFound
      }
    })
  ],
  callbacks: {
    jwt ({ account, token, user, profile, session }) {
      if (user !== null || user !== undefined) {
        token.user = user
      }

      token.user = user
      return token
    },
    session ({ session, token }) {
      session.user = token.user as ITokenUser
      return session
    }
  },
  pages: {
    signIn: '/auth/login'
  }
})

export { handler as GET, handler as POST }
