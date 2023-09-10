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
            <p className="text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius, soluta corrupti deserunt eligendi culpa adipisci maxime nulla est ea sint voluptas dolorum placeat. Aperiam voluptatum voluptatibus quasi placeat beatae.
            </p>
            <p className="text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consequatur ratione sapiente suscipit error illo harum blanditiis labore molestias beatae esse autem architecto, molestiae ut magnam odio ea asperiores ducimus iste. Accusamus dolorem accusantium assumenda adipisci dignissimos blanditiis quisquam ad magnam quos unde doloremque esse quibusdam, repellendus possimus fugiat facere.
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
