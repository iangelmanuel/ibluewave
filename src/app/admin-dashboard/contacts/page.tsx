"use client"

import { useEffect } from "react"
import { useBlue } from "@/hook/useBlue"
import LoadingSpinner from "@/components/LoadingSpinner"
import ContactAccordion from "@/components/ContactAccordion"
import NoContacts from "@/components/NoContacts"

export default function AdminDashboardPage() {
  const { loading, contacts, getContacts } = useBlue()

  useEffect(() => {
    getContacts()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  const numberOfContacts = contacts?.length
  const singularOrPlural = numberOfContacts === 1 ? "contacto" : "contactos"
  return (
    <article className="container mx-auto w-full lg:w-5/6 lg:min-h-screen my-10 md:my-40 lg:my-0 lg:mt-10">
      <section className="mx-auto grid w-11/12">
        <div className="z-10 bg-zinc-900 rounded-xl mb-5 p-10">
          <h2 className="text-2xl md:text-6xl lg:text-4xl font-bold text-center mb-2 md:mb-5">
            Administra tus <span className="text-[#2E9FDB]">Contactos</span>
          </h2>
          <p className="text-base md:text-xl text-center text-[#2E9FDB] font-bold">
            Tienes un total de:{" "}
            <span className="text-white">
              {numberOfContacts} {singularOrPlural}
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-11/12">
        {numberOfContacts > 0 ? (
          contacts?.map((contact, index) => (
            <ContactAccordion
              key={contact._id}
              contact={contact}
              index={index}
            />
          ))
        ) : (
          <NoContacts />
        )}
      </section>
    </article>
  )
}
