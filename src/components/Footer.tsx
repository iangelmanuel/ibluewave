import { LocationIcons, PhoneIcon, EmailIcon } from '@/svg/Icons'

export default function Footer () {
  return (
    <>
      <footer className="w-full flex flex-col xl:flex-row gap-20 xl:gap-40 items-center lg:justify-center border-t-2 bg-zinc-950 border-zinc-800 p-5 relative bottom-0 left-0">
        <article className="w-full lg:w-[400px] flex flex-col justify-center items-center space-y-3">
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
              <p className="text-lg font-bold">+57 300 802 9002</p>
            </div>
          </section>

          <section className="flex items-center gap-5 mr-auto">
            <div>
              <EmailIcon />
            </div>
            <div>
              <p className="text-lg font-bold">ibluewavetechnology@gmail.com</p>
            </div>
          </section>
        </article>

        <article className="w-full lg:w-[400px] flex flex-col items-center justify-center space-y-3">
          <section>
            <h4 className="text-2xl font-extrabold text-[#2E9FDB]">Redes Sociales</h4>
          </section>

          <section>
            <div>
              <a
                href="https://www.instagram.com/ibluewavetechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E9FDB] transition duration-300 ease-in-out"
              >Instagram</a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100081811953186&ref=xav_ig_profile_web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E9FDB] transition duration-300 ease-in-out"
              >Facebook</a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/@Soyricardodelatorre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E9FDB] transition duration-300 ease-in-out"
              >YouTube</a>
            </div>
          </section>
        </article>

        <article className="w-full lg:w-[400px] flex flex-col items-center justify-center space-y-3">
          <section>
            <h4 className="text-2xl font-extrabold text-[#2E9FDB] text-center lg:text-start">iBlue Wave Technology</h4>
          </section>

          <section className="flex justify-center xl:justify-start">
            <span className="text-base text-center">En las profundidades del compromiso, iBlueWaveTechnology crea olas de conciencia, donde cada buceo es un viaje hacia la preservación marina.</span>
          </section>
        </article>
      </footer>

      <footer
        className="flex flex-col lg:flex-row gap-14 lg:gap-20 lg:justify-center lg:items-center border-t-2 border-b-2 bg-zinc-950 border-zinc-800 p-2 relative bottom-0 left-0">
        <p className="text-sm text-center text-[#2E9FDB] font-bold ">iBlue Wave - Todos los derechos reservados {new Date().getFullYear()} &copy;</p>
      </footer>
    </>
  )
}
