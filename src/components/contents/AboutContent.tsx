import { Image } from '@nextui-org/image'

export default function AboutContent () {
  return (
    <div className="container mx-auto md:w-[800px]">
      <section className="mb-5">
        <h3 className="text-4xl text-center font-bold text-[#2E9FDB]">Un poco sobre nosotros</h3>
      </section>
      <section className="flex flex-col md:flex-row gap-9 justify-center items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
        <div className="md:w-1/2">
          <Image
            isZoomed
            src="/img/about.jpg"
            alt="About Image"
            className="w-full md:w-96 md:h-96 object-cover"
          />
        </div>
          <section className="w-5/6 md:w-1/2 space-y-3">
            <p className="text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius, soluta corrupti deserunt eligendi culpa adipisci maxime nulla est ea sint voluptas dolorum placeat. Aperiam voluptatum voluptatibus quasi placeat beatae.
            </p>
            <p className="text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consequatur ratione sapiente suscipit error illo harum blanditiis labore molestias beatae esse autem architecto, molestiae ut magnam odio ea asperiores ducimus iste. Accusamus dolorem accusantium assumenda adipisci dignissimos blanditiis quisquam ad magnam quos unde doloremque esse quibusdam, repellendus possimus fugiat facere.
            </p>
          </section>
      </section>
    </div>
  )
}
