"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CorrectedTextResult, GrammarCorrectorClientProps } from "@/types";
import GrammarCorrectorForm from "./grammar-corrector-form";
import TonesDisplay from "./tones-display";
import { Label } from "../ui/label";
import { CopyButton } from "../copy-button";

export default function GrammarCorrectorClient({ className }: GrammarCorrectorClientProps) {
    const [correctedText, setCorrectedText] = useState<CorrectedTextResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleResult = (result: CorrectedTextResult | null) => {
        setCorrectedText(result);
    };

    const handleLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    return (
        <div className={`grid w-full grid-cols-1 md:grid-cols-2  items-center justify-center flex-col md:flex-row gap-4 ${className || ''}`}>
            <Card className="w-full col-span-1 h-full min-h-[500px]">
                <CardHeader>
                    <CardTitle>Grammar Corrector</CardTitle>
                    <CardDescription>
                        Enter your text below and we&apos;ll correct grammar and provide different tone variations
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <GrammarCorrectorForm onResult={handleResult} isLoading={isLoading} onLoadingChange={handleLoading} />
                    {correctedText && (
                        <div className="space-y-4">
                            <Label className="text-sm font-medium">Corrected Version</Label>
                            <div className="bg-muted relative rounded-lg p-3 pr-8 justify-center min-h-[200px] max-h-[300px] overflow-y-auto">
                                <CopyButton  className="absolute top-1 right-1 bg-white/10 " text={correctedText.base} />
                                <p className="text-lg mr-4 font-medium">
                                    {correctedText.base}
                                </p>
                            </div>
                        </div>

                    ) }
                </CardContent>
            </Card>

            <Card className="h-full w-full min-h-[500px]">
                <CardHeader>
                    <CardTitle>Tones</CardTitle>
                    <CardDescription>
                        {correctedText && !isLoading ? (
                            <p>Your text has been corrected and rewritten in different tones</p>
                        ) : (
                            <p>Click on correct text to generate different tones</p>
                        )}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <TonesDisplay correctedText={correctedText} isLoading={isLoading} />
                </CardContent>
            </Card>
        </div>
    );
} 