export interface ATSResult {
  score: number;
  keywordMatch: number;
  formatting: number;
  impact: number;
  skills: number;
  readability: number;
  missingKeywords: string[];
  suggestions: string[];
}