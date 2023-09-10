'use client'

import Atropos from 'atropos/react'
import 'atropos/css'

export default function AtroposHeroCard ({ children }: { children: React.ReactNode }) {
  return (
    <Atropos
      shadow={false}
      className="container mx-auto w-full flex justify-center"
    >
      {children}
    </Atropos>
  )
}
