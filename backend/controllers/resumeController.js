import { extractResumeText } from "../services/resumeParser.js";
import { analyzeResumeWithAI } from "../services/geminiService.js";

export const analyzeResume = async (req, res) => {

    try {

        const resumeText = await extractResumeText(req.file.buffer);

        const result = await analyzeResumeWithAI(resumeText);

        const json = JSON.parse(result);

        res.json(json);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to analyze resume"
        });

    }

};