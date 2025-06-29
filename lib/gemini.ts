import { createGoogleGenerativeAI } from "@ai-sdk/google";




const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

export const model = google('gemini-1.5-flash');
