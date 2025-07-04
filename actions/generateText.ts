'use server';

import { generateObject } from 'ai';
import { z } from 'zod';
import { GenerateOptions } from '@/types';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { model } from '@/lib/gemini';

export async function generateCorrectedText({
    input,
    prompt: userPrompt,
}: GenerateOptions): Promise<{
    success: boolean;
    base: string;
    tones: Record<string, string>;
    prompt?: string;
}> {
    try {
        // Get the current user
        const user = await currentUser();
        if (!user) {
            throw new Error('User not authenticated');
        }

        // Find the user in our database
        const dbUser = await prisma.user.findUnique({
            where: { email: user.emailAddresses[0]?.emailAddress },
        });

        if (!dbUser) {
            throw new Error('User not found in database');
        }

        console.log(userPrompt);

        const tonesList = ['formal', 'friendly', 'casual', 'assertive'];

        const prompt = `
You are a grammar expert and style rewriter.

1. First, correct the grammar of the following text by following the user instructions .
2. Then rewrite the corrected text in the following tones: ${tonesList.join(', ')}.
3. follow this user instructions: ${userPrompt}

Respond in **valid JSON** with this shape:
{
  "base": "<corrected version>",
  "tones": {
    "formal": "<formal tone version>",
    "friendly": "<friendly tone version>",
    ...
  }
}

Text:
"""${input}"""
`;

        const { object } = await generateObject({
            model,
            prompt,
            schema: z.object({
                base: z.string().describe("The corrected version of the input text"),
                tones: z.object({
                    formal: z.string().describe("Formal tone version"),
                    friendly: z.string().describe("Friendly tone version"),
                    casual: z.string().describe("Casual tone version"),
                    assertive: z.string().describe("Assertive tone version"),
                }).describe("Different tone variations of the corrected text"),
            }),
        });

        // Store the grammar correction in the database
        const grammarCorrector = await prisma.grammarCorrector.create({
            data: {
                userId: dbUser.id,
                text: input,
                correctedText: object.base,
                tones: {
                    create: Object.entries(object.tones).map(([name, text]) => ({
                        name,
                        text,
                    })),
                },
            },
            include: {
                tones: true,
            },
        });

        console.log('Grammar correction stored in database:', grammarCorrector.id);

        return {
            success: true,
            base: object.base,
            tones: object.tones,
        };
    } catch (err) {
        console.error('[generateCorrectedText] error:', err);
        return {
            success: false,
            base: '',
            tones: {},
        };
    }
}
