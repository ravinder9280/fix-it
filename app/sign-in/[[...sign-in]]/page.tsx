import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex flex-col items-center justify-center h-[calc(100vh-4rem)]'>
    
      <SignIn  />
    </div>
}