import { LocationIcons, PhoneIcon, EmailIcon } from '@/svg/Icons'

export default function Footer () {
  return (
    <>
      <footer className="w-full flex flex-col md:flex-row gap-10 md:gap-60 border-t-2 bg-zinc-950 border-zinc-800 p-5 relative bottom-0 left-0">
        <article className="lg:ml-auto w-full lg:w-[300px] flex flex-col justify-center space-y-3">
          <section className="flex items-center gap-5 mr-auto">
            <div>
              <LocationIcons />
            </div>
            <div>
              <span className="text-sm font-semibold text-[#2E9FDB]">Miramar</span>
              <p className="text-lg font-bold">Barranquilla Atlántico</p>
            </div>
          </section>

          <section className="flex items-center gap-5 mr-auto">
            <div>
              <PhoneIcon />
            </div>
            <div>
              <p className="text-lg font-bold">(Télefono)</p>
            </div>
          </section>

          <section className="flex items-center gap-5 mr-auto">
            <div>
              <EmailIcon />
            </div>
            <div>
              <p className="text-lg font-bold">(Correo)</p>
            </div>
          </section>
        </article>

        <article className="mr-auto w-full lg:w-[400px] flex flex-col items-start justify-center space-y-3">
          <section>
            <h4 className="text-2xl font-extrabold text-[#2E9FDB]">Titulo</h4>
          </section>

          <section>
            <span className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem obcaecati nisi quaerat cum eaque rem, maiores earum voluptas iusto natus itaque, accusamus corporis soluta laborum, voluptatem doloremque at? Dolorem!</span>
          </section>
        </article>
      </footer>

      <footer
        className="flex flex-col lg:flex-row gap-14 lg:gap-20 lg:justify-center lg:items-start border-t-2 border-b-2 bg-zinc-950 border-zinc-800 p-2 relative bottom-0 left-0">
        <p className="text-sm text-center text-[#2E9FDB] font-bold ">iBlue Wave - Todos los derechos reservados {new Date().getFullYear()} &copy;</p>
      </footer>
    </>
  )
}
