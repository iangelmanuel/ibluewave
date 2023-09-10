import NoContactsAnimation from './NoContactsAnimation'

export default function NoContacts () {
  return (
    <div className="bg-zinc-900 rounded-xl mb-5 p-10 z-10">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-center mb-2 md:mb-5">
          No tienes <span className="text-[#2E9FDB]">Contactos</span> por revisar
        </h2>
      </div>
      <div className="flex justify-center">
        <NoContactsAnimation />
      </div>
    </div>
  )
}
