import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-8">
            <Image src="/images/LOGO.png" alt="Yantra Logo" width={50} height={50} className="w-auto h-12" />
            <span className="text-2xl font-bold text-gray-400">YANTRA IITM</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-8 text-center">
            <Link href="/login" className="hover:text-orange-500 transition-colors">
              LOGIN
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">
              ABOUT US
            </Link>
            <Link href="/team" className="hover:text-orange-500 transition-colors">
              TEAM
            </Link>
            <Link href="/projects" className="hover:text-orange-500 transition-colors">
              PROJECTS
            </Link>
          </div>

          <div className="flex gap-6 mb-8">
            <Link href="https://facebook.com" className="hover:text-blue-500 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="hover:text-pink-500 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://linkedin.com" className="hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Yantra IITM Inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

