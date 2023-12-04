import { Image } from '@nextui-org/image'
import HomeContent from '@/components/contents/HomeContent'

export const metadata = {
  title: 'iBlue Wave - Productos',
  description: 'Conoce nuestros productos.'
}

export default function ProductsPage () {
  return (
    <>
      <article className="z-10">
        <HomeContent />
      </article>

      <article className="container mx-auto w-5/6 mb-10">
        <section className="z-10">
          <h2 className="text-4xl font-bold text-center text-[#2E9FDB] mb-9">Productos</h2>
        </section>

        <section className="container mx-auto w-5/6 lg:w-[800px] mb-10">
          <div className="flex flex-col md:flex-row gap-9 items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
            <section className="md:w-full z-10">
              <Image
                isZoomed
                src="/img/product1.jpg"
                alt="Home Image"
                className="w-full md:w-96 md:h-96 object-cover"
              />
            </section>

            <section className="md:w-full space-y-3 z-10">
              <h4 className="text-2xl md:text-xl font-bold text-[#2E9FDB] mb-3 text-center lg:text-start">Nuestras Boyas</h4>
              <p className="text-zinc-300 text-center lg:text-start">
                Sumérgete con seguridad y estilo con la boya de <span className="text-[#EE9925] font-bold">iBlueWaveTechnology</span>. Nuestra innovadora boya no solo te mantiene visible en las aguas, sino que también ofrece <span className="text-[#EE9925] font-bold">durabilidad y practicidad</span>. Compacta, resistente a la intemperie y con compartimentos inteligentes, es la elección perfecta para buceadores que buscan una experiencia sin preocupaciones. Descubre el buceo con iBlueWaveTechnology: donde la <span className="text-[#EE9925] font-bold">seguridad</span> se encuentra con la comodidad.
              </p>
            </section>
          </div>
        </section>
      </article>
    </>
  )
}
