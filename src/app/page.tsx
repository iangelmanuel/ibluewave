import { Image } from '@nextui-org/image'
import Hero from '@/components/Hero'
import InitialContent from '@/components/contents/InitialContent'
import AboutContent from '@/components/contents/AboutContent'
import HomeContent from '@/components/contents/HomeContent'
import ContactContent from '@/components/contents/ContactContent'
import Courses from '@/components/Courses'

export const metadata = {
  title: 'iBlue Wave - Inicio',
  description: 'Conoce más sobre nosotros y nuestro trabajo.'
}

export default function HomePage () {
  return (
    <article className="w-full flex flex-col gap-16 md:gap-24 justify-center items-center mb-10 lg:my-10 space-y-20">

      <section className="flex justify-center w-full">
        <Hero />
      </section>

      <section className="w-5/6 md:w-full z-10">
        <InitialContent />
      </section>

      <section className="w-5/6 md:w-full z-10">
        <AboutContent />
      </section>

      <section className="z-10">
        <HomeContent />
      </section>

      <section className="w-5/6 md:w-full z-10">
        <Courses />
      </section>

      <section className="w-5/6 md:w-full lg:w-[800px] z-10 space-y-5">
        <div>
          <h3 className="text-4xl text-center font-bold text-[#2E9FDB]">¿Estás interesado? ¡Contáctanos!</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-9 justify-center items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
          <section className="md:w-1/2">
            <Image
              src="/img/logov1.jpg"
              alt="About Image"
              className="w-full md:w-96 md:h-full object-cover rounded-full"
            />
          </section>
          <section className="w-5/6 space-y-3">
            <p className="text-zinc-300 text-sm text-center lg:text-start">
              ¿Interesado en sumergirte con <span className="text-[#EE9925] font-bold">iBlueWaveTechnology</span> o tener más información? ¡Estamos aquí para responder a todas tus preguntas! Puedes contactarnos en <span className="text-[#EE9925] font-bold">ibluewavetechnology@gmail.com</span> o llamarnos al <span className="text-[#EE9925] font-bold">+57 300 802 9002</span>. También puedes visitarnos en nuestra sede en <span className="text-[#EE9925] font-bold">Barranquilla Atlántico</span>, donde estaremos encantados de recibirte y compartir nuestra pasión por el buceo y la conservación marina.
            </p>
          </section>
        </div>
        <ContactContent />
      </section>
    </article>
  )
}
