import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  hoverColor: string
}

export default function SocialLink({ href, icon: Icon, label, hoverColor }: SocialLinkProps) {
  return (
    <Link href={href} className={`transition-colors ${hoverColor}`}>
      <Icon size={24} />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

