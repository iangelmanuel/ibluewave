import { NextResponse, type NextRequest } from 'next/server'
import conectDB from '@/libs/db'
import Contact from '@/models/contact'

export async function DELETE (req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  if (id === null || id === undefined) {
    return NextResponse.json({
      message: 'Esta acción no se puede realizar sin un contacto'
    }, {
      status: 404
    })
  }

  try {
    await conectDB()
    const contact = await Contact.findById(id)

    if (contact === null || contact === undefined) {
      return NextResponse.json({
        message: 'No se ha encontrado el contacto'
      }, {
        status: 404
      })
    }

    await contact.deleteOne()
    return NextResponse.json(contact)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'Ha ocurrido un error al eliminar el contacto',
      error
    }, {
      status: 500
    })
  }
}
