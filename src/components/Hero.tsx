import AtroposHeroCard from './AtroposHeroCard'

export default function Hero () {
  return (
    <AtroposHeroCard>
      <div className="hero-image h-full flex items-center justify-center overflow-hidden relative z-0">
        <div className="px-6 text-center md:px-12 w-[800px]">
          <h1 className="md:mt-2 mb-3 text-xl font-bold tracking-tight md:text-6xl text-[#EE9925]">
            Bienvenido a iBlueWaveTechnology
          </h1>
            <p className="text-sm md:text-xl font-semibold md:leading-10">
              Explorando los Océanos con Compromiso Ambiental
            </p>
        </div>
      </div>
    </AtroposHeroCard>
  )
}
