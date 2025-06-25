"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateCorrectedText } from "@/actions/generateText";
import { z } from "zod";
import CardSkeleton from "@/components/card-skeleton";
import { GrammarFormData } from "@/types";

const grammarSchema = z.object({
    text: z.string().min(1, "Please enter some text to correct"),
});

export default function GrammarCorrector() {
    const [correctedText, setCorrectedText] = useState<{
        base: string;
        tones: Record<string, string>;
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GrammarFormData>({
        resolver: zodResolver(grammarSchema),
    });

    const onSubmit = async (data: GrammarFormData) => {
        try {
            setIsLoading(true);
            const result = await generateCorrectedText({
                input: data.text,
            });

            if (result.success) {
                setCorrectedText({
                    base: result.base,
                    tones: result.tones,
                });
                toast.success("Text corrected successfully!");
            } else {
                toast.error("Failed to correct text. Please try again.");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Failed to correct text";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 p-3 md:p-8 items-center justify-center  flex-col md:flex-row gap-4">
            <Card className="w-full col-span-1 h-full min-h-[500px]">
                <CardHeader>
                    <CardTitle>Grammar Corrector</CardTitle>
                    <CardDescription>
                        Enter your text below and we&apos;ll correct grammar and provide different tone variations
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="text">Text to Correct</Label>
                            <Textarea
                                id="text"
                                placeholder="Enter your text here..."
                                className="min-h-[120px]"
                                {...register("text")}
                            />
                            {errors.text && (
                                <p className="text-sm text-red-500">{errors.text.message}</p>
                            )}
                        </div>

                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading ? (
                                <>
                                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                                    Correcting...
                                </>
                            ) : (
                                "Correct Text"
                            )}
                        </Button>
                    </form>

                    {
                        correctedText && (
                            <div className="space-y-4">
                                <Label className="text-sm font-medium">Corrected Version</Label>
                                <div className=" bg-muted rounded-lg p-3 justify-center min-h-[200px] max-h-[300px] overflow-y-auto" >
                                    <p className="text-lg  font-medium  ">
                                        {correctedText.base}</p>
                                </div>
                            </div>
                        )
                    }
                </CardContent>
            </Card>

            
                
                <Card className="h-full  w-full min-h-[500px]">
                    <CardHeader>
                        <CardTitle>Tones</CardTitle>
                    <CardDescription>
                        { correctedText&&!isLoading?
                        <p>

                            Your text has been corrected and rewritten in different tones
                            </p> : <p>

                                click on correct text to generate different tones
                            </p>

                        }
                        </CardDescription>
                    </CardHeader>


                    <CardContent className="space-y-6">
                    {isLoading ? (
                        
                        <CardSkeleton/>
                    )
                        :
                        correctedText &&
                        <Tabs className="w-full space-y-8 " defaultValue="formal">

                            <TabsList className="flex w-full items-center justify-center gap-2">
                                {Object.keys(correctedText.tones).map((tone) => (
                                    <TabsTrigger key={tone} value={tone}>
                                        <p className="font-medium capitalize">
                                            {tone}
                                        </p>
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {Object.entries(correctedText.tones).map(([tone, text]) => (
                                <TabsContent key={tone} value={tone}>

                                    <div className=" bg-muted rounded-lg p-3 justify-center min-h-[200px] max-h-[500px] overflow-y-auto" >

                                    <p className="text-lg  font-medium  ">
                                        {text}</p>
                                    </div>
                                </TabsContent>
                            ))}
                            

                        </Tabs>
                        

                        
                    }
                    </CardContent>
                </Card>
                    
            
        </div>
    );
}