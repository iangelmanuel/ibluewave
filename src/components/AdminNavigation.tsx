'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Avatar } from '@nextui-org/avatar'

export default function AdminNavigation () {
  const router = useRouter()
  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.refresh()
    router.push('/')
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name="Jason Hughes"
          size="sm"
          src="img/hero.JPG"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Sesión de RK2</p>
        </DropdownItem>

        <DropdownItem key="settings">
          <Link href="/admin-dashboard/contacts">Contactos</Link>
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          <button onClick={handleSignOut}>Cerrar Sesión</button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
