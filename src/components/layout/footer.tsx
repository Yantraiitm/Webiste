import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import SocialLink from "@/components/layout/social-link"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/yantra_iitm/", label: "Instagram", hoverColor: "hover:text-pink-500" },
  { icon: Youtube, href: "https://youtube.com/channel/UCC5zPvDOiRG_6M69WVgt8vw", label: "YouTube", hoverColor: "hover:text-red-500" },
  { icon: Linkedin, href: "https://linkedin.com/company/yantra-iitm-bs-robotics-club/about/?viewAsMember=true", label: "LinkedIn", hoverColor: "hover:text-blue-600" },
  { icon: Twitter, href: "https://x.com/Yantra_IITM_BS", label: "Twitter (X)", hoverColor: "hover:text-blue-400" },
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

