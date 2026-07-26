import { createFileRoute } from "@tanstack/react-router";
// import { useMemo, useState } from "react";
import { useEffect, useMemo, useState } from "react";

import { PageHeader } from "@/components/app/PageHeader";
import InterviewSetup from "@/components/interview/setup/InterviewSetup";

import { dsaQuestions } from "@/data/dsa";
import { dbmsQuestions } from "@/data/dbms";
import { osQuestions } from "@/data/os";
import { oopQuestions } from "@/data/oop";
import { cnQuestions } from "@/data/cn";

import type { InterviewQuestion } from "@/types/interview";

import {
  Mic,
  Video,
  MessageSquare,
  Play,
} from "lucide-react";

import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

export const Route = createFileRoute("/_app/interview")({
  component: InterviewPage,
  head: () => ({
    meta: [{ title: "Mock Interview — CareerPilot AI" }],
  }),
});

const tracks = [
  {
    id: "tech",
    title: "Technical",
    desc: "DSA, coding, systems",
    icon: MessageSquare,
  },
  {
    id: "behav",
    title: "Behavioral",
    desc: "STAR method, culture fit",
    icon: Mic,
  },
  {
    id: "hr",
    title: "HR Round",
    desc: "Salary, communication",
    icon: Video,
  },
];

function InterviewPage() {
  const [started, setStarted] = useState(false);

  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState(10);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState<{
    score: number;
    strengths: string[];
    improvements: string[];
  } | null>(null);

  const {
    transcript,
    listening,
    supported,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setAnswer(transcript);
    }
  }, [transcript]);

  const allQuestions = useMemo<InterviewQuestion[]>(() => {
    return [
      ...dsaQuestions,
      ...dbmsQuestions,
      ...osQuestions,
      ...oopQuestions,
      ...cnQuestions,
    ];
  }, []);

  const interviewQuestions = useMemo(() => {
    return allQuestions
      .filter(
        (question) =>
          question.subject.toLowerCase() === subject.toLowerCase()
      )
      .filter(
        (question) =>
          question.difficulty.toLowerCase() === difficulty.toLowerCase()
      )
      .slice(0, questionCount);
  }, [allQuestions, subject, difficulty, questionCount]);

  const currentQuestion = interviewQuestions[currentIndex];

  const submitAnswer = () => {
    if (!currentQuestion || answer.trim() === "") return;

    const score = Number((Math.random() * 3 + 7).toFixed(1));
    
    setFeedback({
      score,
      strengths: [
        "Clear explanation.",
        "Covered the important concepts.",
        "Good communication.",
      ],
      improvements: [
        "Add more examples.",
        "Mention time complexity where applicable.",
      ],
    });
};


const nextQuestion = () => {
  setAnswer("");
  setFeedback(null);

  if (currentIndex < interviewQuestions.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  } else {
    alert("Interview completed!");
  }
};

const endSession = () => {
  setStarted(false);

  setSubject("");
  setDifficulty("");
  setQuestionCount(10);

  setCurrentIndex(0);

  setAnswer("");

  setFeedback(null);
};

//ui setting up 
if (!started) {
  return (
    <>
      <PageHeader
        title={
          <>
            AI <span className="text-gradient">Mock Interview</span>
          </>
        }
        subtitle="Choose your interview preferences."
      />

      <InterviewSetup
        onStart={(selectedSubject, selectedDifficulty, selectedCount) => {
          setSubject(selectedSubject);
          setDifficulty(selectedDifficulty);
          setQuestionCount(selectedCount);

          setCurrentIndex(0);
          setAnswer("");
          setFeedback(null);

          setStarted(true);
        }}
      />
    </>
  );
}

if (interviewQuestions.length === 0) {
  return (
    <>
      <PageHeader
        title="Mock Interview"
        subtitle="No questions available."
        actions={
          <button
            onClick={endSession}
            className="glass rounded-xl px-4 py-2 text-sm"
          >
            Back
          </button>
        }
      />

      <div className="glass rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold">
          No Questions Found
        </h2>

        <p className="mt-3 text-muted-foreground">
          There are no interview questions available for the selected subject
          and difficulty.
        </p>
      </div>
    </>
  );
}

return (
  <>
    <PageHeader
      title={`Mock Interview - ${subject.toUpperCase()}`}
      subtitle={`${difficulty.toUpperCase()} • ${questionCount} Questions`}
      actions={
        <button
          onClick={endSession}
          className="glass rounded-xl px-4 py-2 text-sm"
        >
          End Session
        </button>
      }
    />

    <div className="glass rounded-2xl p-8">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-full btn-primary shrink-0">
          <Mic className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-muted-foreground">
            {subject.toUpperCase()} Interview
          </div>

          <h2 className="mt-2 text-xl font-semibold">
            Question {currentIndex + 1} of {interviewQuestions.length}
          </h2>

          <p className="mt-4 text-lg">
            {currentQuestion?.question}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="glass rounded-full px-3 py-1 text-xs">
              {currentQuestion?.difficulty?.toUpperCase()}
            </span>

            <span className="glass rounded-full px-3 py-1 text-xs">
              {currentQuestion?.estimatedTime} sec
            </span>

            {currentQuestion?.tags?.map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <strong>Companies:</strong>{" "}
            {currentQuestion?.companies?.join(", ")}
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            placeholder="Type your answer here..."
            className="mt-6 w-full glass rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-primary/60"
          />

          <div className="mt-4 flex gap-3">
            {/* <button
              onClick={listening ? stopListening : startListening}
              disabled={!supported} */}
            <button
              onClick={() => {
                console.log("supported:", supported);
                console.log("clicked");
                listening ? stopListening() : startListening();
              }}
              className="glass rounded-xl px-4 py-2 flex items-center gap-2 disabled:opacity-50"
            >
              <Mic className="h-4 w-4" />

              {listening ? "Stop Recording" : "Record Answer"}
            </button>

            <button
              onClick={submitAnswer}
              disabled={!answer.trim()}
              className="btn-primary rounded-xl px-4 py-2 flex items-center gap-2 disabled:opacity-50"
            >
              <Play className="h-4 w-4" />
              Submit Answer
            </button>
          </div>

          {listening && (
            <p className="mt-3 text-sm text-red-500 animate-pulse">
              🎤 Listening...
            </p>
          )}

          {!supported && (
            <p className="mt-3 text-sm text-red-500">
              Speech recognition is not supported in this browser.
            </p>
          )}

          {feedback && (
            <div className="mt-8 rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  AI Feedback
                </h3>

                <div className="text-2xl font-bold text-primary">
                  {feedback.score}/10
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium text-green-500">
                    Strengths
                  </h4>

                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {feedback.strengths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-orange-500">
                    Improvements
                  </h4>

                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {feedback.improvements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextQuestion}
                  className="btn-primary rounded-xl px-4 py-2"
                >
                  {currentIndex === interviewQuestions.length - 1
                    ? "Finish Interview"
                    : "Next Question"}
                </button>
              </div>
            </div>
          )}

          {feedback && currentQuestion && (
            <div className="mt-8 rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold">
                Reference Answer
              </h3>

              <p className="mt-3 text-muted-foreground">
                {currentQuestion.idealAnswer}
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Key Concepts
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {currentQuestion.keyConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="glass rounded-full px-3 py-1 text-xs"
                  >
                    {concept}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Follow-up Questions
              </h3>

              <ul className="mt-3 list-disc pl-5 space-y-2">
                {currentQuestion.followUpQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  </>
);
}