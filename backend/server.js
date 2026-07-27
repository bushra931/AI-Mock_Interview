import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors());

const upload = multer();

app.post("/api/resume/analyze", upload.single("resume"), (req, res) => {

    console.log(req.file.originalname);

    res.json({

        score:84,

        keywordMatch:78,

        formatting:92,

        impact:65,

        skills:80,

        readability:88,

        missingKeywords:[
            "Docker",
            "CI/CD",
            "REST API"
        ],

        suggestions:[
            "Great use of action verbs.",
            "Add measurable achievements.",
            "Move skills section near the top."
        ]

    });

});

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});