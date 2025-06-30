'use client'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { ChevronDownIcon, Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { humanizeText } from '@/actions/humanizer'
import { HumanizerFormData, HumanizerResult } from '@/types'

const humanizerSchema = z.object({
  text: z.string().min(1, "Please enter some text to humanize"),
  mode: z.enum(["basic", "advanced", "pro"]),
});

const Humanizer = () => {
  const [humanizedText, setHumanizedText] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<HumanizerFormData>({
    resolver: zodResolver(humanizerSchema),
    defaultValues: {
      text: "",
      mode: "basic"
    }
  });

  const currentMode = watch("mode");

  const onSubmit = async (data: HumanizerFormData) => {
    try {
      setHumanizedText("");
      setIsLoading(true);

      const result: HumanizerResult = await humanizeText(data.text, data.mode);

      if (result.success) {
        setHumanizedText(result.humanizedText);
        toast.success("Text humanized successfully!");
      } else {
        toast.error("Failed to humanize text. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to humanize text";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModeChange = (mode: string) => {
    setValue("mode", mode as "basic" | "advanced" | "pro");
  };

  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto gap-8'>
      <div className='flex text-center flex-col gap-2'>

        <h2 className=' text-3xl font-bold'>Humanize AI Text with FIX-IT AI Humanizer</h2>
        <p className='text-muted-foreground text-sm  md:text-base '>
          Fix-IT AI Humanizer is a tool that helps you humanize AI text.
          It uses the latest AI models to humanize text.
          It is a free tool and does not require any signup.

        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='border max-h-7xl shadow-sm rounded-lg'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" className='hover:bg-transparent flex items-center gap-2' variant="ghost">
              <span className='text-sm'>
                {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)}
              </span>
              <ChevronDownIcon className='w-4 h-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Mode</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={currentMode} onValueChange={handleModeChange}>
              <DropdownMenuRadioItem value="basic">Basic</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="advanced">Advanced</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="pro">Pro</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='grid grid-cols-1 border-t gap-2 h-[500px] md:gap-0 md:grid-cols-2'>
          <div className='w-full  h-[300px] relative md:h-full'>
            <Textarea
              {...register("text")}
              placeholder="Enter your text here to humanize it"
              className=" border-none h-full  rounded-none max-h-full p-4 
              focus:outline-none focus:ring-0 focus-visible:ring-0 
              focus:shadow-none focus-visible:shadow-none 
              ring-transparent"
            />
            {errors.text && (
              <p className="absolute top-2 left-4 text-sm text-red-500">
                {errors.text.message}
              </p>
            )}
            <Button
              type="submit"
              size="lg"
              className='absolute bottom-4 right-2'
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Humanizing...
                </>
              ) : (
                "Humanize"
              )}
            </Button>
          </div>

          <div className='h-[300px] md:h-full  border-t md:border-t-0 md:border-l p-4'>
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader className="w-6 h-6 animate-spin" />
                <span className="ml-2">Humanizing your text...</span>
              </div>
            ) : humanizedText ? (
              <div className=" rounded-lg p-3 pr-8 justify-center  max-h-[450px] overflow-y-auto">
                <p className="whitespace-pre-wrap">
                  {humanizedText}</p>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Humanized text will appear here...
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Humanizer