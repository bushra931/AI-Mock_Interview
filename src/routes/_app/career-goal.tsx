import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { Sparkles, CheckCircle2, XCircle, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/_app/career-goal")({
  component: CareerGoalPage,
  head: () => ({ meta: [{ title: "Career Goal — CareerPilot AI" }] }),
});

const goals = [
  { id: "swe", title: "Software Engineer", desc: "Full-stack / Backend / Frontend" },
  { id: "ds", title: "Data Scientist", desc: "ML, analytics, statistics" },
  { id: "pm", title: "Product Manager", desc: "Strategy, execution, analytics" },
  { id: "ux", title: "UX Designer", desc: "Research, prototyping, design systems" },
  { id: "cyber", title: "Cybersecurity", desc: "SOC, pentesting, cloud sec" },
  { id: "cloud", title: "Cloud / DevOps", desc: "AWS, K8s, CI/CD" },
];

const skillsMap: Record<string, { have: string[]; gap: { name: string; level: number }[] }> = {
  swe: {
    have: ["JavaScript", "React", "Git", "HTML/CSS", "SQL basics"],
    gap: [
      { name: "System Design", level: 20 },
      { name: "Data Structures & Algorithms", level: 55 },
      { name: "Node.js / Backend", level: 40 },
      { name: "Testing (Jest, Playwright)", level: 30 },
    ],
  },
  ds: { have: ["Python", "SQL", "Pandas"], gap: [{ name: "ML Algorithms", level: 30 }, { name: "Deep Learning", level: 15 }, { name: "MLOps", level: 10 }] },
  pm: { have: ["Communication", "Excel"], gap: [{ name: "SQL for Analytics", level: 25 }, { name: "Product Metrics", level: 40 }, { name: "Roadmapping", level: 35 }] },
  ux: { have: ["Figma"], gap: [{ name: "User Research", level: 30 }, { name: "Prototyping", level: 50 }, { name: "Design Systems", level: 25 }] },
  cyber: { have: ["Networking"], gap: [{ name: "Pentesting", level: 15 }, { name: "Cloud Security", level: 20 }] },
  cloud: { have: ["Linux"], gap: [{ name: "Kubernetes", level: 20 }, { name: "AWS", level: 30 }, { name: "CI/CD", level: 40 }] },
};

function CareerGoalPage() {
  const [selected, setSelected] = useState("swe");
  const [analyzed, setAnalyzed] = useState(true);
  const data = skillsMap[selected];

  return (
    <>
      <PageHeader
        title={<>Pick your <span className="text-gradient">career goal</span></>}
        subtitle="Our AI analyzes your skills and identifies exactly what's missing."
      />

      <div className="grid md:grid-cols-3 gap-4">
        {goals.map((g) => (
          <button
            key={g.id}
            onClick={() => { setSelected(g.id); setAnalyzed(false); }}
            className={`glass rounded-2xl p-5 text-left transition-all ${
              selected === g.id ? "ring-2 ring-primary shadow-elegant" : "hover:bg-white/5"
            }`}
          >
            <div className="font-semibold">{g.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{g.desc}</div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setAnalyzed(true)}
          className="btn-primary rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2"
        >
          <Sparkles className="h-4 w-4" /> Run AI Skill Gap Analysis
        </button>
      </div>

      {analyzed && (
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Your Strengths</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.have.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-orange-400" />
              <h3 className="font-semibold">Skill Gaps</h3>
            </div>
            <div className="mt-4 space-y-3">
              {data.gap.map((g) => (
                <div key={g.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{g.name}</span>
                    <span className="text-muted-foreground">{g.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${g.level}%`, background: "var(--gradient-primary)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary-glow" />
              <h3 className="font-semibold">AI Recommendations</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Start a focused 6-week System Design track — highest impact for your goal.</li>
              <li>• Practice 3 DSA problems daily; aim for medium-level LeetCode.</li>
              <li>• Build one full-stack project (Next.js + Node) to fill backend gaps.</li>
              <li>• Schedule 2 mock interviews per week starting this Friday.</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
