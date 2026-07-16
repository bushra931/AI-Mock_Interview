export type Subject =
  | "dsa"
  | "oops"
  | "os"
  | "dbms"
  | "cn";

export type Difficulty =
  | "easy"
  | "medium"
  | "hard";

export interface InterviewQuestion {
  id: number;

  subject: Subject;

  difficulty: Difficulty;

  question: string;

  idealAnswer: string;

  keyConcepts: string[];

  commonMistakes: string[];

  followUpQuestions: string[];

  companies: string[];

  tags: string[];

  estimatedTime: number;
}