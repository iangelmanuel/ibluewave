import { Image } from '@nextui-org/image'

export default function Courses () {
  return (
    <div className="container mx-auto md:w-[800px]">
      <section className="mb-5">
        <h3 className="text-4xl text-center font-bold text-[#2E9FDB]">Nuestros Cursos Exclusivos</h3>
      </section>

      <section className="flex flex-col-reverse md:flex-row gap-9 justify-center items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
        <div className="w-5/6 md:w-1/2 space-y-3">
          <p className="text-zinc-300 text-center lg:text-start">
            Nuestros cursos no son solo una experiencia, es una <span className="text-[#EE9925] font-bold">aventura educativa</span> que va más allá de las profundidades del océano. Con instructores <span className="text-[#EE9925] font-bold">altamente calificados</span>, aprenderás las técnicas más avanzadas de buceo y <span className="text-[#EE9925] font-bold">freediving</span>, mientras desarrollas un fuerte sentido de responsabilidad ambiental. Únete a nosotros y descubre la belleza del mundo submarino de manera segura y sostenible.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            isZoomed
            src="/img/photo.jpg"
            alt="Home Image"
            className="w-full md:w-96 md:h-96 object-cover"
          />
        </div>
      </section>
    </div>
  )
}
