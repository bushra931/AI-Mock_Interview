import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeResumeWithAI(resumeText) {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

{
  "score": 0,
  "keywordMatch": 0,
  "formatting": 0,
  "impact": 0,
  "skills": 0,
  "readability": 0,
  "missingKeywords": [],
  "suggestions": []
}

Instructions:
- Give an ATS score out of 100.
- Evaluate keyword match, formatting, impact, skills, and readability.
- Find technologies, tools, and skills that are missing for Software Engineer roles.
- Return exactly 5 personalized suggestions.
- Suggestions MUST be based only on this resume.
- Do NOT give generic advice.
- Mention weak projects, missing technologies, weak bullet points, lack of quantified achievements, poor formatting, missing sections, or missing keywords if applicable.
- If the resume is already strong, suggest advanced improvements instead.
- Return ONLY valid JSON. Do not include markdown or explanations.

Resume:
${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  });

  const text = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return text;
}