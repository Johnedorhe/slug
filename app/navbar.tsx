"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
  { href: '/example1', label: 'Example 1' },
  { href: '/example2', label: 'Example 2' },
  { href: '/example3', label: 'Example 3' },
  { href: '/example4', label: 'Example 4' },
]


const NavLink = () => {
  const pathname = usePathname()

  return (
    <div>
      <div className={` ${pathname === '/example1' ? 'bg-blue-500' : 'bg-gray-900'} flex justify-between mb-4 bg-gray-900 p-4`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`text-white ${pathname === link.href ? 'font-bold' : ''}`}>
            {link.label}
          </Link>
        ))}
      </div>
      </div>
  )
}

export default NavLink