"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import NavLink from "@/components/layout/nav-link"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "About", path: "/about" },
  { name: "GALLERY", path: "/gallery" },
  { name: "PROJECTS", path: "/projects" },
  { name: "EVENTS", path: "/events" },
  { name: "BLOGS", path: "/blogs" },
  { name: "COURSES", path: "/courses" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/LOGO.png" alt="Yantra Logo" width={40} height={40} className="w-auto h-10" />
            <span className="font-bold text-xl hidden sm:inline-block text-gray-400">YANTRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.path} name={link.name} />
            ))}
          </nav>

          <div className="hidden md:block">
            <SignedOut>
              <Link href="/login">
                <Button variant="outline" className="border-gray-400 text-gray-400 hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:text-white transition-colors duration-300">
                  Log In
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-sm font-medium py-2 text-gray-400 hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <SignedOut>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full mt-2 border-white hover:bg-white hover:text-black">
                      Log In
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="pt-4">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

