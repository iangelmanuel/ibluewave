import { Image } from '@nextui-org/image'

export default function InitialContent () {
  return (
    <div className="container mx-auto md:w-[800px]">
      <section className="mb-5">
        <h3 className="text-4xl text-center font-bold text-[#2E9FDB]">iBlue Wave Technology</h3>
      </section>

      <section className="flex flex-col-reverse md:flex-row gap-9 justify-center items-center bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
        <div className="w-5/6 md:w-1/2 space-y-3">
          <p className="text-zinc-300 text-center lg:text-start">
            Descubre un mundo submarino lleno de maravillas con <span className="text-[#EE9925] font-bold">iBlueWaveTechnology</span>. Nos dedicamos a la creación de boyas de seguridad y maletines especializados para la práctica del freediving, brindando experiencias <span className="text-[#EE9925] font-bold">seguras y emocionantes</span>. En iBlueWaveTechnology, nos apasiona la exploración submarina y nos dedicamos a fomentar una conexión respetuosa con el océano.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            isZoomed
            src="/img/home.JPG"
            alt="Home Image"
            className="w-full md:w-96 md:h-96 object-cover"
          />
        </div>
      </section>
    </div>
  )
}
