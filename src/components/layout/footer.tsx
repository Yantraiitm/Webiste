import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import FooterLink from "@/components/layout/footer-link"
import SocialLink from "@/components/layout/social-link"

const footerLinks = [
  { name: "LOGIN", href: "/login" },
  { name: "ABOUT US", href: "/about" },
  { name: "TEAM", href: "/team" },
  { name: "PROJECTS", href: "/projects" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", hoverColor: "hover:text-blue-500" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", hoverColor: "hover:text-blue-400" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", hoverColor: "hover:text-pink-500" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:text-blue-600" },
]

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
            {footerLinks.map((link) => (
              <FooterLink key={link.name} href={link.href} name={link.name} />
            ))}
          </div>

          <div className="flex gap-6 mb-8">
            {socialLinks.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
                hoverColor={social.hoverColor}
              />
            ))}
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Yantra IITM Inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

