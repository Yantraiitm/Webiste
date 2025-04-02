import Link from "next/link"

interface FooterLinkProps {
  href: string
  name: string
}

export default function FooterLink({ href, name }: FooterLinkProps) {
  return (
    <Link href={href} className="hover:text-orange-500 transition-colors">
      {name}
    </Link>
  )
}

