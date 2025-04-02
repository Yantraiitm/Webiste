"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  name: string
}

export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-orange-500 ${
        name === "HOME" || isActive
          ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:text-white hover:bg-orange-600"
          : ""
      }`}
    >
      {name}
    </Link>
  )
}

