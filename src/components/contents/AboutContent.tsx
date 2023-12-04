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
            src="/img/naui-logo.jpg"
            alt="About Image"
            className="w-full md:w-96 md:h-96 object-cover"
          />
        </div>
          <section className="w-5/6 md:w-1/2 space-y-3">
            <p className="text-zinc-300 text-center lg:text-start">
              Nuestra empresa fue fundada por <span className="text-[#EE9925] font-bold">Ricardo de la Torre</span>, un apasionado instructor en formación de NAUI y orgulloso ganador de la beca de diversidad NAUI. Con un profundo amor por el océano, Ricardo tiene la visión de generar conciencia ambiental y contribuir a la restauración de la fauna marina.
            </p>
            <p className="text-zinc-300 text-center lg:text-start">
              Comprometidos con la educación, ofrecemos cursos de buceo en <span className="text-[#EE9925] font-bold">scuba y freediving</span>, guiando a nuestros estudiantes hacia la certificación con un enfoque en buceos seguros y sostenibles. Al unirnos a iBlueWaveTechnology, te unes a una red de apoyo para la conservación marina, contribuyendo a la preservación de nuestros océanos para las generaciones futuras.
            </p>
          </section>
      </section>
    </div>
  )
}
