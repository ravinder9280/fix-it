import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,

} from "@/components/ui/popover"
import { Textarea } from "./ui/textarea"
import { Plus, X } from "lucide-react"
import { UseFormRegister } from "react-hook-form"
import { GrammarFormData } from "@/types"
import { PopoverClose } from "@radix-ui/react-popover"

export default function PopoverPrompt({ register }: { register: UseFormRegister<GrammarFormData> }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="flex gap-2" variant="outline">
                        <Plus className="h-4 w-4" />
                    <span className="text-xs">
                    Add Instructions
                </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">

                            <h4 className="leading-none font-medium">ADD PROMPT</h4>
                            <PopoverClose asChild>

                            <Button

type="button"
variant="ghost"
size="icon"

aria-label="Close popover"
>
                                <X className="h-4 w-4" />
                            </Button>
                                </PopoverClose>
                            
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Define a prompt to improve the quality of the text.
                        </p>
                    </div>
                    <Textarea
                        placeholder="Enter a prompt"
                        id="prompt"
                        autoFocus
                        
                        {...register("prompt")}  />
                    {/* <div className="flex  justify-between items-center">

                    <Button
                        
                        type="button"
                        variant="ghost"
                            size="icon"
                        
                        aria-label="Close popover"
                    >
                        <X className="h-4 w-4" />
                        </Button>
                        <Button>
                            ADD
                        </Button>
                        </div> */}

                </div>
            </PopoverContent>
        </Popover>
    )
}
