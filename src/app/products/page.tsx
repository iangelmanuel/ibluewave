import { Image } from '@nextui-org/image'

export const metadata = {
  title: 'iBlue Wave - Productos',
  description: 'Conoce nuestros productos.'
}

export default function ProductsPage () {
  return (
    <article className="container mx-auto w-5/6 mb-10">
      <section>
        <h2 className="text-4xl font-bold text-center text-[#2E9FDB] mb-9">Productos</h2>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="w-full lg:w-[300px] space-y-2 bg-zinc-950 border border-zinc-800 p-4 rounded-xl z-10">
          <Image
            isZoomed
            src="/img/product1.jpg"
            alt="About Image"
            className="w-full md:w-96 md:h-96 object-cover rounded-lg"
          />
           <h3 className="text-lg font-bold text-[#2E9FDB]">Boya Amarilla</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque doloremque, dolorem numquam, odit saepe accusamus, atque similique pariatur tempore sit ipsum quas error commodi ab ut voluptatem veritatis quia?
          </p>
        </div>

        <div className="w-full lg:w-[300px] space-y-2 bg-zinc-950 border border-zinc-800 p-4 rounded-xl z-10">
          <Image
            isZoomed
            src="/img/product1.jpg"
            alt="About Image"
            className="w-full md:w-96 md:h-96 object-cover rounded-lg"
          />
          <h3 className="text-lg font-bold text-[#2E9FDB]">Boya Roja</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit inventore dolorum nihil ex, itaque voluptatum quos, quia ea veritatis tempora debitis, eligendi perferendis. Numquam mollitia quos saepe? Doloremque, obcaecati!
          </p>
        </div>
      </section>
    </article>
  )
}
