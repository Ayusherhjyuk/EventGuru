"use client";
import { headerLinks } from '@/constants'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname();
    return (
        <ul className=' md:flex-between flex flex-col justify-center  gap-7 md:flex-row'>
            {headerLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                    <li key={link.route} className={`${isActive && 'text-purple-700 font-bold'} flex-center p-medium-16 whitespace-nowrap`}>
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems