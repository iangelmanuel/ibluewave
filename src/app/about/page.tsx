import { Image } from "@nextui-org/image"
import { Card, CardHeader, CardBody } from "@nextui-org/card"
import AboutContent from "@/components/contents/AboutContent"

export const metadata = {
  title: "iBlue Wave - Nosotros",
  description: "Conoce más sobre nosotros y nuestro trabajo."
}

export default function AboutPage() {
  return (
    <article className="flex flex-col md:gap-10 justify-center items-center md:mb-20 md:my-20">
      <section className="w-5/6 md:w-auto lg:w-full my-5 lg:my-0 z-10">
        <h3 className="text-4xl text-center font-bold text-[#2E9FDB] mb-3">
          Acerca de iBlue Wave Technology
        </h3>

        <Card className="container mx-auto md:w-[800px]">
          <CardHeader className="flex justify-center">
            <Image
              isZoomed
              src="/img/logov2.jpg"
              alt="About Card Image"
              className="w-full object-cover"
            />
          </CardHeader>

          <CardBody>
            <p className="mb-3 text-center lg:text-start">
              En el corazón de{" "}
              <span className="text-[#EE9925] font-bold">
                iBlueWaveTechnology
              </span>{" "}
              late la pasión por la exploración submarina y la preservación de
              los océanos. Fundada por{" "}
              <span className="text-[#EE9925] font-bold">
                Ricardo de la Torre
              </span>
              , un instructor en formación altamente dedicado y distinguido con
              la beca de diversidad NAUI, nuestra empresa va más allá de la
              fabricación de boyas y maletines; nos comprometemos a inspirar un
              cambio significativo en la forma en que interactuamos con el
              entorno marino.
            </p>

            <p className="mb-3 text-center lg:text-start">
              Ricardo se ha dedicado a la educación ambiental a través del
              buceo. Su experiencia como{" "}
              <span className="text-[#EE9925] font-bold">
                instructor de NAUI
              </span>{" "}
              le ha permitido fusionar su amor por el océano con la formación de
              buceadores comprometidos con la conservación marina. En cada
              curso, Ricardo comparte no solo habilidades técnicas avanzadas,
              sino también una{" "}
              <span className="text-[#EE9925] font-bold">
                profunda comprensión
              </span>{" "}
              de la importancia de proteger y preservar los tesoros submarinos.
            </p>

            <p className="mb-3 text-center lg:text-start">
              Lo que nos distingue en{" "}
              <span className="text-[#EE9925] font-bold">
                iBlueWaveTechnology
              </span>{" "}
              es nuestra misión: ir más allá de la instrucción estándar y
              convertir cada experiencia de buceo en una oportunidad para
              contribuir al bienestar de nuestros océanos. Creemos en empoderar
              a nuestros estudiantes no solo como buceadores hábiles, sino
              también como{" "}
              <span className="text-[#EE9925] font-bold">
                defensores apasionados
              </span>{" "}
              del medio ambiente marino.
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="w-5/6 md:w-auto lg:w-full my-5 lg:my-0 z-10">
        <AboutContent />
      </section>
    </article>
  )
}
