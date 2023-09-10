'use client'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { nameValidation, emailValidation, phoneValidation, messageValidation } from '@/validations/contactValidations'

export default function ContactForm () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(async ({ name, email, phone, message }) => {
    const contactData = {
      name,
      email,
      phone,
      message
    }

    try {
      const { data } = await axios.post('/api/contacts', contactData)
      console.log(data)
      reset()
      toast.success('Se ha enviado correctamente tu información, ¡te estaremos contactando en breves!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido un error, intenta mas tarde', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    }
  })

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="bg-zinc-950 border-2 border-zinc-800 p-5 rounded-xl"
    >
      <div className="space-y-5">
        <Input
          type="text"
          variant="bordered"
          label="Nombre"
          {...register('name', nameValidation)}
        />
        {(errors.name !== null) && <span className="text-sm text-red-500">{errors.name?.message as string}</span>}
        <Input
          type="email"
          variant="bordered"
          label="Correo Electronico"
          {...register('email', emailValidation)}
        />
        {(errors.email !== null) && <span className="text-sm text-red-500">{errors.email?.message as string}</span>}
        <Input
          type="phone"
          variant="bordered"
          label="Telefono"
          {...register('phone', phoneValidation)}
        />
        {(errors.phone !== null) && <span className="text-sm text-red-500">{errors.phone?.message as string}</span>}
        <Textarea
          variant="bordered"
          label="Mensaje"
          {...register('message', messageValidation)}
        />
        {(errors.message !== null) && <span className="text-sm text-red-500">{errors.message?.message as string}</span>}
      </div>

      <div className="flex justify-end mt-3">
        <Button
          type="submit"
          color="primary"
          size="md"
          className="w-full lg:w-auto"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
