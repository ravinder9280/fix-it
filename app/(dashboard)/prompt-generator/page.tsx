import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Zap } from 'lucide-react'
import React from 'react'

const PromptGeneratorPage = () => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto gap-8'>
      <div className='flex text-center flex-col gap-2'>
        <h2 className=' text-2xl md:text-3xl font-bold'>Generate AI Prompts with FIX-IT AI Prompt Generator</h2>
        <p className='text-muted-foreground text-sm  md:text-base '>
          Fix-IT AI Prompt Generator is a tool that helps you generate AI prompts  ,create high-quality prompts and take full advantage of AI tools like ChatGPT..
        </p>
          </div>
          <div className='flex bg-muted rounded-lg p-4  md:p-6 flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                  <label htmlFor="prompt">Generate a Prompt For...</label>
                  <Textarea
                      className='text-lg h-48 outline-none'
                  
                      placeholder='Describe what prompt you want to create. Be specific, and explain your goals and purpose. Here is an example: Create a prompt for writing an SEO-friendly meta description.'
                  />
                  
              </div>
              <div className='flex justify-end'>
                  <Button className='text-lg md:p-6' size={'lg'} >
                      <Zap className='w-6 h-6 mr-2' />
                      <span>
                          Generate Prompt
                      </span>

                  </Button>
              </div>
              

          </div>
    </div>
  )
}

export default PromptGeneratorPage