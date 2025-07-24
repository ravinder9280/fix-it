"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Loader, Zap } from "lucide-react";
import { z } from "zod";
import { generatePrompt } from "@/actions/generatePrompt";
import { PromptGeneratorFormData, PromptGeneratorResult } from "@/types";
import React from "react";
import CardSkeleton from "./card-skeleton";

const promptSchema = z.object({
    input: z.string().min(1, "Please describe the prompt you want to generate"),
});

export default function PromptGeneratorForm() {
    const [result, setResult] = React.useState<PromptGeneratorResult | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PromptGeneratorFormData>({
        resolver: zodResolver(promptSchema),
    });

    const onSubmit = async (data: PromptGeneratorFormData) => {
        setResult(null);
        setIsLoading(true);
        try {
            const res = await generatePrompt({ input: data.input });
            if (res.success) {
                setResult(res);
                toast.success("Prompt generated successfully!");
            } else {
                toast.error("Failed to generate prompt. Please try again.");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Failed to generate prompt";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <Card className="bg-muted/60 rounded-lg p-4 md:p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="input">Generate a Prompt For...</label>
                    <Textarea
                        id="input"
                        className="text-base h-48 outline-none"
                        placeholder="Describe what prompt you want to create. Be specific, and explain your goals and purpose. Here is an example: Create a prompt for writing an SEO-friendly meta description."
                        {...register("input")}
                    />
                    {errors.input && (
                        <p className="text-sm text-red-500">{errors.input.message}</p>
                    )}
                </div>
                <div className="flex justify-end">
                    <Button type="submit" className="text-lg md:p-6" size={"lg"} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader className="w-4 h-4 mr-2 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Zap className="w-6 h-6 mr-2" />
                                <span>Generate Prompt</span>
                            </>
                        )}
                    </Button>
                </div>
            </Card>

            {
                isLoading &&
                <Card className="min-h-[250px] space-y-4 p-4 md:p-6">
                        <CardSkeleton/>
                    
                </Card>
            }
            {result&&result.generatedPrompt&&

                <Card className="min-h-[250px] space-y-4 p-4 md:p-6">
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <p className="text-lg">Enhanced Prompt</p>
                        {result && result.generatedPrompt && (
                            <CopyButton text={result.generatedPrompt} />
                        )}
                    </div>
                </CardTitle>
                <CardContent className="bg-muted/60 min-h-[200px] p-2 rounded-lg">
                    <p className="whitespace-pre-wrap">
                        {isLoading
                            ? "Generating your prompt..."
                            : result && result.generatedPrompt
                                ? result.generatedPrompt
                                : "Generated prompt will appear here..."}
                    </p>
                </CardContent>
            </Card>
                            }
        </form>
    );
} 