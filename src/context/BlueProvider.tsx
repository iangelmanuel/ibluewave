"use client"

import { createContext, useState } from "react"
import { type IContext } from "@/types/main"

const values = {
  loading: true,
  contacts: [],
  getContacts: async () => {}
}

export const BlueWaveContext = createContext<IContext>(values)
export default function BluWaveProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  const getContacts = async () => {
    try {
      const res = await fetch("/api/contacts")
      const data = await res.json()
      setContacts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const valuesExport = {
    loading,
    contacts,
    getContacts
  }

  return (
    <BlueWaveContext.Provider value={valuesExport}>
      {children}
    </BlueWaveContext.Provider>
  )
}
