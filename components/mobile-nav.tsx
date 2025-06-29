import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const MobileNav = ({navigationItems, pathname}:{navigationItems: {title: string, url: string, icon: React.ElementType}[], pathname: string}) => {
  return (
      <Sheet>
          <SheetTrigger asChild>
              <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
              >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="right">
              <div className="flex flex-col gap-6 text-lg font-medium">
                  <Link
                      href={'/'}
                      className="  text-2xl font-bold"
                  >
                      <span className='p-2 rounded-md hover:bg-accent'>FIXIT</span>
                  </Link>
                  <div className='flex flex-col gap-2'>
                      
                  {navigationItems.map((item) => (
                      <SheetClose asChild key={item.title}>
                          <Button  variant={'ghost'} size={'lg'} className={cn(pathname === item.url && 'text-primary bg-primary/10', ' hover:text-primary  justify-start pl-2')} asChild key={item.title}>
                              
                          
                    
                      <Link
                          key={item.title}
                          href={item.url}
                          className=" "
                          >
                                  <item.icon className='size-4 mr-2'/>
                                  <span>
                                  {item.title}
                                  </span>
                      </Link>
                              </Button>
                          </SheetClose>
                  ))}
                  </div>
              </div>
          </SheetContent>
      </Sheet>

          )
}

export default MobileNav