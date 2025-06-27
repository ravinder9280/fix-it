'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { Home, LayoutDashboard, Settings, Users } from 'lucide-react'

const NavBar = () => {
  const { user } = useUser()
  const navigationItems = [
    {
      title: "Home",
      icon: Home,
      url: "/",
    },
    {
      title: "Grammer",
      icon: LayoutDashboard,
      url: "/grammer",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "#",
    },
    
    {
      title: "Testimonials",
      icon: Settings,
      url: "/#testimonials",
    },
    {
      title: "History",
      icon: Users,
      url: "/history",
      items: [
        {
          title: "Members",
          url: "#",
        },
        {
          title: "Permissions",
          url: "#",
        },
        {
          title: "Invitations",
          url: "#",
        },
      ],
    },
  ]

  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
              <nav className="container  mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={'/'}
                className='text-2xl font-bold rounded-md p-2 hover:bg-gray-200/10 bg:text-primary-foreground'
        >FIX-IT</Link>
          <div className='hidden md:flex items-center gap-8 md:gap-12'>
            {navigationItems.map((item) => (
              <Link className='hover:text-primary' href={item.url} key={item.title}>
                {item.title}
              </Link>
            ))}
          </div>
            { 
                  user?<UserButton/>:
                <Button variant={'outline'} asChild >
                  <Link  href={'/sign-in'}>
                  
                    SignIn
                  </Link>
            </Button>
}

                </nav>

          </header>
  )
}

export default NavBar