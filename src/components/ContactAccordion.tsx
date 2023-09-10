'use client'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDisclosure } from '@nextui-org/react'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Button } from '@nextui-org/button'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { DeleteIcon } from '@/svg/Icons'
import formatDate from '@/utils/formatDate'
import { type IContact } from '@/types/main'

export default function ContactAccordion ({ contact, index }: { contact: IContact, index: number }) {
  const { _id, name, email, phone, message, createdAt } = contact
  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.delete(`/api/contact/${_id}`)

      toast.success('Se ha eliminado el contacto correctamente.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })

      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    }
  }

  return (
    <div className="z-10 mb-3">
      <Accordion variant="shadow">
        <AccordionItem key={index + 1} aria-label="Accordion 1" subtitle={formatDate(createdAt)} title={name}>
          <div className="space-y-2 mb-5">
            <p className="font-bold">Correo:{' '}
              <span className="font-normal">{email}</span>
            </p>

            <p className="font-bold">Telefono:{' '}
              <span className="font-normal">{phone}</span>
            </p>

            <p className="font-bold">Mensaje:{' '}
              <span className="font-normal">{message}</span>
            </p>
          </div>

          <div className="flex justify-end">
            <Button onPress={onOpen} color="danger">
              <DeleteIcon />
              Borrar Contacto
            </Button>
            <Modal
              backdrop="opaque"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              radius="md"
              classNames={{
                body: 'py-6',
                backdrop: 'bg-[#000000]/50 backdrop-opacity-40',
                base: 'bg-[#000000] dark:bg-zinc-900',
                header: 'border-b-[1px] border-[#333]',
                footer: 'border-t-[1px] border-[#333]',
                closeButton: 'hover:bg-white/5 active:bg-white/10'
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-[#2E9FDB]">¿Estás seguro que quieres eliminar este contacto?</ModalHeader>
                    <ModalBody className="flex flex-col gap-1 text-white">
                      Si ejecutas esta acción este contacto se eliminará permanentemente de la base de datos.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        variant="light"
                        onPress={onClose}
                      >Cancelar</Button>
                      <form onSubmit={handleSubmit}>
                        <Button
                          type="submit"
                          color="danger"
                          onPress={onClose}
                          className="shadow-lg shadow-indigo-500/20"
                        >Eliminar</Button>
                      </form>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
