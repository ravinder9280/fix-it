"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateCorrectedText } from "@/actions/generateText";
import { z } from "zod";
import { GrammarFormData, GrammarCorrectorFormProps } from "@/types";
import { Loader } from "lucide-react";

const grammarSchema = z.object({
    text: z.string().min(1, "Please enter some text to correct"),
});

export default function GrammarCorrectorForm({ onResult, onLoadingChange, isLoading }: GrammarCorrectorFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GrammarFormData>({
        resolver: zodResolver(grammarSchema),
    });

    const onSubmit = async (data: GrammarFormData) => {
        try {
            onResult(null);
            onLoadingChange(true);

            const result = await generateCorrectedText({
                input: data.text,
            });

            if (result.success) {
                onResult(result);
                toast.success("Text corrected successfully!");
            } else {
                toast.error("Failed to correct text. Please try again.");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Failed to correct text";
            toast.error(errorMessage);
        } finally {
            onLoadingChange(false);
        }
    };

    return (
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
    );
} 