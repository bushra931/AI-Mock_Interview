import type { ATSResult } from "../types/ats";

export async function analyzeResume(file: File): Promise<ATSResult> {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await fetch("http://localhost:8000/api/resume/analyze", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze resume");
  }

  return response.json();
}