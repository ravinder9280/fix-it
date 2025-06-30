'use server';

import { model } from "@/lib/gemini";
import { generateText } from "ai";
import { HumanizerResult } from "@/types";

export async function humanizeText(text: string, mode: "basic" | "advanced" | "pro"): Promise<HumanizerResult> {
    try {
        const modePrompts = {
            basic: "Make this text sound more natural and human-like while keeping the same meaning.",
            advanced: "Transform this text to sound completely human-written with natural flow, varied sentence structure, and conversational tone.",
            pro: "Rewrite this text as if written by a skilled human writer, maintaining the core message while adding personality, natural transitions, and engaging language."
        };

        const response = await generateText({
            model,
            prompt: `
            You are an expert text humanizer. Your task is to make AI-generated text sound more natural and human-written.

            Instructions: ${modePrompts[mode]}
            
            Original text: "${text}"
            
            Please provide only the humanized version without any explanations or additional text.
            `,
        });

        return {
            success: true,
            humanizedText: response.text
        };
    } catch (error) {
        console.error('[humanizeText] error:', error);
        return {
            success: false,
            humanizedText: ''
        };
    }
}

