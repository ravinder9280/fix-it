import React from 'react'
import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { CopyButton } from '@/components/copy-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const HistoryPage = async ({params}:{params: {id: string}}) => {
    const user = await currentUser()
    const userData = await prisma.user.findUnique({
        where: {
            clerkId: user?.id
        }
    })
    if (!userData) {
        return <div>User not found</div>
    }
  const grammarCorrector = await prisma.grammarCorrector.findUnique({
    where: {
          id: parseInt(params.id),
        
userId: userData?.id
      },
      select: {
        text: true,
        correctedText: true,
        tones: true,
        createdAt: true,
        updatedAt: true,
      }
      
  })
  if (!grammarCorrector) {
    return <div>Grammar corrector not found</div>
  }
    console.log(grammarCorrector)
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>

        <h2 className='text-2xl  truncate w-full md:w-[80%] font-bold'>
          
          {grammarCorrector?.text}</h2>
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
            <div className='flex flex-col gap-2'>
                  <h3 className='text-lg text-white/80 font-bold'>Original Text</h3>
                  <div className="bg-muted relative rounded-lg p-3  justify-center min-h-[200px] max-h-[300px] overflow-y-auto">
                      
                <p className='text-sm text-white/80'>{grammarCorrector?.text}</p>
                  </div>
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='text-lg text-primary font-bold'>Corrected Text</h3>
                  <div className="bg-muted relative rounded-lg p-3 pr-8  justify-center min-h-[200px] max-h-[300px] text-white/80 text-wrap overflow-y-auto">
                      <CopyButton className="absolute top-1 right-1 bg-white/10 " text={grammarCorrector?.correctedText} />

                <p className='text-sm text-white/80'>{grammarCorrector?.correctedText}</p>
                  </div>
        </div>
        <Card className="h-full w-full min-h-[500px]">
          <CardHeader>
            <CardTitle>Tones</CardTitle>
            <CardDescription>

              <p>Your text has been corrected and rewritten in different tones</p>

            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs className="w-full  space-y-8" defaultValue="formal">
              <TabsList className="flex w-full items-center justify-center ">
                {grammarCorrector.tones.map((tone) => (
                  <TabsTrigger key={tone.id} value={tone.name}>
                    <p className="font-medium  capitalize">
                      {tone.name}
                    </p>
                  </TabsTrigger>
                ))}
              </TabsList>

              {grammarCorrector.tones.map((tone) => (
                <TabsContent key={tone.id} value={tone.name}>
                  <div className="bg-muted rounded-lg p-3 relative justify-center min-h-[200px] max-h-[500px] overflow-y-auto">
                    <CopyButton className="absolute top-1 right-1 bg-white/10 " text={tone.text} />
                    <p className="text-lg  mr-4 font-medium">
                      {tone.text}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

          </CardContent>
        </Card>

          </div>

    

    </div>
  )
}

export default HistoryPage