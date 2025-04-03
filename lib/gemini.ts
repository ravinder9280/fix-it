
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateSentence=async (data:string)=>{
    
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY||"");


      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      
      const result = await model.generateContent(`Generate a JSON response that details the grammatical and spelling errors in the following text: "${data}"
        JSON Should look like this :
       {
  "originalText": "Their are some erors in this sentance.",
  "correctedText": "There are some errors in this sentence.",
  "profeesionlText":"string",
  "rating":number(0-10)
  "errors": [
    {
      "type": "grammar",
      "message": "Incorrect verb form.",
      "location": {
        "start": 0,
        "end": 5
      },
      "suggestions": ["There"]
    },
    {
      "type": "spelling",
      "message": "Misspelled word.",
      "location": {
        "start": 16,
        "end": 21
      },
      "suggestions": ["errors"]
    },
    {
      "type": "grammar",
      "message": "Incorrect word form.",
      "location": {
        "start": 30,
        "end": 38
      },
      "suggestions": ["sentence"]
    }
  ]
}

        your response will be stored into the database dont return any additional text only return JSON.
        `);
        const response = result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        const dietJson = JSON.parse(cleanedText);
        return dietJson;
  }
  // console.log(await generateSentence(
  //     `
  //     Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.
  //     The API integration is flawless. We've reduced our development time by 60% since implementing this solution.
  //     `
      
  //   ))
