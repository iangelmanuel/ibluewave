import Link from 'next/link'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'

export default function HomeContent () {
  return (
    <div className="container mx-auto md:w-[850px]">
      <section className="mb-5">
        <h3 className="text-4xl font-bold text-center text-[#2E9FDB]">Nuestros Productos</h3>
      </section>
      <section className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#EE9925] uppercase font-bold">Equipo de buceo</p>
            <h4 className="text-white font-medium text-large">Excelente para explorar</h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            src="/img/product1.jpg"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#EE9925] uppercase font-bold">Mejor calidad</p>
            <h4 className="text-white font-medium text-large">Materiales resistentes</h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            src="/img/product2.jpg"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#EE9925] uppercase font-bold">Precios bajos</p>
            <h4 className="text-white font-medium text-large">Accequible para todos los amantes al mar</h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            src="/img/product3.jpg"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#EE9925] uppercase font-bold">Material resistente</p>
            <h4 className="text-white font-medium text-2xl">La mejora calidad en su interior</h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            src="/img/product4.jpg"
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-tiny">¿Te interesa contactarnos para saber más?</p>
              <p className="text-white text-tiny">Te responderemos lo antes posible</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              <Link href="/contact">Contactar</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#EE9925] uppercase font-bold">Fácil portabilidad</p>
            <h4 className="text-white/90 font-medium text-xl">Equipo de buceo con excelente tamaño para trasporte</h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            src="/img/product5.jpg"
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                src="/img/about.jpg"
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white">¿Quieres conocer más de nuestro producto?</p>
                <p className="text-tiny text-white">Te mostraremos más información del producto</p>
              </div>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              <Link href="/products">Enséñame</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
