import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

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
            <Link href="/login" className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors">
              Login
            </Link>
            <Link href="/about" className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors">
              About
            </Link>
            <Link href="/team" className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors">
              Team
            </Link>
            <Link href="/projects" className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors">
              Projects
            </Link>
          </div>

          <div className="flex gap-6 mb-8">
            <Link 
              href="https://instagram.com/yantra_iitm/" 
              className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://youtube.com/channel/UCC5zPvDOiRG_6M69WVgt8vw" 
              className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link 
              href="https://x.com/Yantra_IITM_BS" 
              className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter (X)</span>
            </Link>
            <Link 
              href="https://linkedin.com/company/yantra-iitm-bs-robotics-club/about/?viewAsMember=true" 
              className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
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

