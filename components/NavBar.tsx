'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { Bot, History, Home, Languages, Speech} from 'lucide-react'
import MobileNav from './mobile-nav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const NavBar = () => {
  const { user } = useUser()
  const pathname = usePathname()
  const navigationItems = [
    {
      title: "Home",
      icon: Home,
      url: "/",
    },
    {
      title: "Grammer",
      icon: Languages,
      url: "/grammer",
    },
    {
      title: "Humanizer",
      icon: Speech,
      url: "/humanizer",
    },
    
    {
      title: "Prompt Generator",
      icon: Bot,
      url: "/prompt-generator",
    },
    {
      title: "History",
      icon: History,
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
        <div className='flex items-center gap-2'>
          <MobileNav navigationItems={navigationItems} pathname={pathname} />


                <Link href={'/'}
                className='text-2xl font-bold rounded-md px-2 md:p-2 hover:bg-accent bg:text-primary-foreground'
                >FIX-IT</Link>
                </div>
          <div className='hidden md:flex items-center   lg:gap-6'>
          {navigationItems.map((item) => (
              <Button className={cn(pathname === item.url && 'text-primary bg-primary/10')} variant={'ghost'} asChild key={item.title}>
              
              <Link className='hover:text-primary' href={item.url} key={item.title}>
                <item.icon className='size-4 mr-2'/>
                <span>
                {item.title}
                </span>
              </Link>
              </Button>
            ))}
        </div>
        <div className='flex items-center gap-2'>

            { 
                  user?<UserButton/>:
                <Button variant={'outline'} asChild >
                  <Link  href={'/sign-in'}>
                  
                    SignIn
                  </Link>
              </Button>
            
}
                  </div>

                </nav>

          </header>
  )
}

export default NavBar