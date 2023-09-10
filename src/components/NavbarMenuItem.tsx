'use client'

import { usePathname } from 'next/navigation'
import { NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import type { NavigationItem } from '@/types/main'

export default function NavbarMenuItem ({ item }: { item: NavigationItem }) {
  const { path, name } = item
  const pathname = usePathname()
  return (
    <NavbarItem>
      <Link
        href={path}
        className={`${
          path === pathname
          ? 'px-3 py-1 bg-[#2E9FDB] rounded-full font-bold'
          : 'hover:text-zinc-400 font-bold'
        }`}
      >
        {name}
      </Link>
    </NavbarItem>
  )
}
