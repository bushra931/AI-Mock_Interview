import { useState } from "react";

import SubjectSelector from "./SubjectSelector";
import DifficultySelector from "./DifficultySelector";
import QuestionCountSelector from "./QuestionCountSelector";

import { Button } from "@/components/ui/button";

type Props = {
  onStart: (
    subject: string,
    difficulty: string,
    questionCount: number
  ) => void;
};

export default function InterviewSetup({
  onStart,
}: Props) {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState(10);

  return (
    <div className="mx-auto max-w-7xl space-y-10">

      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">
          AI Mock Interview
        </h1>

        <p className="text-gray-400 text-lg">
          Prepare for placements with company-style interview questions.
        </p>
      </div>

      <div className="glass rounded-3xl p-8 space-y-10">

        <SubjectSelector
          value={subject}
          onChange={setSubject}
        />

        <DifficultySelector
          value={difficulty}
          onChange={setDifficulty}
        />

        <QuestionCountSelector
          value={questionCount}
          onChange={setQuestionCount}
        />

        <div className="flex justify-center">

          <Button
            size="lg"
            className="px-12 py-7 rounded-2xl text-lg"
            disabled={!subject || !difficulty}
            onClick={() =>
              onStart(
                subject,
                difficulty,
                questionCount
              )
            }
          >
            Start Interview
          </Button>

        </div>

      </div>

    </div>
  );
}