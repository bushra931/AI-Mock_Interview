import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { CheckCircle2, Circle, PlayCircle, BookOpen, Video, Code2 } from "lucide-react";

export const Route = createFileRoute("/_app/roadmap")({
  component: RoadmapPage,
  head: () => ({ meta: [{ title: "Roadmap — CareerPilot AI" }] }),
});

type Step = { id: string; title: string; type: "read" | "video" | "code"; hours: number; done?: boolean };
type Phase = { title: string; weeks: string; steps: Step[] };

const initialPhases: Phase[] = [
  {
    title: "Foundations",
    weeks: "Weeks 1–2",
    steps: [
      { id: "1", title: "JavaScript deep dive: closures, async, prototypes", type: "read", hours: 6, done: true },
      { id: "2", title: "Git & GitHub workflows", type: "video", hours: 2, done: true },
      { id: "3", title: "HTML/CSS layout patterns", type: "code", hours: 4, done: true },
    ],
  },
  {
    title: "Core CS",
    weeks: "Weeks 3–5",
    steps: [
      { id: "4", title: "Arrays, strings, hash maps (30 problems)", type: "code", hours: 15, done: true },
      { id: "5", title: "Trees & Graphs (traversals, BFS/DFS)", type: "code", hours: 12, done: false },
      { id: "6", title: "Dynamic Programming patterns", type: "video", hours: 8, done: false },
    ],
  },
  {
    title: "System Design",
    weeks: "Weeks 6–8",
    steps: [
      { id: "7", title: "Scalability, caching, load balancing", type: "read", hours: 6, done: false },
      { id: "8", title: "Design URL shortener case study", type: "video", hours: 3, done: false },
      { id: "9", title: "Design chat app — do it yourself", type: "code", hours: 5, done: false },
    ],
  },
  {
    title: "Placement Prep",
    weeks: "Weeks 9–10",
    steps: [
      { id: "10", title: "Behavioral STAR framework", type: "read", hours: 2, done: false },
      { id: "11", title: "5 mock interviews", type: "video", hours: 5, done: false },
      { id: "12", title: "Company-specific prep (top 5 targets)", type: "code", hours: 8, done: false },
    ],
  },
];

const iconFor = { read: BookOpen, video: Video, code: Code2 } as const;

function RoadmapPage() {
  const [phases, setPhases] = useState(initialPhases);
  const toggle = (pi: number, si: number) => {
    setPhases((p) => p.map((ph, i) => i !== pi ? ph : ({
      ...ph,
      steps: ph.steps.map((s, j) => j === si ? { ...s, done: !s.done } : s),
    })));
  };

  const totalSteps = phases.reduce((a, p) => a + p.steps.length, 0);
  const doneSteps = phases.reduce((a, p) => a + p.steps.filter((s) => s.done).length, 0);
  const progress = Math.round((doneSteps / totalSteps) * 100);

  return (
    <>
      <PageHeader
        title={<>Your personalized <span className="text-gradient">roadmap</span></>}
        subtitle="AI-generated based on your goal: Software Engineer"
      />

      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="font-semibold">Overall Progress</div>
            <div className="text-xs text-muted-foreground">{doneSteps} of {totalSteps} steps complete</div>
          </div>
          <div className="text-2xl font-bold text-gradient">{progress}%</div>
        </div>
        <div className="h-2 bg-white/5 rounded-full">
          <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "var(--gradient-primary)" }} />
        </div>
      </div>

      <div className="space-y-6">
        {phases.map((phase, pi) => (
          <div key={phase.title} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">{phase.title}</h3>
                <div className="text-xs text-muted-foreground">{phase.weeks}</div>
              </div>
              <PlayCircle className="h-5 w-5 text-primary-glow" />
            </div>
            <ul className="space-y-2">
              {phase.steps.map((step, si) => {
                const Icon = iconFor[step.type];
                return (
                  <li key={step.id}>
                    <button
                      onClick={() => toggle(pi, si)}
                      className={`w-full flex items-center gap-3 rounded-xl p-3 text-left transition-colors ${
                        step.done ? "bg-emerald-500/10" : "hover:bg-white/5"
                      }`}
                    >
                      {step.done ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                      )}
                      <Icon className="h-4 w-4 text-primary-glow shrink-0" />
                      <span className={`flex-1 text-sm ${step.done ? "line-through text-muted-foreground" : ""}`}>
                        {step.title}
                      </span>
                      <span className="text-xs text-muted-foreground">{step.hours}h</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
