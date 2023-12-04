import { Image } from '@nextui-org/image'
import ContactContent from '@/components/contents/ContactContent'

export const metadata = {
  title: 'iBlue Wave - Contacto',
  description: 'Contáctanos para más información.'
}

export default function ContactPage () {
  return (
    <article className="flex flex-col gap-16 md:gap-24 justify-center items-center mb-10 md:my-20">
      <section className="container mx-auto w-5/6 lg:w-[800px] mt-5 lg:my-0 z-10">
        <div className="flex flex-col md:flex-row gap-9 justify-center items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
          <section className="md:w-1/2">
            <Image
              src="/img/logov1.jpg"
              alt="About Image"
              className="w-full md:w-96 md:h-full object-cover rounded-full"
            />
          </section>
          <section className="w-5/6 space-y-3">
            <p className="text-zinc-300 text-sm">
              ¿Interesado en sumergirte con <span className="text-[#EE9925] font-bold">iBlueWaveTechnology</span> o tener más información? ¡Estamos aquí para responder a todas tus preguntas! Puedes contactarnos en <span className="text-[#EE9925] font-bold">ibluewavetechnology@gmail.com</span> o llamarnos al <span className="text-[#EE9925] font-bold">+57 300 802 9002</span>. También puedes visitarnos en nuestra sede en <span className="text-[#EE9925] font-bold">Barranquilla Atlántico</span>, donde estaremos encantados de recibirte y compartir nuestra pasión por el buceo y la conservación marina.
            </p>
          </section>
        </div>
      </section>

      <section className="mx-auto w-5/6 lg:w-[800px] z-10">
        <ContactContent />
      </section>
    </article>
  )
}
