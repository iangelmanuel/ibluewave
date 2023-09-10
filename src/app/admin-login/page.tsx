'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Image } from '@nextui-org/image'
import LoginForm from '@/components/LoginForm'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function AdminLoginPage () {
  const [loading, setLoading] = useState<boolean>(true)
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    const checkSession = () => {
      if (status === 'authenticated') {
        router.push('/admin-dashboard/contacts')
      } else {
        setLoading(false)
      }
    }

    checkSession()
  }, [status, router])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <article className="flex flex-col md:gap-10 justify-center items-center my-10">
      <section className="mb-3 z-10">
        <h1 className="text-4xl font-bold text-center">
          Inicia Sesión como <span className="text-[#2E9FDB]">Administrador</span>
        </h1>
      </section>

      <section className="container mx-auto w-5/6 lg:w-[800px] z-10">
        <div className="flex justify-center border-2 border-zinc-800 p-5 rounded-xl">
          <Image
            isZoomed
            src="/img/logov2.jpg"
            alt="Admin Login"
            className="w-80 md:w-full h-auto md:h-full rounded-xl"
          />
        </div>

        <div>
          <LoginForm />
        </div>
      </section>
    </article>
  )
}
