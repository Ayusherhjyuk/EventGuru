import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import NavItems from './NavItems'


const MobileNav = () => {
    return (
        <nav className=' md:hidden'>
            <Sheet>
                <SheetTrigger className=' align-middle'>
                    <Image src="/assets/icons/menu.svg" alt='menu' height={24} width={24} className=' cursor-pointer' />
                </SheetTrigger>
                <SheetContent className=' flex flex-col gap-6 bg-slate-950 text-white md:hidden'>
                    <Image src="/assets/images/logo.jpg" alt='logo' width={88} height={38} />
                    <Separator className=' border border-gray-300' />
                    <NavItems />
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav