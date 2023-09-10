import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavbarMenuItem } from '@nextui-org/navbar'
import type { NavigationItem } from '@/types/main'

export default function HamburgerMenuItem ({ item }: { item: NavigationItem }) {
  const { name, path } = item
  const pathname = usePathname()
  return (
    <NavbarMenuItem className="w-full mt-3">
      <Link
        href={path}
        className={`${pathname === path ? 'bg-[#2E9FDB]' : ''} w-full block py-2 px-4 rounded-md text-sm font-bold`}
      >
        {name}
      </Link>
    </NavbarMenuItem>
  )
}
