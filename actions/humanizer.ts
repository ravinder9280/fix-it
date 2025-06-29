import { model } from "@/lib/gemini";
import { generateText } from "ai";

export async function humanizeText(text: string,mode:"basic" | "advanced"|"pro") {
    const response = await generateText({
        model,
        prompt: `
        You are a humanizer. You are given a text and you need to humanize it.
        The text is: ${text}
        The mode is: ${mode}
        `,
    })
    return response.text
}


console.log(await humanizeText("Humanize AI Text with QuillBot's AI Humanizer!", "basic"))