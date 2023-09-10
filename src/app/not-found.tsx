import Link from 'next/link'
import Animation404 from '@/components/Animation404'

export const metadata = {
  title: 'iBlue Wave - 404',
  description: 'Página no encontrada.'
}

export default function NotFoundPage () {
  return (
    <article className="flex flex-col items-center mb-20 md:mb-40 h-screen">
      <section className="flex justify-center w-full lg:w-1/2 z-10">
        <Animation404 />
      </section>

      <section className="bg-zinc-950 border-2 border-zinc-800 p-10 rounded-xl z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#2E9FDB]">Página no encontrada</h2>
        <p className="text-center font-semibold mt-3">La página que buscas no existe o no se encuentra disponible.</p>
        <span className="flex justify-center">
          <Link
            href="/"
            className="text-center font-semibold mt-3 text-white hover:text-[#2E9FDB] hover:underline"
          >Volver al inicio</Link>
        </span>
      </section>
    </article>
  )
}
