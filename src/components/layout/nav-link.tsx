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
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white px-4 py-2 rounded-md hover:opacity-90"
          : "text-gray-400 hover:bg-gradient-to-r hover:from-[#883FE0]  hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent"
      }`}
    >
      {name}
    </Link>
  )
}

