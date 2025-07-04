"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TonesDisplayProps } from "@/types";
import CardSkeleton from "@/components/card-skeleton";
import { CopyButton } from "../copy-button";

export default function TonesDisplay({ correctedText, isLoading }: TonesDisplayProps) {
    if (isLoading) {
        return <CardSkeleton />;
    }

    if (!correctedText) {
        return null;
    }

    return (
        <Tabs className="w-full space-y-8" defaultValue="formal">
            <TabsList className="flex w-full items-center justify-center ">
                {Object.keys(correctedText.tones).map((tone) => (
                    <TabsTrigger key={tone} value={tone}>
                        <p className="font-medium  capitalize">
                            {tone}
                        </p>
                    </TabsTrigger>
                ))}
            </TabsList>

            {Object.entries(correctedText.tones).map(([tone, text]) => (
                <TabsContent key={tone} value={tone}>
                    <div className="bg-muted rounded-lg p-3   justify-center min-h-[200px] max-h-[500px] overflow-y-auto">
                        <div className="relative right-2 top-2 w-full">

                        <CopyButton  className="sticky right-2 top-2 bg-white/10 " text={text} />
                        </div>
                        <p className="text-lg  mr-4 font-medium">
                            {text}
                        </p>
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
} 