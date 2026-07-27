import pdf from "pdf-parse-new";

export async function extractResumeText(buffer) {
    const data = await pdf(buffer);
    return data.text;
}