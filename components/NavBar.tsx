'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const NavBar = () => {
  const { user} = useUser()

  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
              <nav className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={'/'}
                className='text-2xl font-bold rounded-md p-2 hover:bg-gray-200/10 bg:text-primary-foreground'
                >FIX-IT</Link>{ 
                  user?<UserButton/>:
                <Button variant={'outline'} asChild >
                  <Link href={'/sign-in'}>
                  
                    SignIn
                  </Link>
                </Button>
}

                </nav>

          </header>
  )
}

export default NavBar