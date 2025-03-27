import React from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
              <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1
                className='text-2xl font-bold  bg:text-primary-foreground'
                >FIX-IT</h1>
                <Button variant={'outline'} >
                    SignIn
                </Button>
                

                </nav>

          </header>
  )
}

export default NavBar