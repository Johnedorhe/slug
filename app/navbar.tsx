'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

const NavLink = () => {
  const pathname = usePathname()

  // Fix: Href paths now match the CATEGORIES keys exactly
  const links = [
    { name: 't-shirts', href: '/tops' },
    { name: 'jeans', href: '/trousers' },
    { name: 'socks', href: '/socks' },
    { name: 'suits', href: '/corperate' },
  ]

  return (
    <div className="flex gap-4 p-4 bg-gray-100"> 
      {links.map(link => (
        <Link 
          href={link.href} 
          key={link.href} 
          className={`${pathname === link.href ? "font-extrabold text-blue-600" : "text-gray-600 hover:text-black"}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLink
