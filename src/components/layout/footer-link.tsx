import Link from "next/link"

interface FooterLinkProps {
  href: string
  name: string
}

export default function FooterLink({ href, name }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:bg-clip-text hover:text-transparent transition-colors"
    >
      {name}
    </Link>
  )
}

