import type React from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </>
  )
}

