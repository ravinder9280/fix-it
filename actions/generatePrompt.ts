'use server';

import { model } from '@/lib/gemini';
import { generateText } from 'ai';
import { PromptGeneratorFormData, PromptGeneratorResult } from '@/types/index';

export async function generatePrompt({ input }: PromptGeneratorFormData): Promise<PromptGeneratorResult> {
    try {
        const prompt = `You are an expert prompt engineer. Create a clear, high-quality AI prompt based on the following user description. Be specific, concise, and maximize the prompt's effectiveness for AI models.\n\nUser description: "${input}"\n\nRespond with only the generated prompt, no explanations.`;
        const response = await generateText({
            model,
            prompt,
        });
        return {
            success: true,
            generatedPrompt: response.text.trim(),
        };
    } catch (error) {
        console.error('[generatePrompt] error:', error);
        return {
            success: false,
            generatedPrompt: '',
        };
    }
}
