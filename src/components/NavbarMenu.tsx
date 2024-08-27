import Link from "next/link"
import { getServerSession } from "next-auth"
import { Image } from "@nextui-org/image"
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar"
import NavbarMenuItem from "./NavbarMenuItem"
import AdminNavigation from "./AdminNavigation"
import { NAVIGATION } from "@/data/navigationItems"

export default async function NavbarMenu() {
  const session = await getServerSession()
  return (
    <Navbar
      shouldHideOnScroll
      className="hidden md:flex border-b border-zinc-800"
    >
      <NavbarBrand>
        <div className="flex gap-3 items-center">
          <Link href="/admin-login">
            <Image
              src="/img/logo.png"
              alt="iBlue Wave"
              className="w-10 h-auto"
            />
          </Link>
          <Link href="/">
            <p className="font-bold text-inherit">iBlue Wave</p>
          </Link>
        </div>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        {NAVIGATION.map((item) => (
          <NavbarMenuItem
            key={item.path}
            item={item}
          />
        ))}
      </NavbarContent>

      <NavbarContent
        as="div"
        justify="end"
      >
        {session?.user?.name === "Admin RK2" && <AdminNavigation />}
      </NavbarContent>
    </Navbar>
  )
}
