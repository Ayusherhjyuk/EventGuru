
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'
import MobileNav from './MobileNav'


const Header = () => {
  return (
    <header className=' w-full border-b'>
      {/* //wrapper ---go to global css */}

      <div className=' wrapper flex items-center justify-between'>
        <Link href="/" className=' w-36'>
          <Image alt='eventguru logo' src="/assets/images/logo.jpg" width={88} height={38} />
        </Link>

        <SignedIn>
          <nav className=' md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className=' flex w-32 justify-end gap-3'>

          <SignedOut>
            <Button asChild className=' text-lg rounded-full' >
              <Link href="/sign-in">Login</Link>
            </Button>
            {/* <SignInButton /> */}
          </SignedOut>

          <SignedIn>
            <UserButton afterSwitchSessionUrl='/' />
            <MobileNav />
          </SignedIn>

        </div>
      </div>
    </header>
  )
}

export default Header