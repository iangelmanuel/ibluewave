import { NextResponse, type NextRequest } from 'next/server'
import conectDB from '@/libs/db'
import Contact from '@/models/contact'
import validateEmail from '@/utils/validateEmail'

export async function GET (req: NextRequest) {
  try {
    await conectDB()
    const contacts = await Contact.find().where().sort({ createdAt: -1 })
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'Ha ocurrido un error al obtener los contactos',
      error
    }, {
      status: 500
    })
  }
}

export async function POST (req: NextRequest) {
  const { name, email, phone, message } = await req.json()
  const data = [name, email, phone, message]

  if (data.includes(undefined) || data.includes('')) {
    return NextResponse.json({
      message: 'Todos los campos son obligatorios'
    }, {
      status: 400
    })
  }

  if (!validateEmail(email)) {
    return NextResponse.json({
      message: 'El email no es válido'
    }, {
      status: 400
    })
  }

  if (phone.length < 10) {
    return NextResponse.json({
      message: 'El teléfono debe tener al menos 10 caracteres'
    }, {
      status: 400
    })
  }

  if (message.length < 10) {
    return NextResponse.json({
      message: 'El mensaje debe tener al menos 10 caracteres'
    }, {
      status: 400
    })
  }

  try {
    await conectDB()
    const contactData = new Contact({
      name,
      email,
      phone,
      message
    })

    await contactData.save()
    return NextResponse.json({ message: contactData }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'Ha ocurrido un error al crear el contacto',
      error
    }, {
      status: 500
    })
  }
}
