import React from 'react'
import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
const HistoryPage = async() => {
  const user=await currentUser()
  const data=await prisma.user.findUnique({
    where:{
      clerkId:user?.id
    }
  })
  const grammarCorrectorData=await prisma.grammarCorrector.findMany({
    where: {
      userId: data?.id
      
    },
    select:{
      id:true,
      text: true,
      correctedText: true,
      createdAt:true,
      updatedAt:true,
      tones:{ }
      
    },
    
  })
  console.log(grammarCorrectorData)
  
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>History</h1>
        <p className='text-sm text-gray-500'>View your history of grammar corrections</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {grammarCorrectorData.map((item)=>(
          <div key={item.id} className=' max-w-2xl rounded-md p-4 bg-muted cursor-pointer hover:bg-muted-foreground transition-all duration-300'>
            <h2 className='text-lg truncate font-bold'>{item.text}</h2>
            {/* <p className='text-sm text-gray-500'>{item.correctedText}</p> */}
            <p className='text-sm text-gray-500'>{item.createdAt.toLocaleDateString()}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HistoryPage