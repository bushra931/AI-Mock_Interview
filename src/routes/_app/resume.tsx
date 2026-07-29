import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { Upload, FileText, CheckCircle2, AlertTriangle, XCircle, Sparkles } from "lucide-react";
import type { ATSResult } from "../../types/ats";
import { analyzeResume } from "../../lib/resumeApi";

export const Route = createFileRoute("/_app/resume")({
  component: ResumePage,
  head: () => ({ meta: [{ title: "Resume ATS — CareerPilot AI" }] }),
});

function setLocalStats(score: number, readability: number) {
  try {
    const raw = localStorage.getItem("careerpilot_users");
    if (!raw) return;
    const users = JSON.parse(raw);
    const email = localStorage.getItem("careerpilot_session");
    if (!email) return;
    const user = users.find((u: any) => u.email === email);
    if (!user) return;
    if (!user.stats) user.stats = { readinessScore: 0, skillsMastered: 0, totalSkills: 32, atsScore: null, mockInterviews: 0, streak: 0, technicalSkills: 0, communication: 0, problemSolving: 0, resumeQuality: 0, interviewConfidence: 0 };
    user.stats.atsScore = score;
    user.stats.resumeQuality = readability;
    if (!user.activities) user.activities = [];
    user.activities.unshift({ text: `Resume ATS scan — score ${score}`, time: "Just now" });
    localStorage.setItem("careerpilot_users", JSON.stringify(users));
  } catch (e) {
    console.error("setLocalStats error:", e);
  }
}

function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<ATSResult | null>(null);

  const analyze = async () => {
    if (!file) return;
    try {
      setAnalyzing(true);
      const data = await analyzeResume(file);
      setResult(data);
      setLocalStats(data.score, data.readability);
      setDone(true);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze resume.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <>
      <PageHeader
        title={<>Resume <span className="text-gradient">ATS Analyzer</span></>}
        subtitle="Upload your resume, get an ATS score and AI-powered suggestions."
      />

      {!done && (
        <label className="glass rounded-3xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-colors border-2 border-dashed border-white/10">
          <div className="grid h-16 w-16 place-items-center rounded-2xl btn-primary mb-4">
            <Upload className="h-7 w-7" />
          </div>
          <div className="font-semibold text-lg">Drop your resume here</div>
          <div className="text-sm text-muted-foreground mt-1">PDF or DOCX · max 5MB</div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
           onChange={(e) => {
              if (e.target.files?.length) {
                  setFile(e.target.files[0]);
              }
          }}
          />
          {file && (
            <div className="mt-6 flex items-center gap-2 glass rounded-xl px-4 py-2">
              <FileText className="h-4 w-4 text-primary-glow" />
              <span className="text-sm">{file.name}</span>
            </div>
          )}
          {file && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); analyze(); }}
              disabled={analyzing}
              className="mt-6 btn-primary rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2 disabled:opacity-60"
            >
              <Sparkles className="h-4 w-4" />
              {analyzing ? "Analyzing..." : "Analyze with AI"}
            </button>
          )}
        </label>
      )}

      {done && (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="relative h-40 w-40">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="42" strokeWidth="10" className="stroke-white/10" fill="none" />
                <circle
                  cx="50" cy="50" r="42" strokeWidth="10" fill="none"
                  stroke="url(#g1)" strokeLinecap="round"
                 strokeDasharray={`${((result?.score ?? 0) / 100) * 264} 264`}
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.24 295)" />
                    <stop offset="100%" stopColor="oklch(0.75 0.2 300)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div>
                  <div className="text-4xl font-bold text-gradient">{result?.score}</div>
                  <div className="text-xs text-muted-foreground">ATS Score</div>
                </div>
              </div>
            </div>
            <div className="mt-4 font-semibold">Strong match</div>
            <div className="text-xs text-muted-foreground">for Software Engineer roles</div>
          </div>

          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <h3 className="font-semibold mb-4">Breakdown</h3>
            {[
              { label: "Keyword match", value: result?.keywordMatch ?? 0 },
              { label: "Formatting & parseability", value: result?.formatting ?? 0 },
              { label: "Impact & metrics", value: result?.impact ?? 0 },
              { label: "Skills coverage", value: result?.skills ?? 0 },
              { label: "Readability", value: result?.readability ?? 0 },
            ].map((r) => (
              <div key={r.label} className="mb-3">
                <div className="flex justify-between text-sm mb-1"><span>{r.label}</span><span className="text-muted-foreground">{r.value}%</span></div>
                <div className="h-2 bg-white/5 rounded-full">
                  <div className="h-full rounded-full" style={{ width: `${r.value}%`, background: "var(--gradient-primary)" }} />
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 lg:col-span-3">
            <h3 className="font-semibold mb-4">AI Suggestions</h3>
               <ul className="space-y-3">
    {result?.suggestions?.map((text, i) => (
      <li key={i} className="flex items-start gap-3 text-sm">
        <AlertTriangle className="h-5 w-5 shrink-0 text-orange-400" />
        <span>{text}</span>
      </li>
    ))}
  </ul>

  {result?.missingKeywords?.length ? (
    <div className="mt-6">
      <h4 className="font-semibold mb-2 text-rose-400">
        Missing Keywords
      </h4>

      <div className="flex flex-wrap gap-2">
        {result.missingKeywords.map((keyword) => (
          <span
            key={keyword}
            className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-sm"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  ) : null}

            <div className="mt-6 flex gap-3">
              <button onClick={() => { setDone(false); setFile(null); setResult(null);}} className="glass rounded-xl px-4 py-2 text-sm">Analyze another</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
