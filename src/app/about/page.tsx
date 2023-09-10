import { Card, CardBody } from '@nextui-org/card'
import AboutContent from '@/components/contents/AboutContent'

export const metadata = {
  title: 'iBlue Wave - Nosotros',
  description: 'Conoce más sobre nosotros y nuestro trabajo.'
}

export default function AboutPage () {
  return (
    <article className="flex flex-col md:gap-10 justify-center items-center md:mb-20 md:my-20">
      <section className="w-5/6 md:w-auto lg:w-full my-5 lg:my-0 z-10">
        <AboutContent />
      </section>

      <section className="w-5/6 md:w-auto lg:w-full my-5 lg:my-0 z-10">
        <Card className="container mx-auto md:w-[800px]">
          <CardBody>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro suscipit quasi, exercitationem nostrum iure modi obcaecati nemo debitis mollitia perferendis inventore, eius dolores natus, quibusdam aliquam? Dolores ratione nisi ipsum pariatur aut dolorem, consequatur recusandae repellat nobis qui sed nesciunt deserunt praesentium reprehenderit dolorum vitae temporibus non harum. Odio, magnam?
            </p>
          </CardBody>
        </Card>
      </section>
    </article>
  )
}
