'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Image } from '@nextui-org/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu } from '@nextui-org/navbar'
import HamburgerMenuItem from './HamburgerMenuItem'
import AdminNavigation from './AdminNavigation'
import { NAVIGATION } from '@/data/navigationItems'

export default function HamburgerMenu () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { status } = useSession()
  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="block md:hidden border-b border-zinc-800"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-3">
          <Link href="/admin-login">
            <Image
              src="/img/logo.png"
              alt="iBlue Wave logo"
            />
          </Link>
          <Link href="/">
            <p className="font-bold text-inherit">iBlue Wave</p>
          </Link>
        </NavbarBrand>

        <NavbarBrand className="gap-3">
          <NavbarContent as="div" className="items-center" justify="end">
            {status === 'authenticated' && (
              <AdminNavigation />
            )}
          </NavbarContent>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {NAVIGATION.map(item => (
          <HamburgerMenuItem
            key={item.path}
            item={item}
          />
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
