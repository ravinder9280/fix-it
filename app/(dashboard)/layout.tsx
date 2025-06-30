import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <section className=" p-4  flex items-center justify-center  md:p-8 lg:p-12  h-full w-full ">
      {children}
    </section>
  )
}

export default Layout