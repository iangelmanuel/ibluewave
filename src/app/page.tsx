import Hero from '@/components/Hero'
import HomeContent from '@/components/contents/HomeContent'
import ContactContent from '@/components/contents/ContactContent'
import AboutContent from '@/components/contents/AboutContent'

export const metadata = {
  title: 'iBlue Wave - Inicio',
  description: 'Conoce más sobre nosotros y nuestro trabajo.'
}

export default function HomePage () {
  return (
    <article className="flex flex-col gap-16 md:gap-24 justify-center items-center mb-10 lg:my-10 w-full">
      <section className="flex justify-center w-full">
        <Hero />
      </section>
      <section className="w-5/6 md:w-full z-10">
        <AboutContent />
      </section>
      <section className="z-10">
        <HomeContent />
      </section>
      <section className="w-5/6 md:w-full lg:w-[800px] z-10">
        <ContactContent />
      </section>
    </article>
  )
}
