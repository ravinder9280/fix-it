"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

function CopyButton({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "disabled:opacity-100",
                            className,
                        )}
                        onClick={handleCopy}
                        aria-label={copied ? "Copied" : "Copy to clipboard"}
                        disabled={copied}
                        type="button"
                    >
                        <div
                            className={cn(
                                "transition-all",
                                copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                            )}
                        >
                            <Check className="stroke-emerald-500" size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                        <div
                            className={cn(
                                "absolute transition-all",
                                copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                            )}
                        >
                            <Copy size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="px-2 py-1 text-xs">Click to copy</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export { CopyButton };
