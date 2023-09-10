import ContactForm from '../ContactForm'

export default function ContactContent () {
  return (
    <div className="container mx-auto w-full">
      <section className="mb-5">
        <h3 className="text-4xl text-center font-bold text-[#2E9FDB]">¿Estas interesado? ¡Contactanos!</h3>
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  )
}
