"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname()

  if (pathname.startsWith("/studio")) {
    return <main className="flex-grow">{children}</main>
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </>
  )
}

